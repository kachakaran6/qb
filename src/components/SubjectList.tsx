import React from "react";
import { Subject } from "../data/questions";
import { BookOpen } from "lucide-react";

interface SubjectListProps {
  subjects: Subject[];
  activeSubject: string | null;
  onSelectSubject: (subjectId: string) => void;
}

const SubjectList: React.FC<SubjectListProps> = ({
  subjects,
  activeSubject,
  onSelectSubject,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-black via-purple-800 to-indigo-900 px-4 py-3">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Subjects
        </h2>
      </div>
      <div className="divide-y divide-slate-100">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={`w-full text-left transition-colors p-4 hover:bg-slate-50 ${
              activeSubject === subject.id
                ? "bg-blue-50 border-l-4 border-blue-600"
                : ""
            }`}
            onClick={() => onSelectSubject(subject.id)}
          >
            <h3
              className={`font-medium ${
                activeSubject === subject.id
                  ? "text-blue-700"
                  : "text-slate-900"
              }`}
            >
              {subject.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 line-clamp-2">
              {subject.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
