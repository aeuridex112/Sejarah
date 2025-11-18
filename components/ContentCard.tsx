
import React from 'react';
import { SubTopic } from '../types';

interface ContentCardProps {
  subTopic: SubTopic;
}

export const ContentCard: React.FC<ContentCardProps> = ({ subTopic }) => {
  return (
    <div className="bg-slate-50 border-l-4 border-red-500 p-4 rounded-r-lg">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{subTopic.title}</h3>
      <div className="space-y-3 text-slate-700 leading-relaxed">
        {subTopic.content.map((item, index) => {
          if (typeof item === 'string') {
            return <p key={index}>{item}</p>;
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="list-disc list-inside space-y-1 pl-2">
                {item.items.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
