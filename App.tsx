import React, { useState } from 'react';
import { historyData } from './data/historyData';
import { Header } from './components/Header';
import { TimelineSection } from './components/TimelineSection';
import { ArrowDownIcon } from './components/icons/ArrowDownIcon';
import { InteractiveMap } from './components/InteractiveMap';

const locationToSectionMap: Record<string, string> = {
  jakarta: 'proklamasi-kemerdekaan',
  rengasdengklok: 'proklamasi-kemerdekaan',
  surabaya: 'kedatangan-sekutu',
  ambawara: 'kedatangan-sekutu',
  bandung: 'kedatangan-sekutu',
  yogyakarta: 'kedatangan-sekutu',
  madiun: 'ancaman-disintegrasi',
  kalijati: 'pendudukan-jepang',
  aceh: 'ancaman-disintegrasi',
  makassar: 'ancaman-disintegrasi',
  ambon: 'ancaman-disintegrasi',
};

const App: React.FC = () => {
  const [openSectionId, setOpenSectionId] = useState<string | null>(historyData[0].id);

  const toggleSection = (id: string) => {
    setOpenSectionId(prevId => (prevId === id ? null : id));
  };

  const handleMapLocationClick = (locationId: string) => {
    const targetSectionId = locationToSectionMap[locationId];
    if (targetSectionId) {
        setOpenSectionId(targetSectionId);
        // Opsional: Auto scroll ke section
        setTimeout(() => {
           const element = document.getElementById(`section-content-${targetSectionId}`);
           if (element) {
             element.parentElement?.parentElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
           }
        }, 100);
    }
  };

  return (
    /* PERUBAHAN: bg-transparent agar animasi index.html terlihat */
    <div className="min-h-screen bg-transparent font-sans text-slate-800">
      <Header />
      
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Efek Glassmorphism pada Peta agar tidak tenggelam */}
        <div className="backdrop-blur-sm bg-white/30 p-2 rounded-2xl shadow-xl mb-8 border border-white/50">
            <InteractiveMap onLocationClick={handleMapLocationClick} />
        </div>

        <div className="space-y-6">
          {historyData.map((period, index) => (
            <React.Fragment key={period.id}>
              <TimelineSection
                period={period}
                isOpen={openSectionId === period.id}
                onToggle={() => toggleSection(period.id)}
              />
              {index < historyData.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="bg-white/50 p-2 rounded-full backdrop-blur-sm shadow-sm animate-bounce">
                     <ArrowDownIcon className="w-6 h-6 text-red-600/70" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>
      
       <footer className="text-center py-8 text-slate-600 text-sm font-serif">
          <div className="inline-block px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
             <p>🇮🇩 Dibuat dengan Semangat Kemerdekaan 🇮🇩</p>
          </div>
      </footer>
    </div>
  );
};

export default App;