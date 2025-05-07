import React, { useState, useEffect } from 'react';
import { subjects } from './data/questions';
import SubjectList from './components/SubjectList';
import QuestionList from './components/QuestionList';
import AnswerDisplay from './components/AnswerDisplay';
import Header from './components/Header';
import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [view, setView] = useState<'subjects' | 'questions' | 'answer'>('subjects');
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const activeSubjectData = activeSubject 
    ? subjects.find(subject => subject.id === activeSubject) 
    : null;
    
  const activeQuestionData = activeSubjectData && activeQuestion
    ? activeSubjectData.questions.find(question => question.id === activeQuestion)
    : null;

  const activeQuestionIndex = activeSubjectData?.questions.findIndex(q => q.id === activeQuestion) ?? -1;
  const hasNextQuestion = activeSubjectData && activeQuestionIndex < activeSubjectData.questions.length - 1;
  const hasPreviousQuestion = activeQuestionIndex > 0;

  const handleSelectSubject = (subjectId: string) => {
    setActiveSubject(subjectId);
    setActiveQuestion(null);
    if (isMobile) {
      setView('questions');
    }
  };

  const handleSelectQuestion = (questionId: string) => {
    setActiveQuestion(questionId);
    if (isMobile) {
      setView('answer');
    }
  };

  const handleBack = () => {
    if (view === 'answer') {
      setView('questions');
    } else if (view === 'questions') {
      setView('subjects');
    }
  };

  const handleNextQuestion = () => {
    if (activeSubjectData && activeQuestionIndex < activeSubjectData.questions.length - 1) {
      setActiveQuestion(activeSubjectData.questions[activeQuestionIndex + 1].id);
    }
  };

  const handlePreviousQuestion = () => {
    if (activeSubjectData && activeQuestionIndex > 0) {
      setActiveQuestion(activeSubjectData.questions[activeQuestionIndex - 1].id);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setView('subjects');
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        subjects={subjects}
        activeSubject={activeSubject}
        onSelectSubject={handleSelectSubject}
        isMobile={isMobile}
      />
      
      <main className="container mx-auto px-4 py-6">
        {isMobile ? (
          <div className="h-[calc(100vh-5rem)]">
            {view === 'subjects' && (
              <SubjectList 
                subjects={subjects} 
                activeSubject={activeSubject} 
                onSelectSubject={handleSelectSubject} 
              />
            )}
            
            {view === 'questions' && activeSubjectData && (
              <QuestionList 
                questions={activeSubjectData.questions} 
                activeQuestion={activeQuestion} 
                onSelectQuestion={handleSelectQuestion}
                subjectName={activeSubjectData.name}
              />
            )}
            
            {view === 'answer' && (
              <AnswerDisplay 
                question={activeQuestionData}
                onBack={handleBack}
                onNext={handleNextQuestion}
                onPrevious={handlePreviousQuestion}
                hasNext={hasNextQuestion}
                hasPrevious={hasPreviousQuestion}
                isMobile={isMobile}
              />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-6 h-[calc(100vh-5rem)]">
            <div className="col-span-3">
              <SubjectList 
                subjects={subjects} 
                activeSubject={activeSubject} 
                onSelectSubject={handleSelectSubject} 
              />
            </div>
            
            <div className="col-span-4">
              <QuestionList 
                questions={activeSubjectData?.questions || []} 
                activeQuestion={activeQuestion} 
                onSelectQuestion={handleSelectQuestion}
                subjectName={activeSubjectData?.name || 'Select a Subject'}
              />
            </div>
            
            <div className="col-span-5">
              <AnswerDisplay 
                question={activeQuestionData}
                onBack={handleBack}
                onNext={handleNextQuestion}
                onPrevious={handlePreviousQuestion}
                hasNext={hasNextQuestion}
                hasPrevious={hasPreviousQuestion}
                isMobile={isMobile}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;