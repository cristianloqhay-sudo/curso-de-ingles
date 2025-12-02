import React from 'react';
import { Category } from '../types';
import { FlashCard } from './FlashCard';

interface CardGridProps {
  categoryKey: string;
  data: Category;
}

export const CardGrid: React.FC<CardGridProps> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-3xl font-bold text-royal">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.desc}</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <FlashCard key={`${item.en}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};