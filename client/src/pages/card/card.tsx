import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import { Button } from "@/components/ui/button";

export default function CardPage() {
  return (
    <div className="min-h-screen bg-[#F8E1E7] flex flex-col">
      <CommonHeader colorMode="black" />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold mb-4 text-[#9C3D53]">시그널 카드</h1>
        <p className="mb-8 text-gray-700">나만의 시그널 카드를 예쁘게 꾸며보세요.</p>
        <Button className="bg-[#9C3D53] text-white rounded-xl px-8 py-3">카드 꾸미기</Button>
      </main>
      <CommonFooter />
    </div>
  );
} 