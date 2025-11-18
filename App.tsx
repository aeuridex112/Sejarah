
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
  bandung: 'kedatangan-sekutu', // Also related to disintegration, but primarily here
  yogyakarta: 'kedatangan-sekutu',
  madiun: 'ancaman-disintegrasi',
  kalijati: 'pendudukan-jepang',
  aceh: 'ancaman-disintegrasi', // Also Japan resistance, but main topic is DI/TII
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
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <Header />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <InteractiveMap onLocationClick={handleMapLocationClick} />
        <div className="space-y-4">
          {historyData.map((period, index) => (
            <React.Fragment key={period.id}>
              <TimelineSection
                period={period}
                isOpen={openSectionId === period.id}
                onToggle={() => toggleSection(period.id)}
              />
              {index < historyData.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDownIcon className="w-8 h-8 text-red-500" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>
       <footer className="text-center py-6 text-slate-500 text-sm">
          <p>Dibuat untuk persiapan presentasi. Semoga sukses! 🇮🇩</p>
      </footer>
    </div>
  );
};

export default App;
