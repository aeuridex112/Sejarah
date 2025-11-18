import React, { useState } from 'react';
import { mapData } from '../data/mapData'; // Pastikan path ini benar sesuai folder Anda
import { MapLocation } from '../types';   // Pastikan path ini benar sesuai folder Anda

// --- PETA VEKTOR ---
const IndonesiaVectorMap = () => (
  <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full pointer-events-none select-none">
    <defs>
       <filter id="dropShadow" x="-2%" y="-2%" width="104%" height="104%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#64748b" floodOpacity="0.3"/>
       </filter>
    </defs>
    <rect width="1000" height="400" fill="#f0f9ff" />
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0f2fe" strokeWidth="1"/>
    </pattern>
    <rect width="1000" height="400" fill="url(#grid)" />

    <g filter="url(#dropShadow)" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5">
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

    <g transform="translate(900, 70)" opacity="0.5">
      <circle r="25" fill="none" stroke="#94a3b8" strokeWidth="2"/>
      <path d="M0,-20 L6,0 L0,20 L-6,0 Z" fill="#64748b"/>
      <text x="-5" y="-28" fontWeight="bold" fill="#64748b">U</text>
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
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 mb-8">
      <div className="p-4 border-b border-slate-100 bg-slate-50">
         <h2 className="text-xl font-bold text-slate-800">Peta Sebaran Peristiwa</h2>
         <p className="text-xs text-slate-500">Klik titik untuk melihat detail.</p>
      </div>

      <div className="relative w-full aspect-[5/2] bg-blue-50 overflow-hidden group select-none">
        <IndonesiaVectorMap />
        {mapData.map((location) => (
          <button
            key={location.id}
            type="button"
            onClick={(e) => handlePinClick(e, location)}
            style={{ top: location.coords.top, left: location.coords.left }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer focus:outline-none group/pin"
          >
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${location.color || 'bg-red-500'}`}></span>
            <span className={`relative inline-flex rounded-full border-2 border-white shadow-md transition-all hover:scale-125 ${selectedLocation?.id === location.id ? 'bg-slate-800 h-6 w-6' : 'bg-red-600 h-3 w-3'}`}></span>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {location.name}
            </span>
          </button>
        ))}
      </div>

      {selectedLocation && (
        <div className="bg-white border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col md:flex-row min-h-[250px]">
                
                {/* BAGIAN 1: KOTAK WARNA (PENGGANTI IMAGE) */}
                {/* Perhatikan: Tidak ada tag <img> di sini. Hanya <div> dengan class warna */}
                <div className={`w-full md:w-1/3 p-8 flex flex-col items-center justify-center text-center shrink-0 text-white relative overflow-hidden ${selectedLocation.color || 'bg-slate-500'}`}>
                    
                    {/* Elemen Dekoratif Latar Belakang */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                    
                    {/* Nama Lokasi Besar */}
                    <h3 className="text-3xl md:text-4xl font-bold relative z-10 drop-shadow-md">
                        {selectedLocation.name}
                    </h3>
                    <div className="w-16 h-1 bg-white/60 rounded mt-3 relative z-10"></div>
                </div>

                {/* BAGIAN 2: KONTEN TEKS */}
                <div className="flex-1 p-6 md:p-8 relative">
                    <button 
                        onClick={handleClose} 
                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-xs font-bold uppercase"
                    >
                       Tutup ✕
                    </button>

                    <p className="text-slate-700 mb-6 text-base leading-relaxed font-medium border-b border-slate-100 pb-4">
                        {selectedLocation.description}
                    </p>
                    
                    {/* List Events */}
                    <div className="mb-6">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Peristiwa Penting</h4>
                        <ul className="space-y-2">
                            {selectedLocation.keyEvents.map((ev, i) => (
                                <li key={i} className="flex items-start text-sm text-slate-600">
                                    <span className={`mt-1.5 mr-3 w-2 h-2 rounded-full shrink-0 ${selectedLocation.color || 'bg-slate-400'}`}></span>
                                    {ev}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kutipan */}
                    {selectedLocation.quote && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <p className="italic text-slate-800 text-sm font-serif mb-2">
                                "{selectedLocation.quote.text}"
                            </p>
                            <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                                — {selectedLocation.quote.author}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};