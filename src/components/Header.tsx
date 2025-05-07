import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Subject } from "../data/questions";

interface HeaderProps {
  subjects: Subject[];
  activeSubject: string | null;
  onSelectSubject: (subjectId: string) => void;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({
  subjects,
  activeSubject,
  onSelectSubject,
  isMobile,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSubjectName =
    subjects.find((s) => s.id === activeSubject)?.name || "Select Subject";

  return (
    <header className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-white" />
            <h1 className="ml-3 text-2xl font-bold text-white">
              Qu<span className="text-blue-200">rius</span>
            </h1>
          </div>

          {isMobile ? (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-white/10 text-sm font-medium text-white hover:bg-white/20 focus:outline-none transition-colors"
              >
                {activeSubjectName}
                <Menu className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`
            ${
              isMobile
                ? "absolute inset-x-0 top-16"
                : "absolute right-4 mt-2 w-56 rounded-xl shadow-lg"
            }
            bg-white ring-1 ring-black ring-opacity-5 z-50
          `}
        >
          <div className="py-1 rounded-xl overflow-hidden" role="menu">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                className={`
                  ${
                    activeSubject === subject.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700"
                  }
                  block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors
                `}
                onClick={() => {
                  onSelectSubject(subject.id);
                  setIsMenuOpen(false);
                }}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
