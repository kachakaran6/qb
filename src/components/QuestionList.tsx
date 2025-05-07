import React from "react";
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
  return (
    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-4 py-3">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <HelpCircle className="mr-2 h-5 w-5" />
          {subjectName} Questions
        </h2>
      </div>
      {questions.length > 0 ? (
        <div className="divide-y divide-slate-100">
          {questions.map((question) => (
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
          Select a subject to view questions
        </div>
      )}
    </div>
  );
};

export default QuestionList;
