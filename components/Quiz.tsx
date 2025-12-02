import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { VocabItem, QuizQuestion } from '../types';

function shuffle<T>(array: T[]): T[] {
  const newArr = [...array];
  let currentIndex = newArr.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
  }
  return newArr;
}

function generateQuizData(): QuizQuestion[] {
  const allVocab: VocabItem[] = [];
  Object.values(DATA).forEach(cat => allVocab.push(...cat.items));

  const shuffledVocab = shuffle(allVocab);
  const quizItems = shuffledVocab.slice(0, 10); 

  return quizItems.map(item => {
    let questionText = `Traduce al español: "${item.en}"`;
    let correctAnswer = item.es;
    let options: string[] = [];

    // 50% chance to be a phrase context question if available
    if (Math.random() < 0.5 && item.fraseEn && item.fraseEs) {
      questionText = `Si alguien dice: "${item.fraseEn}", ¿qué significa?`;
      correctAnswer = item.fraseEs;
      
      // Generate distractors
      const pool = allVocab.filter(v => v.fraseEs !== correctAnswer);
      const randomDistractors = shuffle(pool).slice(0, 2).map(v => v.fraseEs || v.es);
      options = shuffle([correctAnswer, item.es, ...randomDistractors]).slice(0, 4);
      // Ensure we have at least 3 options including correct one
      const uniqueOptions = new Set([correctAnswer, ...randomDistractors]);
      if (uniqueOptions.has(item.es)) uniqueOptions.add(item.es); // Add literal translation as distractor
      
      // Fallback filler
      while (uniqueOptions.size < 3) {
         const filler = shuffle(allVocab)[0].fraseEs || shuffle(allVocab)[0].es;
         if (filler !== correctAnswer) uniqueOptions.add(filler);
      }
      options = shuffle(Array.from(uniqueOptions)).slice(0, 3);

    } else {
      // Standard translation question
      const pool = allVocab.filter(v => v.es !== correctAnswer);
      const incorrectOptions = shuffle(pool).slice(0, 2).map(v => v.es);
      options = shuffle([...incorrectOptions, correctAnswer]);
    }

    return {
      question: questionText,
      correctAnswer: correctAnswer,
      options: options
    };
  });
}

export const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    setQuestions(generateQuizData());
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Auto advance
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        resetQuestionState();
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return <div className="p-8 text-center">Cargando test...</div>;

  if (isFinished) {
    const percentage = (score / questions.length) * 100;
    let feedback = '';
    if (percentage >= 80) feedback = '¡Excelente! ¡Ya dominas lo básico!';
    else if (percentage >= 50) feedback = '¡Buen trabajo! Sigue practicando.';
    else feedback = '¡No te rindas! La práctica hace al maestro.';

    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-t-4 border-royal text-center">
        <h3 className="text-3xl font-bold text-royal mb-4">Test Completado</h3>
        <p className="text-2xl mb-4 text-gray-700">Tu puntuación:</p>
        <p className="text-6xl font-extrabold text-accent">{score}/{questions.length}</p>
        <p className="text-lg text-gray-500 mt-2">({percentage.toFixed(0)}%)</p>
        <p className="mt-6 text-xl text-gray-800 font-medium">{feedback}</p>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-royal mb-4">¿Quieres hablar inglés con fluidez?</h4>
            <a href="https://go.hotmart.com/C103156556U" target="_blank" rel="noreferrer" className="block w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:bg-accent-hover transition-colors text-xl border border-red-800">
                📚 Iniciar Curso Digital
            </a>
        </div>
        
        <button 
          onClick={startNewQuiz}
          className="mt-6 bg-gray-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 transition-colors"
        >
          Reiniciar Test
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-lg border-t-4 border-royal">
      <h2 className="text-3xl font-bold text-royal mb-4 text-center">🧠 Test de Vocabulario</h2>
      
      <div className="mb-4">
        <p className="text-lg font-bold text-gray-500 mb-2">Pregunta {currentIndex + 1} de {questions.length}</p>
        <p className="text-xl font-semibold text-royal min-h-[3.5rem] flex items-center">{currentQ.question}</p>
      </div>

      <div className="flex flex-col space-y-3">
        {currentQ.options.map((option, idx) => {
          let btnClass = "w-full text-left p-4 mb-2 bg-white rounded-lg border-2 transition-all duration-200 shadow-sm ";
          
          if (isAnswered) {
             if (option === currentQ.correctAnswer) {
               btnClass += "bg-blue-100 border-royal ring-2 ring-blue-200";
             } else if (option === selectedOption) {
               btnClass += "bg-red-100 border-accent ring-2 ring-red-200";
             } else {
               btnClass += "bg-gray-50 border-gray-100 opacity-50";
             }
          } else {
             btnClass += "border-gray-100 hover:bg-gray-50 hover:border-gray-300 cursor-pointer";
          }

          return (
            <button 
              key={idx}
              className={btnClass}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
      
      <div className="mt-6 flex justify-between items-center h-6">
        <p className="text-sm font-semibold text-gray-600">
          Puntuación actual: {score}
        </p>
        {isAnswered && (
          <span className={`text-sm font-bold ${selectedOption === currentQ.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
            {selectedOption === currentQ.correctAnswer ? '¡Correcto!' : 'Incorrecto'}
          </span>
        )}
      </div>
    </div>
  );
};