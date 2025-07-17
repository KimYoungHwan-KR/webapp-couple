import { PersonalityResult } from "@shared/schema";

export const personalityResults: Record<string, PersonalityResult> = {
  teto_girl: {
    type: "teto_girl",
    title: "테토녀",
    subtitle: "따뜻하고 감성적인 당신",
    icon: "💖",
    description: "당신은 따뜻하고 감성적인 테토녀입니다! 감정표현이 풍부하고, 주변 사람들을 배려하는 마음이 깊어요. 로맨틱한 것을 좋아하고, 소중한 사람들과의 시간을 무엇보다 값지게 여기는 당신. 때로는 완벽주의적 성향을 보이기도 하지만, 그만큼 열정적이고 진심이 가득한 사람이에요!",
    stats: { emotion: 90, social: 45 },
    compatibleTypes: ["테토남", "테겐남", "에토남"]
  },
  teto_boy: {
    type: "teto_boy",
    title: "테토남",
    subtitle: "섬세하고 완벽주의인 당신",
    icon: "🌟",
    description: "당신은 섬세하고 완벽주의적인 테토남입니다! 모든 일에 정성을 다하고, 디테일을 놓치지 않는 꼼꼼함이 있어요. 감정이 풍부하고 진심 어린 관계를 추구하는 당신. 때로는 스스로에게 엄격하기도 하지만, 그만큼 진정성 있고 믿음직한 사람이에요!",
    stats: { emotion: 95, social: 40 },
    compatibleTypes: ["테토녀", "테겐녀", "에토녀"]
  },
  egen_girl: {
    type: "egen_girl",
    title: "에겐녀",
    subtitle: "자유롭고 당당한 당신",
    icon: "✨",
    description: "당신은 자유롭고 당당한 에겐녀입니다! 자신만의 개성을 소중히 여기고, 솔직한 표현을 두려워하지 않아요. 새로운 경험을 즐기고, 순간순간을 진심으로 살아가는 당신. 때로는 즉흥적이기도 하지만, 그만큼 진짜 자신을 잃지 않는 멋진 사람이에요!",
    stats: { emotion: 35, social: 95 },
    compatibleTypes: ["에겐남", "테겐남", "에토남"]
  },
  egen_boy: {
    type: "egen_boy",
    title: "에겐남",
    subtitle: "솔직하고 자연스러운 당신",
    icon: "🔥",
    description: "당신은 솔직하고 자연스러운 에겐남입니다! 진짜 모습 그대로의 매력이 있고, 꾸밈없는 진정성이 있어요. 자유로운 영혼이지만 따뜻한 마음을 가진 당신. 때로는 무모해 보이기도 하지만, 그만큼 순수하고 매력적인 사람이에요!",
    stats: { emotion: 30, social: 90 },
    compatibleTypes: ["에겐녀", "테겐녀", "에토녀"]
  },
  tegen_girl: {
    type: "tegen_girl",
    title: "테겐녀",
    subtitle: "감성과 자유로움이 조화로운 당신",
    icon: "🌸",
    description: "당신은 감성적이면서도 자유로운 성격을 가진 균형잡힌 테겐녀입니다! 감정 표현도 잘하고 사교적이기도 하여 다양한 사람들과 잘 어울려요. 상황에 따라 따뜻함과 시원함을 적절히 보여줄 수 있는 매력적인 사람이에요!",
    stats: { emotion: 70, social: 70 },
    compatibleTypes: ["테겐남", "에토남", "테토남"]
  },
  tegen_boy: {
    type: "tegen_boy",
    title: "테겐남",
    subtitle: "감성과 자유로움을 겸비한 당신",
    icon: "🎭",
    description: "당신은 감성적인 면과 자유로운 면이 조화롭게 어우러진 매력적인 테겐남입니다! 상황에 따라 따뜻함과 시원함을 적절히 보여줄 수 있어요. 균형잡힌 성격으로 많은 사람들에게 사랑받는 사람이에요!",
    stats: { emotion: 75, social: 75 },
    compatibleTypes: ["테겐녀", "에토녀", "테토녀"]
  },
  eto_girl: {
    type: "eto_girl",
    title: "에토녀",
    subtitle: "자유로움과 감성이 만난 당신",
    icon: "🦋",
    description: "당신은 자유롭고 개방적이면서도 따뜻한 감성을 가진 에토녀입니다! 자연스러운 매력과 동시에 깊은 감정을 표현할 줄 아는 균형잡힌 성격이에요. 진솔함과 따뜻함을 동시에 가진 매력적인 사람이에요!",
    stats: { emotion: 65, social: 75 },
    compatibleTypes: ["에토남", "테겐남", "에겐남"]
  },
  eto_boy: {
    type: "eto_boy",
    title: "에토남",
    subtitle: "자연스러운 감성을 가진 당신",
    icon: "🌊",
    description: "당신은 자연스럽고 편안한 성격에 감성적인 면이 더해진 매력적인 에토남입니다! 진솔함과 따뜻함을 동시에 가지고 있어 많은 사람들에게 사랑받아요. 균형잡힌 매력으로 누구와도 잘 어울리는 사람이에요!",
    stats: { emotion: 60, social: 80 },
    compatibleTypes: ["에토녀", "테겐녀", "에겐녀"]
  }
};

export function calculateResult(answers: string[]): PersonalityResult {
  const counts = { teto: 0, egen: 0, neutral: 0 };
  
  answers.forEach(answer => {
    counts[answer as keyof typeof counts]++;
  });
  
  // Get selected gender
  const selectedGender = sessionStorage.getItem("selectedGender") || "female";
  
  // Calculate more distinct emotion and social scores
  const totalAnswers = answers.length;
  
  // Amplify the differences for clearer personality distinction
  const tetoRatio = counts.teto / totalAnswers;
  const egenRatio = counts.egen / totalAnswers;
  const neutralRatio = counts.neutral / totalAnswers;
  
  // Emotion score: heavily influenced by teto answers, reduced by egen answers
  const emotionScore = Math.round(
    Math.max(20, Math.min(95, 
      30 + (tetoRatio * 65) - (egenRatio * 15) + (neutralRatio * 10)
    ))
  );
  
  // Social score: heavily influenced by egen answers, reduced by teto answers
  const socialScore = Math.round(
    Math.max(20, Math.min(95, 
      30 + (egenRatio * 65) - (tetoRatio * 15) + (neutralRatio * 20)
    ))
  );
  
  // Determine personality type with clearer thresholds
  let resultType: keyof typeof personalityResults;
  
  // High emotion threshold (70+) and high social threshold (70+) for balanced types
  const isHighEmotion = emotionScore >= 70;
  const isHighSocial = socialScore >= 70;
  const isLowEmotion = emotionScore <= 50;
  const isLowSocial = socialScore <= 50;
  
  if (isHighEmotion && isHighSocial) {
    // Both high: 테겐 type (emotion-social balance)
    resultType = selectedGender === "female" ? "tegen_girl" : "tegen_boy";
  } else if ((emotionScore >= 60 && emotionScore <= 80) && (socialScore >= 60 && socialScore <= 80)) {
    // Moderate range: 에토 type (balanced but leaning towards social)
    resultType = selectedGender === "female" ? "eto_girl" : "eto_boy";
  } else if (isHighEmotion || (!isLowEmotion && counts.teto > counts.egen)) {
    // High emotion or teto-dominant: 테토 type
    resultType = selectedGender === "female" ? "teto_girl" : "teto_boy";
  } else {
    // High social or egen-dominant: 에겐 type
    resultType = selectedGender === "female" ? "egen_girl" : "egen_boy";
  }
  
  const baseResult = personalityResults[resultType];
  
  // Generate specific partner recommendation based on personality type
  const recommendation = generatePartnerRecommendation(resultType, emotionScore, socialScore);
  
  return {
    ...baseResult,
    stats: {
      emotion: emotionScore,
      social: socialScore
    },
    recommendation
  };
}

function generatePartnerRecommendation(resultType: keyof typeof personalityResults, emotionScore: number, socialScore: number): string {
  // 각 유형별 맞춤 파트너 추천
  switch (resultType) {
    case "teto_girl":
    case "teto_boy":
      // 테토형: 감성이 높으므로 균형을 맞춰줄 에겐형이나 균형형 추천
      if (socialScore < 40) return "에겐";
      return socialScore > 60 ? "테겐" : "에토";
      
    case "egen_girl":
    case "egen_boy":
      // 에겐형: 사교성이 높으므로 감성적인 테토형이나 균형형 추천
      if (emotionScore < 40) return "테토";
      return emotionScore > 60 ? "테겐" : "에토";
      
    case "tegen_girl":
    case "tegen_boy":
      // 테겐형: 균형잡힌 타입이므로 다양한 유형과 잘 맞음
      return emotionScore > socialScore ? "에토" : "테토";
      
    case "eto_girl":
    case "eto_boy":
      // 에토형: 균형잡힌 타입이므로 다양한 유형과 잘 맞음  
      return socialScore > emotionScore ? "테겐" : "에겐";
      
    default:
      return "테토";
  }
} 