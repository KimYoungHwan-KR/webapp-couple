import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";

const Home = lazy(() => import("@/pages/home"));
const PromisePage = lazy(() => import("@/pages/promise/promise"));
const MixPage = lazy(() => import("@/pages/mix/mix"));
const CardPage = lazy(() => import("@/pages/card/card"));
const TestPage = lazy(() => import("@/pages/test/test"));
const Test1Page = lazy(() => import("@/pages/test/Test1Page"));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 min-w-0 overflow-visible">
    <span
      className="inline-block w-auto whitespace-nowrap text-center text-4xl md:text-6xl font-bold mb-8 pb-36 leading-normal bg-gradient-to-r from-[#222] via-[#888] to-[#fff] bg-clip-text text-transparent animate-gradient-move"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        opacity: 0.99,
        textShadow: "0 1px 1px rgba(0,0,0,0.01)"
      }}
    >
      Couple Signal
    </span>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/promise" component={PromisePage} />
        <Route path="/mix" component={MixPage} />
        <Route path="/card" component={CardPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/test/test1" component={Test1Page} />
      </Switch>
      <Toaster />
    </Suspense>
  );
}
