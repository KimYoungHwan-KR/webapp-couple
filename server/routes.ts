import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // 현재 프로젝트는 정적 데이터만 사용하므로 API 라우트가 필요하지 않습니다.
  // 추후 데이터베이스 연동 시 필요한 API 라우트를 추가할 예정입니다.

  const httpServer = createServer(app);

  return httpServer;
}
