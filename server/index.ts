import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// 서버 종료 시 정리 함수
const gracefulShutdown = (server: any, signal: string) => {
  log(`\n${signal} 신호를 받았습니다. 서버를 종료합니다...`);
  
  server.close((err: any) => {
    if (err) {
      log(`서버 종료 중 오류 발생: ${err.message}`);
      process.exit(1);
    }
    
    log('서버가 성공적으로 종료되었습니다.');
    process.exit(0);
  });

  // 10초 후 강제 종료
  setTimeout(() => {
    log('강제 종료: 10초 타임아웃');
    process.exit(1);
  }, 10000);
};

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 3000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 3000;
  server.listen({
    port,
    host: "0.0.0.0",
  }, () => {
    log(`serving on port ${port}`);
  });

  // 시그널 핸들러 등록
  process.on('SIGTERM', () => gracefulShutdown(server, 'SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown(server, 'SIGINT'));
  
  // 예상치 못한 에러 처리
  process.on('uncaughtException', (err) => {
    log(`예상치 못한 에러 발생: ${err.message}`);
    log(err.stack || '스택 트레이스 없음');
    gracefulShutdown(server, 'uncaughtException');
  });

  process.on('unhandledRejection', (reason, promise) => {
    log(`처리되지 않은 Promise 거부: ${reason}`);
    gracefulShutdown(server, 'unhandledRejection');
  });

  // 서버 에러 처리
  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      log(`포트 ${port}가 이미 사용 중입니다. 다른 포트를 사용하거나 기존 프로세스를 종료하세요.`);
    } else {
      log(`서버 에러: ${err.message}`);
    }
    process.exit(1);
  });
})();
