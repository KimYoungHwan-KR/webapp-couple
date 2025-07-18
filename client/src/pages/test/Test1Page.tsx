import React, { useState } from "react";
import CommonHeader from "@/components/CommonHeader";
import { Progress } from "@/components/ui/progress";

const QUESTIONS = [
  {
    question: "연인과의 중요한 대화를 할 때, 당신은 주로 어떤 방식을 선호하나요?",
    options: [
      { text: "서로의 감정을 깊이 나누며 눈빛과 표정으로 공감하는 대화", score: 4 },
      { text: "문제 해결을 위한 구체적인 방법과 계획을 논의하는 대화", score: 3 },
      { text: "편안하고 솔직하게 서로의 의견을 주고받는 대화", score: 2 },
      { text: "상대방의 의견을 먼저 듣고 내 생각을 조심스럽게 말하는 대화", score: 1 },
    ],
  },
  {
    question: "연인과의 주말 데이트 계획을 세울 때, 당신의 우선순위는 무엇인가요?",
    options: [
      { text: "새로운 장소를 탐험하며 특별한 추억과 감동을 만드는 것", score: 4 },
      { text: "실용적이고 효율적인 동선으로 최대한 많은 것을 경험하는 것", score: 3 },
      { text: "익숙하고 편안한 장소에서 함께 휴식을 취하거나 좋아하는 것을 하는 것", score: 2 },
      { text: "연인의 취향을 고려하여 함께 즐길 수 있는 활동을 계획하는 것", score: 1 },
    ],
  },
  {
    question: "연인이 슬퍼하거나 힘들어할 때, 당신은 어떻게 반응하나요?",
    options: [
      { text: "연인의 감정에 깊이 공감하고 따뜻한 말과 위로로 안아준다.", score: 4 },
      { text: "문제의 원인을 파악하고 실질적인 조언이나 해결책을 제시하려 한다.", score: 3 },
      { text: "조용히 곁에 있어주며 필요한 것이 없는지 먼저 물어본다.", score: 2 },
      { text: "함께 시간을 보내며 기분 전환을 시켜주려 노력한다.", score: 1 },
    ],
  },
  {
    question: "기념일을 준비할 때, 당신은 어떤 선물을 선호하나요?",
    options: [
      { text: "직접 만든 것이나 특별한 스토리가 담긴, 감동을 줄 수 있는 선물", score: 4 },
      { text: "연인에게 실용적으로 필요한 물건이나 오랫동안 사용할 수 있는 선물", score: 3 },
      { text: "연인이 평소 가지고 싶어 했던 것 중 비교적 부담 없이 줄 수 있는 선물", score: 2 },
      { text: "함께 경험할 수 있는 데이트 코스나 활동을 선물하는 것", score: 1 },
    ],
  },
  {
    question: "연인과 갈등이 생겼을 때, 당신의 주된 대처 방식은 무엇인가요?",
    options: [
      { text: "솔직하게 감정을 표현하고 오해를 풀기 위해 적극적으로 노력한다.", score: 4 },
      { text: "논리적으로 문제의 원인을 분석하고 합리적인 해결책을 찾으려 한다.", score: 3 },
      { text: "잠시 시간을 갖고 감정이 가라앉은 후 차분히 이야기하려 한다.", score: 2 },
      { text: "연인의 입장을 먼저 이해하고 대화의 물꼬를 트려 한다.", score: 1 },
    ],
  },
  {
    question: "함께 살 집을 상상한다면, 가장 중요하게 생각하는 요소는 무엇인가요?",
    options: [
      { text: "아늑하고 따뜻한 분위기, 둘만의 감성을 담을 수 있는 개성 있는 공간", score: 4 },
      { text: "편리한 교통과 생활 편의시설, 효율적인 동선과 실용적인 수납공간", score: 3 },
      { text: "넓고 쾌적하며, 각자의 프라이버시를 존중할 수 있는 여유로운 공간", score: 2 },
      { text: "함께 가꾸고 변화시켜 나갈 수 있는, 추억을 담을 수 있는 공간", score: 1 },
    ],
  },
  {
    question: "연인과의 여행을 계획할 때, 당신이 가장 기대하는 것은 무엇인가요?",
    options: [
      { text: "새로운 장소에서 연인과 함께 특별하고 잊지 못할 추억을 만드는 것", score: 4 },
      { text: "유명한 관광지를 효율적으로 둘러보고 다양한 경험을 하는 것", score: 3 },
      { text: "편안하게 쉬면서 여유를 즐기고 재충전하는 것", score: 2 },
      { text: "연인과 함께 계획을 세우고 그 과정을 즐기는 것", score: 1 },
    ],
  },
  {
    question: "연인에게 사랑을 표현할 때, 당신은 어떤 방식을 선호하나요?",
    options: [
      { text: "따뜻한 말 한마디나 포옹, 스킨십 등 직접적인 애정 표현", score: 4 },
      { text: "필요한 것을 챙겨주거나 힘든 일을 도와주는 행동", score: 3 },
      { text: "함께 시간을 보내거나 정성이 담긴 선물을 주는 것", score: 2 },
      { text: "연인이 좋아하는 것을 기억하고 섬세하게 챙겨주는 것", score: 1 },
    ],
  },
  {
    question: "새로운 취미를 연인과 함께 시작한다면, 어떤 종류를 선택하겠어요?",
    options: [
      { text: "그림 그리기, 악기 배우기 등 감성적이고 창의적인 활동", score: 4 },
      { text: "운동, 요리 등 함께 결과물을 만들거나 실용적인 활동", score: 3 },
      { text: "영화 감상, 독서 등 편안하게 함께 즐길 수 있는 활동", score: 2 },
      { text: "새로운 기술을 배우거나 미래를 위한 자기 계발 활동", score: 1 },
    ],
  },
  {
    question: "재정 관리에 있어 연인과 함께 중요하게 생각하는 부분은 무엇인가요?",
    options: [
      { text: "미래를 위한 투자나 저축 계획을 함께 세우고 실행하는 것", score: 4 },
      { text: "현재의 만족을 위해 합리적으로 소비하고 즐기는 것", score: 3 },
      { text: "각자의 소비 습관을 존중하며 큰 틀에서 조율하는 것", score: 2 },
      { text: "투명하게 공유하고 서로의 의견을 존중하며 지출 계획을 세우는 것", score: 1 },
    ],
  },
  {
    question: "주말에 연인과 가장 하고 싶은 활동은 무엇인가요?",
    options: [
      { text: "미술관, 공연 등 문화생활을 함께 즐기며 감성을 공유하는 것", score: 4 },
      { text: "맛집 탐방, 쇼핑 등 활동적인 데이트를 통해 에너지를 발산하는 것", score: 3 },
      { text: "집에서 영화를 보거나 함께 요리하며 편안하게 시간을 보내는 것", score: 2 },
      { text: "특별한 계획 없이 즉흥적적으로 즐기는 것", score: 1 },
    ],
  },
  {
    question: "연인의 사소한 습관 중 가장 신경 쓰이는 것이 있다면 어떻게 이야기하나요?",
    options: [
      { text: "상대방의 기분을 상하지 않게 조심스럽게, 하지만 진심을 담아 이야기한다.", score: 4 },
      { text: "문제점을 명확히 짚어주고 개선 방안을 함께 논의하려 한다.", score: 3 },
      { text: "웬만하면 넘어가는 편이고, 정 불편하면 돌려 말하거나 힌트를 준다.", score: 2 },
      { text: "직접적으로 말하기보다 나의 불편함을 간접적으로 표현한다.", score: 1 },
    ],
  },
  {
    question: "연인과 미래를 계획할 때, 당신이 가장 중요하게 생각하는 가치는 무엇인가요?",
    options: [
      { text: "서로의 감정적인 교류와 유대감 강화, 그리고 행복한 추억 만들기", score: 4 },
      { text: "안정적인 경제적 기반과 현실적인 목표 달성, 그리고 함께 성장하기", score: 3 },
      { text: "각자의 삶을 존중하며 균형을 이루고, 자유롭게 관계를 유지하는 것", score: 2 },
      { text: "서로에게 긍정적인 영향을 주고받으며 함께 발전하는 것", score: 1 },
    ],
  },
  {
    question: "연인과 함께 할 수 있는 특별한 이벤트가 있다면 어떤 것을 택하겠어요?",
    options: [
      { text: "둘만의 스토리를 담은 깜짝 이벤트나 로맨틱한 프로포즈", score: 4 },
      { text: "실용적인 필요를 충족시켜주거나 삶에 도움이 되는 선물이나 경험", score: 3 },
      { text: "편안하고 소박하지만 둘에게 의미 있는 작은 이벤트", score: 2 },
      { text: "함께 봉사활동을 하거나 사회에 기여하는 활동", score: 1 },
    ],
  },
  {
    question: "연인과의 관계에서 가장 중요하다고 생각하는 것은 무엇인가요?",
    options: [
      { text: "깊은 공감과 감정적인 소통, 그리고 변치 않는 사랑", score: 4 },
      { text: "서로의 발전을 돕고 현실적인 목표를 함께 이루는 것", score: 3 },
      { text: "서로를 믿고 존중하며 자유롭게 관계를 유지하는 것", score: 2 },
      { text: "서로에게 좋은 영향을 주며 함께 성장하는 것", score: 1 },
    ],
  },
];

const RESULT_TYPES = [
  {
    min: 46,
    max: 60,
    title: "낭만 감성형 시그널 (Romantic Empath)",
    description:
      "연인과의 깊은 감정적 교류와 낭만적인 순간을 가장 중요하게 생각하는 유형입니다. 섬세하고 감성적이며, 사랑하는 사람과의 유대감을 통해 관계의 만족을 얻습니다. 특별한 의미가 담긴 기념일이나 이벤트에 감동하고, 갈등 시에는 진솔한 감정 표현으로 문제를 해결하려 합니다.",
  },
  {
    min: 31,
    max: 45,
    title: "현실 조화형 시그널 (Practical Harmonizer)",
    description:
      "감성적인 부분과 현실적인 부분의 균형을 중요하게 생각하는 유형입니다. 로맨틱한 순간도 소중히 여기지만, 관계의 안정과 발전을 위한 실질적인 노력 또한 게을리하지 않습니다. 합리적인 사고와 유연한 태도로 연인과의 조화로운 관계를 만들어갑니다.",
  },
  {
    min: 16,
    max: 30,
    title: "실용 이성형 시그널 (Rational Pragmatist)",
    description:
      "연인 관계에서 실용성과 효율성, 그리고 현실적인 목표 달성을 중요하게 생각하는 유형입니다. 불필요한 감정 소모보다는 명확한 소통과 문제 해결에 집중합니다. 관계의 발전과 안정을 위해 실질적인 노력을 기울이며, 합리적인 방식으로 관계를 이끌어갑니다.",
  },
  {
    min: 0,
    max: 15,
    title: "독립 추구형 시그널 (Independent Explorer)",
    description:
      "연인과의 관계에서 개인의 자유와 독립성을 존중받는 것을 중요하게 생각하는 유형입니다. 서로의 공간과 시간을 존중하며, 함께하는 순간만큼은 진심으로 즐기고자 합니다. 지나친 구속이나 간섭보다는 서로에게 긍정적인 영향을 주고받는 관계를 선호합니다.",
  },
];

function getResultType(score: number) {
  return RESULT_TYPES.find(type => score >= type.min && score <= type.max);
}

// Fisher-Yates shuffle 함수 추가
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Test1Page() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    if (answers.length < QUESTIONS.length) {
      setAnswers([...answers, score]);
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResultType(totalScore);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start sm:justify-center bg-[#FFFAED] px-4 pt-16 sm:pt-8 pb-0 sm:py-12">
      <CommonHeader colorMode="test" />
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 sm:mt-8">
        {/* 진행률 바 */}
        {!showResult && answers.length < QUESTIONS.length && (
          <div className="mb-4">
            <div className="mb-2 relative">
              <Progress value={((answers.length) / QUESTIONS.length) * 100} className="bg-[#E5E7EB]" fillColor="#D1D161" />
              <div
                className="absolute inset-0 flex items-center justify-center text-xs font-bold"
                style={{ color: '#fff', pointerEvents: 'none' }}
              >
                {answers.length} / {QUESTIONS.length}
              </div>
            </div>
          </div>
        )}
        {/* 기존 질문/결과 UI */}
        {!showResult && answers.length < QUESTIONS.length ? (
          <>
            <h2 className="text-lg font-bold mb-4 break-keep" style={{ color: '#222' }}>
              {QUESTIONS[answers.length].question}
            </h2>
            <div className="flex flex-col gap-3">
              {shuffleArray(QUESTIONS[answers.length].options).map((opt, idx) => {
                // 각 선택지별 테두리 색상 지정
                let borderColor = "#FF987C"; // 기본값
                if (idx === 0) borderColor = "#FF987C"; // 1번(가장 위)
                if (idx === 1) borderColor = "#FFB27C"; // 2번
                if (idx === 2) borderColor = "#FFD27C"; // 3번
                if (idx === 3) borderColor = "#D1D161"; // 4번

                return (
                  <button
                    key={idx}
                    className="test-choice-btn w-full py-2 px-3 rounded-xl border text-sm font-semibold transition-colors bg-[#FFFAED] whitespace-normal break-keep text-left"
                    style={{
                      borderColor,
                      color: "#222",
                    }}
                    onClick={e => {
                      handleAnswer(opt.score);
                      e.currentTarget.blur();
                    }}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
            {/* 뒤로가기 버튼 */}
            {answers.length > 0 && (
              <button
                className="mt-5 px-5 py-2 rounded-xl border border-[#FF987C] text-[#FF987C] font-bold sm:hover:bg-[#FF987C] sm:hover:text-white transition-colors text-sm"
                onClick={() => setAnswers(answers.slice(0, -1))}
              >
                ← 이전 질문
              </button>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-3 text-[#FF987C] break-keep">나의 시그널 카드 유형</h2>
            <div className="mb-3 text-base font-semibold break-keep">{result?.title}</div>
            <div className="mb-6 text-gray-700 text-sm break-keep">{result?.description}</div>
            <div className="mb-2 text-gray-500 text-xs break-keep">총점: {totalScore}점</div>
            <button
              className="mt-5 px-5 py-2 rounded-xl bg-[#FF987C] text-white font-bold text-sm"
              onClick={handleRestart}
            >
              다시 테스트하기
            </button>
          </>
        )}
      </div>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .test-choice-btn:hover {
            background: #FF987C !important;
            color: #fff !important;
          }
        }
      `}</style>
    </div>
  );
} 