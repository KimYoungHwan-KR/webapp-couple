import { motion } from "framer-motion";
import { PersonalityResult } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Share, RotateCcw, Heart } from "lucide-react";

interface ResultCardProps {
  result: PersonalityResult;
  onShare: () => void;
  onRestart: () => void;
}

export function ResultCard({ result, onShare, onRestart }: ResultCardProps) {
  const compatibleIcons = {
    "테토녀": "💖",
    "테토남": "🌟", 
    "에겐녀": "✨",
    "에겐남": "🔥",
    "테겐녀": "🌸",
    "테겐남": "🎭",
    "에토녀": "🦋",
    "에토남": "🌊"
  };

  const getRecommendationTitle = (recommendation?: string) => {
    if (!recommendation) return "";
    switch (recommendation) {
      case "테토": return "테토형";
      case "에겐": return "에겐형";
      case "테겐": return "테겐형";
      case "에토": return "에토형";
      default: return recommendation;
    }
  };

  const getRecommendationDescription = (recommendation?: string) => {
    if (!recommendation) return "";
    switch (recommendation) {
      case "테토": return "감성적이고 따뜻한 사람";
      case "에겐": return "자유롭고 솔직한 사람";
      case "테겐": return "감성과 자유로움이 조화로운 사람";
      case "에토": return "자연스러운 감성을 가진 사람";
      default: return recommendation;
    }
  };

  const getRecommendationIcon = (recommendation?: string) => {
    if (!recommendation) return "💖";
    switch (recommendation) {
      case "테토": return "💖";
      case "에겐": return "✨";
      case "테겐": return "🌸";
      case "에토": return "🦋";
      default: return "💖";
    }
  };

  // ... existing code ...
  // 영어 타입을 한글로 매핑하는 함수 추가
  const typeToKorean = (type: string) => {
    switch (type) {
      case "teto_girl": return "테토녀";
      case "teto_boy": return "테토남";
      case "egen_girl": return "에겐녀";
      case "egen_boy": return "에겐남";
      case "tegen_girl": return "테겐녀";
      case "tegen_boy": return "테겐남";
      case "eto_girl": return "에토녀";
      case "eto_boy": return "에토남";
      default: return type;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-8">
      <motion.div
        className="story-card rounded-3xl p-8 text-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Celebration Header */}
        <div className="mb-6">
          <motion.div
            className="text-6xl mb-4"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            🎉
          </motion.div>
          <h2 className="text-lg font-medium text-gray-600 mb-2">나의 유형</h2>
        </div>

        {/* Result Badge */}
        <div className="mb-8">
          <motion.div
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full mb-4 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-5xl">{result.icon}</span>
          </motion.div>
          <h1 className="text-3xl font-black result-badge mb-2">{typeToKorean(result.type)}</h1>
        </div>

        {/* Result Description */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-left">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <span className="text-pink-500 mr-2">✨</span>
            분석
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            {result.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-br from-pink-200 to-white rounded-xl p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-2xl font-bold text-pink-500">{result.stats.emotion}%</div>
            <div className="text-xs text-gray-600">감성 지수</div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-blue-200 to-white rounded-xl p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-2xl font-bold text-teal-500">{result.stats.social}%</div>
            <div className="text-xs text-gray-600">사회성 지수</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={onShare}
          className="w-full bg-gradient-to-r from-pink-400 to-teal-400 text-white font-bold py-4 rounded-2xl shadow-lg choice-btn h-auto"
        >
          <Share className="mr-2 h-5 w-5" />
          공유하기
        </Button>

        <Button
          onClick={onRestart}
          variant="outline"
          className="w-full bg-white text-gray-700 font-medium py-4 rounded-2xl shadow-lg choice-btn border border-gray-200 h-auto"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          다시 테스트하기
        </Button>

        {/* Recommendation */}
        {result.recommendation && (
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-6 mt-6 border border-pink-200">
            <h3 className="font-bold text-gray-800 mb-3 text-center">
              <Heart className="inline mr-2 h-5 w-5 text-pink-500" />
              추천 파트너(지수 기반)
            </h3>
            <div className="text-center">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-3xl mr-3">
                  {getRecommendationIcon(result.recommendation)}
                </span>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    {getRecommendationTitle(result.recommendation)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {getRecommendationDescription(result.recommendation)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
