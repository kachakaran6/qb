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
    <div className="bg-white rounded-xl shadow-md border border-slate-200 h-full overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-6 py-4">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <HelpCircle className="mr-2 h-5 w-5" />
          {subjectName} Questions
        </h2>
      </div>

      {/* Selection Area */}
      <div className="p-6 space-y-6">
        {/* Unit Selector */}
        <div>
          <label className="block text-lg font-semibold text-slate-900 mb-2">
            Select Unit:
          </label>
          <select
            value={selectedUnit || ""}
            onChange={(e) => handleUnitSelect(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-indigo-600 bg-white text-slate-800 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Unit</option>
            <option value="1">Unit 1</option>
            <option value="2">Unit 2</option>
            <option value="3">Unit 3</option>
            <option value="4">Unit 4</option>
            <option value="5">Unit 5</option>
            {/* Add more units */}
          </select>
        </div>

        {/* Level Selector or Reset Link */}
        {selectedLevel === null ? (
          <div>
            <label className="block text-lg font-semibold text-slate-900 mb-4">
              Select Question Level:
            </label>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleLevelSelect("1 Marks")}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
              >
                1 Marks Questions
              </button>
              <button
                onClick={() => handleLevelSelect("3 Marks")}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
              >
                3 Marks Questions
              </button>
              <button
                onClick={() => handleLevelSelect("5 Marks")}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
              >
                5 Marks Questions
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <span className="text-slate-800 font-medium">
              Questions for Unit {selectedUnit} <br />
              {selectedLevel}
            </span>
            <button
              onClick={() => {
                setSelectedLevel(null);
                setSelectedUnit(null);
              }}
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Reset Level and Unit
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      {selectedLevel !== null && (
        <div className="divide-y divide-slate-100 overflow-y-auto max-h-[calc(100vh-280px)] sm:max-h-[600px]">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <button
                key={question.id}
                className={`w-full text-left p-4 transition-colors hover:bg-slate-50 ${
                  activeQuestion === question.id
                    ? "bg-blue-50 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => onSelectQuestion(question.id)}
              >
                <p
                  className={`${
                    activeQuestion === question.id
                      ? "text-blue-700 font-semibold"
                      : "text-slate-900"
                  }`}
                >
                  {question.text}
                </p>
              </button>
            ))
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
