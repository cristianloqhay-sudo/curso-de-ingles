import React, { useState } from 'react';
import { VocabItem } from '../types';

interface FlashCardProps {
  item: VocabItem;
}

export const FlashCard: React.FC<FlashCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle = item.color ? { backgroundColor: item.color } : {};
  const textColorClass = item.text === 'white' ? 'text-white' : 'text-gray-900';
  const subTextColorClass = item.color && item.text === 'white' ? 'text-white/80' : 'text-gray-600';
  const borderColorClass = item.border ? 'border-gray-300' : 'border-gray-200';

  return (
    <div 
      className="group h-48 w-full cursor-pointer perspective-1000"
      onClick={handleClick}
    >
      <div className={`relative h-full w-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-xl border ${borderColorClass} ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-xl ${!item.color ? 'bg-white' : ''}`} 
          style={cardStyle}
        >
          {item.icon && <div className="text-4xl mb-2">{item.icon}</div>}
          <h3 className={`text-2xl font-bold ${item.color ? textColorClass : 'text-royal'}`}>{item.en}</h3>
          <p className={`text-sm font-semibold mt-1 ${subTextColorClass}`}>{item.es}</p>
          <p className="font-mono text-xs mt-1 text-accent uppercase">[ {item.pron} ]</p>
          
          <div className="absolute bottom-2">
            <span className="bg-royal text-white text-xs px-3 py-1 rounded-full shadow-md">
              Ver Frase
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180 bg-royal text-white rounded-xl p-4">
          <p className="text-xs uppercase tracking-widest text-blue-100 mb-1">Frase de Ejemplo</p>
          <p className="text-base italic mb-2 font-light text-center">"{item.fraseEn || item.context}"</p>
          
          <p className="font-mono text-xs mt-1 text-accent bg-white px-2 py-0.5 rounded uppercase font-bold">[ {item.frasePron || '...'} ]</p>
          
          <p className="text-xs uppercase tracking-widest text-blue-100 mt-2 mb-1">(Español)</p>
          <p className="text-sm font-semibold text-white text-center">"{item.fraseEs || item.context}"</p>
        </div>
      </div>
    </div>
  );
};