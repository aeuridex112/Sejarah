import React, { useState } from 'react';
import { mapData } from '../data/mapData';
import { MapLocation } from '../types';

// --- PETA VEKTOR (STYLE MEWAH) ---
const IndonesiaVectorMap = () => (
  <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible">
    <defs>
       <filter id="glowShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
       </filter>
       <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="100%" stopColor="#ffedd5" />
       </linearGradient>
    </defs>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
       <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#b45309" strokeWidth="0.3" opacity="0.3"/>
    </pattern>
    <rect width="1000" height="400" fill="url(#grid)" />
    <g filter="url(#glowShadow)" fill="url(#goldGradient)" stroke="#b45309" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M60,50 L100,40 L130,80 L150,120 L160,160 L180,190 L150,210 L120,190 L90,150 L60,100 Z" />
      <path d="M240,150 L260,120 L300,100 L380,100 L410,120 L400,170 L380,200 L320,200 L280,190 Z" />
      <path d="M180,220 L200,215 L500,225 L510,245 L480,255 L200,245 Z" />
      <path d="M480,130 L500,130 L490,150 L530,150 L540,140 L550,160 L530,180 L550,190 L530,200 L510,190 L500,170 L470,160 Z" />
      <path d="M520,245 L540,245 L535,255 L515,255 Z" />
      <path d="M550,245 L620,245 L630,260 L550,260 Z" />
      <path d="M580,140 L600,130 L610,160 L590,170 Z" />
      <circle cx="610" cy="200" r="12" />
      <path d="M680,170 L700,150 L850,160 L920,170 L920,240 L800,240 L750,210 L720,200 Z" />
    </g>
    <g transform="translate(920, 60)" opacity="0.8">
      <circle r="28" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="4 2"/>
      <path d="M0,-22 L5,0 L0,22 L-5,0 Z" fill="#9a3412"/>
      <text x="-5" y="-32" fontSize="14" fontWeight="bold" fill="#9a3412" fontFamily="serif">U</text>
    </g>
  </svg>
);

interface InteractiveMapProps {
  onLocationClick?: (locationId: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onLocationClick }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const handlePinClick = (e: React.MouseEvent, location: MapLocation) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedLocation(location);
    if (onLocationClick) onLocationClick(location.id);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedLocation(null);
  };

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-md bg-white/20 mb-10 transition-all hover:bg-white/30 relative">
      
      <div className="px-6 py-4 border-b border-white/30 flex justify-between items-center bg-white/40 relative z-20">
         <div>
            <h2 className="text-xl font-bold text-red-900 font-serif tracking-wide">Peta Sebaran Peristiwa</h2>
            <p className="text-xs text-red-800/70 font-sans uppercase tracking-widest mt-1">Klik titik lokasi untuk detail</p>
         </div>
         <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
      </div>

      <div className="relative w-full aspect-[5/2] group select-none z-10">
        <IndonesiaVectorMap />
        
        {mapData.map((location) => (
          <button
            key={location.id}
            type="button"
            onClick={(e) => handlePinClick(e, location)}
            style={{ top: location.coords.top, left: location.coords.left }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer focus:outline-none group/pin"
          >
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping ${selectedLocation?.id === location.id ? 'bg-blue-400' : 'bg-red-500'}`}></span>
            <div className={`relative flex items-center justify-center rounded-full shadow-lg border-2 border-white transition-all duration-500 ${selectedLocation?.id === location.id ? 'bg-blue-600 w-8 h-8 -mt-2' : 'bg-red-600 w-4 h-4 hover:w-6 hover:h-6 hover:bg-red-500'}`}>
                {selectedLocation?.id === location.id && (
                   <span className="animate-bounce text-[10px]">📍</span>
                )}
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 bg-white/90 text-red-900 text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-20 border border-red-100 backdrop-blur-sm translate-y-2 group-hover/pin:translate-y-0">
                {location.name}
            </div>
          </button>
        ))}
      </div>

      {/* --- MODAL DETAIL DENGAN TRANSISI METAMORPH --- */}
      {selectedLocation && (
        <div className="relative bg-white/60 backdrop-blur-xl border-t border-white shadow-inner animate-metamorph overflow-hidden">
            
            {/* ELEMENT LATAR BELAKANG: CAIRAN BERGERAK (BLOBS) */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Tombol Close */}
            <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 z-30 p-2 bg-white/50 hover:bg-white text-red-800 rounded-full transition-all shadow-sm hover:scale-110 hover:rotate-90 duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="flex flex-col md:flex-row relative z-20">
                
                {/* Box Kiri: Identitas (Tanpa Gambar, Warna Elegan) */}
                <div className={`w-full md:w-1/3 p-8 flex flex-col items-center justify-center text-center shrink-0 relative overflow-hidden`}>
                    {/* Latar Gradient sesuai warna lokasi */}
                    <div className={`absolute inset-0 opacity-90 ${selectedLocation.color || 'bg-slate-800'}`}></div>
                    
                    {/* Hiasan Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white relative z-10 font-serif drop-shadow-lg transform transition-transform hover:scale-105 duration-500">
                        {selectedLocation.name}
                    </h3>
                    <div className="w-12 h-1 bg-white/50 rounded mt-3 relative z-10"></div>
                </div>

                {/* Box Kanan: Konten */}
                <div className="flex-1 p-8 relative">
                    <p className="text-slate-800 mb-6 text-lg font-serif leading-relaxed italic border-l-4 border-red-400/50 pl-4">
                        "{selectedLocation.description}"
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <h4 className="text-xs font-bold text-red-900/60 uppercase tracking-widest mb-3">Peristiwa Kunci</h4>
                            <ul className="space-y-2">
                                {selectedLocation.keyEvents.map((ev, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-700 group hover:translate-x-1 transition-transform">
                                        <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-all shrink-0 shadow-sm shadow-red-500/50"></span>
                                        {ev}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {selectedLocation.quote && (
                            <div className="mt-4 pt-4 border-t border-red-100/50">
                                <p className="text-slate-900 font-bold text-sm">
                                    <span className="text-red-600 mr-2 text-lg">❝</span>
                                    {selectedLocation.quote.text}
                                </p>
                                <p className="text-xs text-slate-500 mt-1 text-right font-serif italic">— {selectedLocation.quote.author}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};