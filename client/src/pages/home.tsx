import { Button } from "@/components/ui/button";
import InteractiveCarousel from "@/components/interactive-carousel";
import { Bolt, TrendingUp, Globe } from "lucide-react";
import { Link } from "wouter";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import React, { useRef, useState } from "react";

const BRAND_COLORS = [
  "#FFEDFA", // 크림핑크
  "#FFB8E0", // 연핑크
];

export default function Home() {
  const [bgColor, setBgColor] = useState(BRAND_COLORS[0]);
  const [wave, setWave] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const waveRef = useRef<HTMLDivElement>(null);

  // 카드 그라디언트 시작/끝점 색상 동적 결정
  let gradStart = "#FFEDFA";
  let gradEnd = "#FFB8E0";
  if (bgColor === "#FFB8E0") {
    gradStart = "#FFB8E0";
    gradEnd = "#FFEDFA"; // 끝점도 크림핑크로
  } else if (bgColor === "#BE5985") {
    gradStart = "#BE5985";
    gradEnd = "#FFEDFA";
  }

  // 카드 gradient 밝은 영역 범위 동적 결정
  const gradMid = bgColor === "#FFB8E0" ? "30%" : "50%";

  // 카드 버튼 색상 동적 결정 (버건디/흰색)
  let btnBg = "#BE5985"; // 기본 버건디
  let btnHover = "#fff"; // hover 시 흰색
  let btnText = "#fff"; // 텍스트는 흰색
  if (bgColor === "#FFB8E0") {
    btnBg = "#BE5985"; // 배경이 연핑크면 버튼은 버건디
    btnHover = "#fff"; // hover 시 흰색
    btnText = "#fff"; // 텍스트는 흰색
  }

  // 카드 그림자 색상 동적 결정
  const cardShadowColor = bgColor === "#FFB8E0" ? "#FFEDFA" : "#FFB8E0";
  const cardShadowRgba = cardShadowColor === "#FFEDFA" ? "rgba(255,237,250,0.28)" : "rgba(255,184,224,0.28)";

  // 파동 + 컬러 변경 트리거
  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setWave(false); // reset
    setTimeout(() => {
      setWave(true);
      // 컬러 순환
      const nextIdx = (colorIdx + 1) % BRAND_COLORS.length;
      setColorIdx(nextIdx);
      setBgColor(BRAND_COLORS[nextIdx]);
      // 파동 끝나면 wave false (애니메이션 700ms)
      setTimeout(() => setWave(false), 700);
    }, 10);
  };

  // 중앙 하트 버튼 배경/테두리/아이콘 색상 동적 결정
  const heartBtnBg = "#fff"; // 항상 흰색
  let heartBtnBorder = "#FFEDFA"; // 기본 크림핑크
  if (bgColor === "#FFB8E0") heartBtnBorder = "#FFEDFA";
  const heartIconColor = "#F472B6"; // Tailwind pink-400

  // 중앙 하트 버튼 그림자 동적 결정 (연핑크 배경에서 덜 강조)
  const heartBtnShadow = bgColor === "#FFB8E0"
    ? "0 0 24px 8px rgba(139,44,74,0.28), 0 0 0 4px #fff"
    : "0 0 32px 8px rgba(190, 89, 133, 0.25), 0 0 0 4px #fff";

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
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none active:bg-[#FFB8E0] active:text-white"
              style={{
                background: `radial-gradient(circle at 100% 100%, ${gradStart} 0%, ${gradStart} ${gradMid}, ${gradEnd} 100%)`,
                boxShadow: `4px 4px 12px 0 ${cardShadowRgba}`
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="text-3xl font-bold text-pink-400">?</span>
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
                style={{ background: btnBg, color: btnText }}
                onMouseOver={e => { e.currentTarget.style.background = btnHover; e.currentTarget.style.color = btnBg === "#BE5985" ? "#BE5985" : "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.background = btnBg; e.currentTarget.style.color = btnText; }}
              >
                <Link href="/test">시그널 카드 만들기</Link>
              </Button>
            </div>
            {/* 카드 2: 우리의 시그널 조합 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none active:bg-[#FFB8E0] active:text-white"
              style={{
                background: `radial-gradient(circle at 0% 100%, ${gradStart} 0%, ${gradStart} ${gradMid}, ${gradEnd} 100%)`,
                boxShadow: `-4px 4px 12px 0 ${cardShadowRgba}`
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="text-3xl font-bold text-pink-400">+</span>
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
                style={{ background: btnBg, color: btnText }}
                onMouseOver={e => { e.currentTarget.style.background = btnHover; e.currentTarget.style.color = btnBg === "#BE5985" ? "#BE5985" : "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.background = btnBg; e.currentTarget.style.color = btnText; }}
              >
                <Link href="/mix">시그널 카드 조합하기</Link>
              </Button>
            </div>
            {/* 카드 3: 우리의 시그널 약속서 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none active:bg-[#FFB8E0] active:text-white"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${gradStart} 0%, ${gradStart} ${gradMid}, ${gradEnd} 100%)`,
                boxShadow: `4px -4px 12px 0 ${cardShadowRgba}`
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="text-3xl font-bold text-pink-400">=</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#222' }}>우리의 시그널 약속서</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-left">
                <span className="block sm:hidden">
                  {"연인과 시그널 약속을\n간편하게 추천받고\n적어보세요".split('\n').map((line, idx) => (
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
                style={{ background: btnBg, color: btnText }}
                onMouseOver={e => { e.currentTarget.style.background = btnHover; e.currentTarget.style.color = btnBg === "#BE5985" ? "#BE5985" : "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.background = btnBg; e.currentTarget.style.color = btnText; }}
              >
                <Link href="/promise">시그널 약속서 만들기</Link>
              </Button>
            </div>
            {/* 카드 4: 우리의 시그널 카드 */}
            <div
              className="home-card rounded-2xl p-5 sm:p-8 flex flex-col items-center transition-all duration-300 focus:outline-none focus-visible:outline-none active:bg-[#FFB8E0] active:text-white"
              style={{
                background: `radial-gradient(circle at 0% 0%, ${gradStart} 0%, ${gradStart} ${gradMid}, ${gradEnd} 100%)`,
                boxShadow: `-4px -4px 12px 0 ${cardShadowRgba}`
              }}
              tabIndex={0}
              onClick={e => e.currentTarget.blur()}
              onTouchEnd={e => e.currentTarget.blur()}
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  {/* 하트 추가 */}
                  <path d="M11 9 C9 7, 6 11, 11 14 C16 11, 13 7, 11 9 Z" fill="#F472B6" stroke="none"/>
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
                style={{ background: btnBg, color: btnText }}
                onMouseOver={e => { e.currentTarget.style.background = btnHover; e.currentTarget.style.color = btnBg === "#BE5985" ? "#BE5985" : "#fff"; }}
                onMouseOut={e => { e.currentTarget.style.background = btnBg; e.currentTarget.style.color = btnText; }}
              >
                <Link href="/card">시그널 카드 보기</Link>
              </Button>
            </div>
            {/* 중앙 하트 버튼 */}
            <button
              className="home-heart-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-17 h-17 sm:w-22 sm:h-22 rounded-full flex items-center justify-center border-4 z-20 focus:outline-none focus-visible:outline-none active:bg-[#EC7FA9] active:text-white transition"
              aria-label="메인 하트 액션"
              onClick={handleHeartClick}
              onTouchEnd={e => e.currentTarget.blur()}
              style={{ boxShadow: heartBtnShadow, background: heartBtnBg, borderColor: heartBtnBorder }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 heart-svg" fill="none" viewBox="0 3 24 20" stroke={heartIconColor} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 7 16.5 5 13.5C3.5 11.5 4.5 8.5 7 8.5C8.5 8.5 10 10 12 12C14 10 15.5 8.5 17 8.5C19.5 8.5 20.5 11.5 19 13.5C17 16.5 12 21 12 21Z" />
              </svg>
              {/* 파동 애니메이션 */}
              <div
                ref={waveRef}
                className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] ${wave ? "wave-animate" : ""}`}
                style={{
                  width: "200vw",
                  height: "200vw",
                  background: bgColor,
                  borderRadius: "50%",
                  opacity: wave ? 0.25 : 0,
                }}
              />
            </button>
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
            .home-heart-btn:hover {
              background: #EC7FA9 !important;
              color: #fff !important;
            }
            .home-heart-btn:hover .heart-svg {
              stroke: #fff !important;
            }
          }
          .wave-animate {
            animation: wave-pop 0.7s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes wave-pop {
            0% {
              transform: translate(-50%, -50%) scale(0.2);
              opacity: 0.4;
            }
            60% {
              opacity: 0.25;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
