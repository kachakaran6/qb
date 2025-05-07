import React from "react";
import { Question } from "../data/questions";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";

interface AnswerDisplayProps {
  question: Question | null;
  onBack: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  isMobile: boolean;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({
  question,
  onBack,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  isMobile,
}) => {
  if (!question) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full border border-slate-200 flex items-center justify-center">
        <div className="text-center p-8">
          <BookOpen className="mx-auto h-12 w-12 text-blue-400" />
          <h3 className="mt-2 text-lg font-medium text-slate-900">
            No question selected
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Select a question to view its answer
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 flex flex-col max-h-screen sm:max-h-[600px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-4 py-3 flex items-center">
        {isMobile && (
          <button
            onClick={onBack}
            className="mr-2 text-white hover:text-blue-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <h2 className="text-lg font-semibold text-white flex-1">Answer</h2>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 overflow-auto max-h-[calc(100vh-200px)] sm:max-h-[calc(600px-100px)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-slate-900">
            Q. {question.text}
          </h3>
        </div>
        <div className="prose prose-slate max-w-none">
          <p>{question.answer}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="border-t border-slate-200 px-4 py-3 bg-slate-50 flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            hasPrevious
              ? "text-white bg-blue-600 hover:bg-blue-700"
              : "text-slate-400 bg-slate-100 cursor-not-allowed"
          }`}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            hasNext
              ? "text-white bg-blue-600 hover:bg-blue-700"
              : "text-slate-400 bg-slate-100 cursor-not-allowed"
          }`}
        >
          Next
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AnswerDisplay;
