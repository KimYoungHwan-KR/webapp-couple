import { Button } from "@/components/ui/button";
import InteractiveCarousel from "@/components/interactive-carousel";
import { Bolt, TrendingUp, Globe } from "lucide-react";
import { Link } from "wouter";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import React, { useRef, useState } from "react";

const BRAND_COLORS = [
  "rgba(255,250,237,0.7)", // 크림베이지(투명도 0.7)
  "#FFB8E0", // 연핑크
];

// 카드 배경/버튼 색상 고정값 정의
const CARD_BG = "#FFFAED"; // 카드 배경색
const CARD_BTN_BG = "#FF987C"; // 1번 카드 버튼 배경색 
const CARD_BTN_BG2 = "#D1D161"; // 2번 카드 버튼 배경색 
const CARD_BTN_BG3 = "#FFD578"; // 3번 카드 버튼 배경색 
const CARD_BTN_BG4 = "#B4CCFF"; // 4번 카드 버튼 배경색 
const CARD_BTN_TEXT = "#fff"; // 카드 버튼 텍스트색
const CARD_ICON = "FF7D59"

export default function Home() {
  const [bgColor, setBgColor] = useState(BRAND_COLORS[0]);
  const [wave, setWave] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const waveRef = useRef<HTMLDivElement>(null);

  
  return (
    <div
      className="font-korean min-h-screen transition-colors duration-700 overflow-hidden"
      style={{ background: bgColor }}
    >
      <CommonHeader colorMode="black" />
      {/* --- 카우슬(캐러셀) 섹션을 위로 이동 --- */}
      <section className="pt-32">
        <div className="container mx-auto px-6">
          <InteractiveCarousel />
        </div>
      </section>
      {/* --- 카드(2x2 그리드) 섹션을 아래로 이동 --- */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative grid grid-cols-2 grid-rows-2 gap-4 max-w-xl mx-auto">
            {/* 카드 1: 우리의 시그널 테스트 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none border-2"
              style={{
                background: CARD_BG,
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.13)',
                borderColor: CARD_BTN_BG
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md" style={{ background: CARD_BTN_BG }}>
                <span className="text-3xl font-bold" style={{ color: '#fff' }}>?</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#222' }}>우리의 시그널 테스트</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
                <span className="block sm:hidden">
                  {"감성 테스트로 나만의\n시그널 카드를\n만들어보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
                <span className="hidden sm:block">
                  {"감성 테스트로 나만의 시그널\n카드를 만들어보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </p>
              <Button asChild
                className="w-full font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
                style={{ background: CARD_BTN_BG, color: CARD_BTN_TEXT }}
                onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#FF987C'; }}
                onMouseOut={e => { e.currentTarget.style.background = CARD_BTN_BG; e.currentTarget.style.color = CARD_BTN_TEXT; }}
              >
                <Link href="/test">시그널 카드 생성</Link>
              </Button>
            </div>
            {/* 카드 2: 우리의 시그널 조합 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none border-2"
              style={{
                background: CARD_BG,
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.13)',
                borderColor: CARD_BTN_BG2
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md" style={{ background: CARD_BTN_BG2 }}>
                <span className="text-3xl font-bold" style={{ color: '#fff' }}>+</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#222' }}>우리의 시그널 조합</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
                <span className="block sm:hidden">
                  {"연인의 시그널 카드를\n연결해 커플 궁합을\n확인하세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
                <span className="hidden sm:block">
                  두 사람의 시그널 카드를 연결해 커플 궁합을 확인하세요.
                </span>
              </p>
              <Button asChild
                className="w-full font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
                style={{ background: CARD_BTN_BG2, color: CARD_BTN_TEXT }}
                onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#D1D161'; }}
                onMouseOut={e => { e.currentTarget.style.background = CARD_BTN_BG2; e.currentTarget.style.color = CARD_BTN_TEXT; }}
              >
                <Link href="/mix">시그널 카드 조합</Link>
              </Button>
            </div>
            {/* 카드 3: 우리의 시그널 약속서 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none border-2"
              style={{
                background: CARD_BG,
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.13)',
                borderColor: CARD_BTN_BG3
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md" style={{ background: CARD_BTN_BG3 }}>
                <span className="text-3xl font-bold" style={{ color: '#fff' }}>=</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#222' }}>우리의 시그널 약속서</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
                <span className="block sm:hidden">
                  {"연인과 시그널 약속을\n간편하게 추천받고\n적어보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
                <span className="hidden sm:block">
                  {"우리만의 시그널 약속을\n간편하게 적어보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </p>
              <Button asChild
                className="w-full font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
                style={{ background: CARD_BTN_BG3, color: CARD_BTN_TEXT }}
                onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#FFD578'; }}
                onMouseOut={e => { e.currentTarget.style.background = CARD_BTN_BG3; e.currentTarget.style.color = CARD_BTN_TEXT; }}
              >
                <Link href="/promise">시그널 약속서 작성</Link>
              </Button>
            </div>
            {/* 카드 4: 우리의 시그널 카드 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none border-2"
              style={{
                background: CARD_BG,
                boxShadow: '0 4px 16px 0 rgba(0,0,0,0.13)',
                borderColor: CARD_BTN_BG4
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md" style={{ background: CARD_BTN_BG4 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  {/* 하트 추가 */}
                  <path d="M11 9 C9 7, 6 11, 11 14 C16 11, 13 7, 11 9 Z" fill="#fff" stroke="none"/>
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#222' }}>우리의 시그널 카드</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
                <span className="block sm:hidden">
                  {"시그널 카드, 약속서를\n한눈에 보고 예쁘게\n꾸며보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
                <span className="hidden sm:block">
                  {"시그널 카드를 한눈에 보고\n예쁘게 꾸며보세요.".split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </p>
              <Button asChild
                className="w-full font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
                style={{ background: CARD_BTN_BG4, color: CARD_BTN_TEXT }}
                onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#B4CCFF'; }}
                onMouseOut={e => { e.currentTarget.style.background = CARD_BTN_BG4; e.currentTarget.style.color = CARD_BTN_TEXT; }}
              >
                <Link href="/card">시그널 카드 확인</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CommonFooter />
      <style>
        {`
          @media (hover: hover) and (pointer: fine) {
            .home-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 24px 0 rgba(190, 89, 133, 0.12);
              background: radial-gradient(circle at 50% 50%, #FFEDFA 0%, #FFB8E0 100%);
            }
          }
        `}
      </style>
    </div>
  );
}
