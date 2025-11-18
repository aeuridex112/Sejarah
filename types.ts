export interface MapQuote {
  text: string;
  author: string;
}

export interface MapLocation {
  id: string;
  name: string;
  // HAPUS imageUrl, GANTI dengan color
  // imageUrl?: string;  <-- Tidak dipakai lagi
  color: string;      // <-- Wajib ada (misal: 'bg-red-500')
  coords: {
    top: string;
    left: string;
  };
  description: string;
  keyEvents: string[];
  quote?: MapQuote;
}