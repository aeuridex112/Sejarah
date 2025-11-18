
import React, { forwardRef } from 'react';
import { TimelinePeriod } from '../types';
import { ContentCard } from './ContentCard';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface TimelineSectionProps {
  period: TimelinePeriod;
  isOpen: boolean;
  onToggle: () => void;
}

export const TimelineSection = forwardRef<HTMLDivElement, TimelineSectionProps>(
  ({ period, isOpen, onToggle }, ref) => {
    return (
      <div ref={ref} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 scroll-mt-20">
        <button
          onClick={onToggle}
          className="w-full text-left p-4 md:p-6 flex justify-between items-center bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-expanded={isOpen}
          aria-controls={`section-content-${period.id}`}
        >
          <div className="flex items-center">
            <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${period.badgeColor}`}>
              {period.date}
            </span>
            <h2 className="text-xl md:text-2xl font-bold ml-4 text-slate-900">{period.title}</h2>
          </div>
          <ChevronDownIcon
            className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          id={`section-content-${period.id}`}
          className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="px-4 md:px-6 pb-6 pt-2">
              <div className="space-y-4">
              {period.subTopics.map((topic) => (
                  <ContentCard key={topic.title} subTopic={topic} />
              ))}
              </div>
          </div>
        </div>
      </div>
    );
  }
);
