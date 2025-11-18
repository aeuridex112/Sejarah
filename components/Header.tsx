
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-4xl mx-auto py-4 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">
          Peta Konsep Sejarah Indonesia
        </h1>
        <p className="text-slate-600">Periode Kritis 1942 - 1949</p>
      </div>
    </header>
  );
};
