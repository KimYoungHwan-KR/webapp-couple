import { motion } from "framer-motion";

interface QuestionCardProps {
  question: {
    question: string;
    choices: string[];
  };
  currentQuestion: number;
  onAnswer: (choiceIndex: number) => void;
}

const choiceColors = [
  "from-pink-200 to-orange-100",
  "from-blue-200 to-green-200",
  "from-yellow-100 to-yellow-200"
];

const letterColors = [
  "text-pink-500",
  "text-teal-500",
  "text-orange-500"
];

export function QuestionCard({ question, currentQuestion, onAnswer }: QuestionCardProps) {
  return (
    <div className="max-w-md mx-auto p-4 mt-8">
      <motion.div
        className="story-card rounded-3xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={currentQuestion}
      >
        {/* Question Number Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-teal-400 rounded-full text-white font-bold text-lg mb-6">
          <span>{currentQuestion}</span>
        </div>

        {/* Question Text */}
        <h2 className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">
          {question.question}
        </h2>

        {/* Answer Choices */}
        <div className="space-y-4">
          {question.choices.map((choice, index) => (
            <motion.button
              key={index}
              onClick={() => onAnswer(index)}
              className={`w-full bg-gradient-to-r ${choiceColors[index]} text-gray-800 font-medium py-4 px-6 rounded-2xl shadow-lg choice-btn text-left`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <span className={`w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 ${letterColors[index]} font-bold`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {choice}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
