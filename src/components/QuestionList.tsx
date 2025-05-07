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
  // State for selected difficulty level and unit
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  // Handle level selection or reset
  const handleLevelSelect = (level: string) => {
    if (selectedLevel === level) {
      setSelectedLevel(null); // If the same level is selected, reset the filter
    } else {
      setSelectedLevel(level); // Otherwise, select the new level
    }
  };

  // Handle unit selection or reset
  const handleUnitSelect = (unit: string) => {
    if (selectedUnit === unit) {
      setSelectedUnit(null); // If the same unit is selected, reset the filter
    } else {
      setSelectedUnit(unit); // Otherwise, select the new unit
    }
  };

  // Filter questions based on selected level and unit
  const filteredQuestions = questions.filter((question) => {
    const matchesLevel = selectedLevel
      ? question.level === selectedLevel
      : true;
    const matchesUnit = selectedUnit ? question.unit === selectedUnit : true;
    return matchesLevel && matchesUnit;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-4 py-3">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <HelpCircle className="mr-2 h-5 w-5" />
          {subjectName} Questions
        </h2>
      </div>

      {/* Unit selection dropdown */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Select Unit:</h3>
        <select
          value={selectedUnit || "1"}
          onChange={(e) => handleUnitSelect(e.target.value)}
          className="px-4 py-2 mt-2 rounded-md border border-indigo-600"
        >
          <option value="">Select Unit </option>
          <option value="1">Unit 1</option>
          <option value="2">Unit 2</option>
          {/* Add more units as needed */}
        </select>
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
        // Display questions based on selected level and unit
        <div>
          <div className="flex justify-end p-4">
            <button
              onClick={() => {
                setSelectedLevel(null);
                setSelectedUnit(null); // Reset both level and unit selections
              }}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Reset Level and Unit Selection
            </button>
          </div>

          {filteredQuestions.length > 0 ? (
            <div className="divide-y divide-slate-100 overflow-y-auto max-h-[calc(100vh-280px)] sm:max-h-[600px]">
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
              No questions available for this unit and level.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionList;
