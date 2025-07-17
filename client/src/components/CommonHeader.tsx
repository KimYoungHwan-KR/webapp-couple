import { CreditCard } from "lucide-react";
import { Link } from "wouter";

interface CommonHeaderProps {
  colorMode?: "black" | "default";
  gradient?: string;
}

export default function CommonHeader({ colorMode = "default" }: CommonHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-2 sm:px-3 pt-1 pb-2 sm:py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* 로고와 텍스트 클릭 시 홈으로 이동 */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
              <h1 className="text-lg sm:text-2xl font-bold pl-2 sm:pl-4" style={{ color: '#2C2C34' }}>Couple Signal</h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 