import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import { Button } from "@/components/ui/button";

export default function PromisePage() {
  return (
    <div className="min-h-screen bg-[#F8E1E7] flex flex-col">
      <CommonHeader colorMode="black" />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold mb-4 text-[#9C3D53]">우리의 결혼 약속서</h1>
        <p className="mb-8 text-gray-700">함께의 다짐을 특별하게 기록해보세요.</p>
        <Button className="bg-[#9C3D53] text-white rounded-xl px-8 py-3">약속서 작성 시작</Button>
      </main>
      <CommonFooter />
    </div>
  );
} 