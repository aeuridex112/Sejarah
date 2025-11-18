import React from 'react';
import { SubTopic } from '../types';

interface ContentCardProps {
  subTopic: SubTopic;
  index?: number; 
}

export const ContentCard: React.FC<ContentCardProps> = ({ subTopic, index = 0 }) => {
  // Membuat angka urut 01, 02, dst.
  const numberString = (index + 1).toString().padStart(2, '0');

  return (
    <div className="group relative overflow-hidden rounded-xl border border-stone-300 bg-[#fffaf0] mb-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      
      {/* --- HIASAN LATAR BELAKANG --- */}
      
      {/* 1. Warna Kertas Tua (Cream) */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-[#fffaf0] to-stone-100/50"></div>
      
      {/* 2. Tekstur Titik-titik Halus */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#78350f 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
      </div>

      {/* 3. WATERMARK ANGKA RAKSASA (Pudar di pojok kanan bawah) */}
      <div className="absolute -right-4 -bottom-10 font-serif text-[9rem] leading-none text-stone-900 opacity-[0.05] select-none pointer-events-none font-bold z-0 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.08]">
        {numberString}
      </div>

      {/* 4. Garis Emas Mewah di Kiri */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-600 via-yellow-500 to-amber-700 shadow-sm"></div>

      {/* --- ISI KONTEN --- */}
      <div className="relative z-10 p-6 md:p-8">
        
        {/* Judul Sub-Bab */}
        <div className="mb-5 pb-4 border-b border-stone-200/60">
            <h3 className="text-2xl font-bold text-stone-900 font-serif tracking-wide">
                {subTopic.title}
            </h3>
            {/* Garis aksen kecil di bawah judul */}
            <div className="h-1 w-16 bg-amber-500 mt-3 rounded-full"></div>
        </div>

        {/* Teks Penjelasan */}
        <div className="space-y-4 text-stone-700 font-sans text-lg leading-relaxed">
          {subTopic.content.map((item, idx) => {
            if (typeof item === 'string') {
              return (
                <p key={idx} className="">
                  {item}
                </p>
              );
            } else if (item.type === 'list') {
              return (
                <div key={idx} className="my-4 pl-2 bg-white/40 p-4 rounded-lg border border-stone-200/50">
                  <ul className="grid gap-3">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {/* Bullet point Emas Berbentuk Wajik */}
                        <span className="mt-2 w-2 h-2 bg-amber-600 rotate-45 shrink-0 shadow-sm border border-amber-400"></span>
                        <span className="text-stone-800 font-medium">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};