import React, { useState } from "react";
import { Question } from "../data/questions";
import { HelpCircle } from "lucide-react";

interface QuestionListProps {
  questions: Question[];
  activeQuestion: string | null;
  onSelectQuestion: (questionId: string) => void;
  subjectName: string;
}

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  activeQuestion,
  onSelectQuestion,
  subjectName,
}) => {
  // State for selected difficulty level
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Handle level selection or reset
  const handleLevelSelect = (level: string) => {
    if (selectedLevel === level) {
      setSelectedLevel(null); // If the same level is selected, reset the filter
    } else {
      setSelectedLevel(level); // Otherwise, select the new level
    }
  };

  // Filter questions based on selected level
  const filteredQuestions = selectedLevel
    ? questions.filter((question) => question.level === selectedLevel)
    : questions; // If no level is selected, show all questions

  return (
    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-4 py-3">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <HelpCircle className="mr-2 h-5 w-5" />
          {subjectName} Questions
        </h2>
      </div>

      {/* If no level is selected, show level selection options */}
      {selectedLevel === null ? (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Select Question Level:</h3>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleLevelSelect("one liner")}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === "one liner"
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-600 text-white"
              } hover:bg-indigo-700`}
            >
              1-2 Marks Questions
            </button>{" "}
            <button
              onClick={() => handleLevelSelect("two liner")}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === "two liner"
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-600 text-white"
              } hover:bg-indigo-700`}
            >
              2-3 Marks Questions
            </button>
            <button
              onClick={() => handleLevelSelect("big answer")}
              className={`px-4 py-2 rounded-md ${
                selectedLevel === "big answer"
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-600 text-white"
              } hover:bg-indigo-700`}
            >
              5 Marks Questions
            </button>
          </div>
        </div>
      ) : (
        // Display questions based on selected level
        <div>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSelectedLevel(null)} // Button to reset level selection
              className="text-indigo-600 hover:text-indigo-800"
            >
              Reset Level Selection
            </button>
          </div>

          {filteredQuestions.length > 0 ? (
            <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
              {filteredQuestions.map((question) => (
                <button
                  key={question.id}
                  className={`w-full text-left transition-colors p-4 hover:bg-slate-50 ${
                    activeQuestion === question.id
                      ? "bg-blue-50 border-l-4 border-blue-600"
                      : ""
                  }`}
                  onClick={() => onSelectQuestion(question.id)}
                >
                  <p
                    className={`${
                      activeQuestion === question.id
                        ? "text-blue-700"
                        : "text-slate-900"
                    }`}
                  >
                    {question.text}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-8 text-slate-500">
              No questions available for this level.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionList;
