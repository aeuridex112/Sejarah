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
    
    // Menentukan warna gradasi tombol tahun
    const getGradient = (colorClass: string) => {
       if (colorClass.includes('red')) return 'from-red-700 to-red-900';
       if (colorClass.includes('blue')) return 'from-blue-700 to-blue-900';
       if (colorClass.includes('green')) return 'from-emerald-700 to-emerald-900';
       if (colorClass.includes('orange')) return 'from-amber-600 to-amber-800';
       return 'from-stone-600 to-stone-800';
    };

    const gradientClass = getGradient(period.badgeColor);

    return (
      <div ref={ref} className="relative mb-10 scroll-mt-24">
        
        {/* Tombol Judul Besar (Accordion) */}
        <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 border border-stone-200 ${isOpen ? 'ring-1 ring-stone-300' : 'hover:shadow-xl'}`}>
            
            {/* Garis atas berwarna */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradientClass}`}></div>

            <button
              onClick={onToggle}
              className="w-full text-left p-5 md:p-7 flex flex-col md:flex-row md:items-center justify-between focus:outline-none group"
            >
              <div className="flex items-start md:items-center gap-5">
                
                {/* Kotak Tahun */}
                <div className={`shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <span className="font-bold text-sm text-center leading-tight px-1 font-serif">
                        {period.date}
                    </span>
                </div>

                {/* Judul & Subjudul */}
                <div>
                   <h2 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif mb-1 group-hover:text-amber-700 transition-colors">
                    {period.title}
                   </h2>
                   <p className="text-stone-500 text-xs uppercase tracking-widest font-sans">
                      Klik untuk melihat detail materi
                   </p>
                </div>
              </div>

              {/* Panah Putar */}
              <div className={`mt-4 md:mt-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : 'text-stone-400'}`}>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </button>

            {/* AREA ISI MATERI (YANG KITA PERBAIKI) */}
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {/* Background abu-abu lembut di balik kartu */}
              <div className="p-4 md:p-8 bg-stone-100 border-t border-stone-200">
                  
                  {isOpen && (
                    <div className="md:pl-4">
                        {period.subTopics.map((topic, idx) => (
                            // Di sini kita kirim 'index={idx}' agar nomor urut muncul
                            <ContentCard key={topic.title} subTopic={topic} index={idx} />
                        ))}
                    </div>
                  )}
                  
              </div>
            </div>
        </div>
      </div>
    );
  }
);