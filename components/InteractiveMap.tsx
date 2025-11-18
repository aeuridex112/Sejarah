import React, { useState } from 'react';
import { mapData } from '../data/mapData';
import { MapLocation } from '../types';

// --- BAGIAN 1: GAMBAR PETA (SVG MANUAL) ---
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
      <path d="M60,50 L100,40 L130,80 L150,120 L160,160 L180,190 L150,210 L120,190 L90,150 L60,100 Z" /> {/* Sumatra */}
      <path d="M240,150 L260,120 L300,100 L380,100 L410,120 L400,170 L380,200 L320,200 L280,190 Z" /> {/* Kalimantan */}
      <path d="M180,220 L200,215 L500,225 L510,245 L480,255 L200,245 Z" /> {/* Jawa */}
      <path d="M480,130 L500,130 L490,150 L530,150 L540,140 L550,160 L530,180 L550,190 L530,200 L510,190 L500,170 L470,160 Z" /> {/* Sulawesi */}
      <path d="M520,245 L540,245 L535,255 L515,255 Z" /> {/* Bali */}
      <path d="M550,245 L620,245 L630,260 L550,260 Z" /> {/* Nusa Tenggara */}
      <path d="M580,140 L600,130 L610,160 L590,170 Z" /> {/* Maluku */}
      <circle cx="610" cy="200" r="12" /> {/* Ambon */}
      <path d="M680,170 L700,150 L850,160 L920,170 L920,240 L800,240 L750,210 L720,200 Z" /> {/* Papua */}
    </g>

    <g transform="translate(900, 70)" opacity="0.5">
      <circle r="25" fill="none" stroke="#94a3b8" strokeWidth="2"/>
      <path d="M0,-20 L6,0 L0,20 L-6,0 Z" fill="#64748b"/>
      <text x="-5" y="-28" fontWeight="bold" fill="#64748b">U</text>
    </g>
  </svg>
);

// --- BAGIAN 2: LOGIKA KLIK ---
interface InteractiveMapProps {
  onLocationClick?: (locationId: string) => void; 
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onLocationClick }) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const handlePinClick = (e: React.MouseEvent, location: MapLocation) => {
    e.preventDefault();  // MATIKAN RELOAD/JUMP BROWSER
    e.stopPropagation(); 
    setSelectedLocation(location);
    
    if (onLocationClick) {
        onLocationClick(location.id);
    }
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
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${selectedLocation?.id === location.id ? 'bg-sky-400' : 'bg-red-500'}`}></span>
            <span className={`relative inline-flex rounded-full border-2 border-white shadow-md transition-all hover:scale-125 ${selectedLocation?.id === location.id ? 'bg-sky-600 h-5 w-5' : 'bg-red-600 h-3 w-3'}`}></span>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {location.name}
            </span>
          </button>
        ))}
      </div>

      {selectedLocation && (
        <div className="p-6 bg-white border-t border-slate-100 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 h-40 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                    <img 
                        src={selectedLocation.imageUrl} 
                        alt={selectedLocation.name}
                        className="w-full h-full object-cover"
                        onError={(e) => e.currentTarget.src = 'https://placehold.co/400x300/e2e8f0/475569?text=No+Image'}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-slate-900">{selectedLocation.name}</h3>
                        <button onClick={handleClose} className="text-slate-400 hover:text-red-500 p-1">✕ Tutup</button>
                    </div>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{selectedLocation.description}</p>
                    
                    {selectedLocation.keyEvents && selectedLocation.keyEvents.length > 0 && (
                        <div className="mb-4">
                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Peristiwa Penting:</h4>
                            <ul className="text-sm text-slate-700 space-y-1">
                                {selectedLocation.keyEvents.map((ev, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2 text-red-500">•</span>
                                        <span>{ev}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedLocation.quote && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded">
                            <p className="italic text-slate-800 text-sm font-serif">"{selectedLocation.quote.text}"</p>
                            <p className="text-xs font-bold text-amber-800 mt-1 uppercase">— {selectedLocation.quote.author}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};