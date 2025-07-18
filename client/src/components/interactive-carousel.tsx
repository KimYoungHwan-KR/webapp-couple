import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Bolt,
  TrendingUp,
  Globe,
} from "lucide-react";
import React from "react";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: typeof Bolt;
  isHot?: boolean;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Couple Signal",
    description:
      "연인과의 설렘과 감성을 담은 Couple Signal입니다.\n저희 브랜드만의 특별한 시그널 카드를 통해\n재밌는 경험을 지금 바로 만나보세요.",
    category: "브랜드 소개",
    icon: Bolt,
    isHot: true,
  },
  {
    id: 2,
    title: "우리의 시그널 테스트",
    description:
      "감성 테스트로 나만의 시그널 카드를 만들어보세요.\n다양한 테스트를 통해 특별한 시그널 카드를 수집하여\n연인과 함께 비교하며 경험할 수 있습니다.",
    category: "시그널 테스트",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "우리의 시그널 조합",
    description:
      "연인과 시그널 카드를 연결하여 조합을 확인하세요.\n수집한 다양한 시그널 카드끼리 연결하여\n연인과의 궁합을 확인해보세요.",
    category: "시그널 조합",
    icon: Globe,
  },
  {
    id: 4,
    title: "우리의 시그널 약속서",
    description:
      "함께 쓰는 시그널 약속서로 연인과 약속을 기록하세요.\n시그널 카드와 조합 카드를 기반으로 둘만의\n소중한 약속을 추천해주고 작성을 할 수 있습니다.",
    category: "시그널 약속서",
    icon: Globe,
  },
  {
    id: 5,
    title: "우리의 시그널 카드",
    description:
      "지금까지 얻은 다양한 카드들을 예쁘게 꾸며보세요.\n수집한 다양한 카드들을 사용자들이 직접\n예쁘게 꾸밀 수 있습니다.",
    category: "시그널 카드",
    icon: TrendingUp,
  },
];

// 시그널 카드 SVG 아이콘 (home.tsx 4번째 카드와 동일)
const SignalCardIcon = ({ color = "#FAAB94", size = "100%" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    {/* 하트 추가 */}
    <path d="M11 9 C9 7, 6 11, 11 14 C16 11, 13 7, 11 9 Z" fill={color} stroke="none"/>
  </svg>
);

const InteractiveCarousel = React.memo(function InteractiveCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 상단 9% 바 */}
      <div style={{height: '9%', minHeight: 24, background: '#FAAB94', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
        {/* 동그라미 3개 */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', paddingLeft: 20, gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF7D59', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFDE94', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#D1D161', display: 'inline-block' }} />
        </div>
      </div>
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl shadow-lg" style={{background: '#FFFAED', position: 'relative'}}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div
                className={"p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"}
                style={{ background: 'transparent' }}
              >
                {/*
                <div className="absolute inset-0 opacity-8 pointer-events-none">
                  <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full blur-xl sm:blur-2xl" />
                  <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-white rounded-full blur-lg sm:blur-xl" />
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-40 sm:h-40 bg-white rounded-full blur-2xl sm:blur-3xl" />
                </div>
                */}

                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full min-h-[400px]">
                  <div className="flex justify-center items-center h-full mt-0 order-2 lg:order-1">
                    <div className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-white/10 rounded-2xl sm:rounded-3xl flex items-center justify-center backdrop-blur-sm" style={{ border: '3px solid #FAAB94' }}>
                      {(() => {
                        switch (slide.category) {
                          case "브랜드 소개":
                            return <span className="text-7xl font-extrabold lg:text-[8rem] -mt-4 lg:-mt-6" style={{ color: '#FAAB94' }}>C/S</span>;
                          case "시그널 테스트":
                            return <span className="text-9xl font-extrabold lg:text-[10rem] -mt-4 lg:-mt-6" style={{ color: '#FAAB94' }}>?</span>;
                          case "시그널 조합":
                            return <span className="text-9xl font-extrabold lg:text-[10rem] -mt-4 lg:-mt-6" style={{ color: '#FAAB94' }}>+</span>;
                          case "시그널 약속서":
                            return <span className="text-9xl font-extrabold lg:text-[10rem] -mt-4 lg:-mt-6" style={{ color: '#FAAB94' }}>=</span>;
                          case "시그널 카드":
                            return (
                              <span className="block w-32 h-32 lg:w-[12rem] lg:h-[12rem]" style={{ lineHeight: 0 }}>
                                <SignalCardIcon color="#FAAB94" size="100%" />
                              </span>
                            );
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center h-full text-center lg:text-left order-1 lg:order-2">
                    <div className="flex justify-center lg:justify-start">
                      <span className="inline-block rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mt-10" style={{ background: 'rgba(255, 125, 89, 0.2)', color: '#FF7D59' }}>
                        {slide.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-4 leading-tight" style={{ color: '#222' }}>
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 pb-4 leading-relaxed" style={{ color: '#222' }}>
                      {slide.description.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 네비게이션 버튼: 연한 회색 배경으로 변경 */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg border-0 hover:scale-110 transition-all duration-300 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-pink-500" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 hover:bg-gray-200 rounded-full shadow-lg border-0 hover:scale-110 transition-all duration-300 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 hover:text-pink-500" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full p-0 transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#FAAB94] hover:bg-[#FAAB94]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
});

export default InteractiveCarousel;
