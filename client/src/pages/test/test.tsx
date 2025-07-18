import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

const CARD_BTN_BG = "#FF987C";

const TEST_CARDS = [
  { title: '테스트 카드 1', description: '이것은 첫 번째 테스트 카드입니다.' },
  { title: '테스트 카드 2', description: '이것은 두 번째 테스트 카드입니다.' },
  { title: '테스트 카드 3', description: '이것은 세 번째 테스트 카드입니다.' },
  { title: '테스트 카드 4', description: '이것은 네 번째 테스트 카드입니다.' },
];

export default function TestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'rgba(255,250,237,0.7)' }}>
      <CommonHeader colorMode="test" />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
          {TEST_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow p-6 flex flex-col items-center border"
              style={{ background: '#FFFAED', borderColor: '#FF987C', borderWidth: 2 }}
            >
              <h2 className="text-lg font-bold mb-2 text-[#FF987C]">{card.title}</h2>
              <p className="text-gray-700 mb-4">{card.description}</p>
              {idx === 0 ? (
                <Button
                  asChild
                  className="text-white rounded-xl px-8 py-3"
                  style={{ background: CARD_BTN_BG }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = CARD_BTN_BG;
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = CARD_BTN_BG;
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  <Link href="/test/test1">테스트 시작</Link>
                </Button>
              ) : (
                <Button
                  className="text-white rounded-xl px-8 py-3"
                  style={{ background: CARD_BTN_BG }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = CARD_BTN_BG;
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = CARD_BTN_BG;
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  테스트 시작
                </Button>
              )}
            </div>
          ))}
        </div>
      </main>
      <CommonFooter />
    </div>
  );
} 