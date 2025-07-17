// 이 프로젝트는 현재 정적 데이터를 사용합니다.
// PersonalityResult 등 타입만 남기고 DB 관련 코드는 삭제합니다.

// Quiz data types
export interface QuizQuestion {
  id: number;
  question: string;
  choices: QuizChoice[];
}

export interface QuizChoice {
  text: string;
  type: "teto" | "egen" | "neutral";
}

export interface PersonalityResult {
  type: "teto_girl" | "teto_boy" | "egen_girl" | "egen_boy" | "tegen_girl" | "tegen_boy" | "eto_girl" | "eto_boy";
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  stats: {
    emotion: number;
    social: number;
  };
  compatibleTypes: string[];
  recommendation?: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  category: string;
  views: string;
  comments: string;
  shares: string;
  gradientClass: string;
  icon: string;
  isHot?: boolean;
}
