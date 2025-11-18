import { MapLocation } from '../types';

export const mapData: MapLocation[] = [
  {
    id: 'jakarta',
    name: 'Jakarta',
    coords: { top: '58%', left: '23%' },
    description: 'Pusat Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Proclamation_of_Indonesian_Independence_17_August_1945.jpg/800px-Proclamation_of_Indonesian_Independence_17_August_1945.jpg',
    keyEvents: [
      'Pembacaan Proklamasi (17 Agustus 1945)',
      'Perumusan teks proklamasi di rumah Laksamana Maeda',
      'Pengesahan UUD 1945'
    ],
    quote: {
      text: 'Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia',
      author: 'Soekarno-Hatta'
    }
  },
  {
    id: 'rengasdengklok',
    name: 'Rengasdengklok',
    coords: { top: '56%', left: '25%' },
    description: 'Tempat peristiwa Rengasdengklok, dimana golongan muda membawa Soekarno-Hatta.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/COLLECTIE_TROPENMUSEUM_Portret_van_Soekarno_TMnr_10001235.jpg/400px-COLLECTIE_TROPENMUSEUM_Portret_van_Soekarno_TMnr_10001235.jpg',
    keyEvents: [
      'Peristiwa Rengasdengklok (16 Agustus 1945)',
      'Desakan golongan muda untuk segera memproklamasikan kemerdekaan'
    ]
  },
  {
    id: 'kalijati',
    name: 'Kalijati',
    coords: { top: '55%', left: '26%' },
    description: 'Tempat penyerahan Hindia Belanda kepada Jepang.',
    keyEvents: [
      'Penyerahan tanpa syarat Belanda ke Jepang (8 Maret 1942)',
      'Awal pendudukan Jepang'
    ]
  },
  {
    id: 'bandung',
    name: 'Bandung',
    coords: { top: '62%', left: '24%' },
    description: 'Tempat peristiwa Bandung Lautan Api tahun 1946.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bandung_Lautan_Api.jpg/800px-Bandung_Lautan_Api.jpg',
    keyEvents: [
      'Bandung Lautan Api (24 Maret 1946)',
      'Strategi bumi hangus melawan Sekutu'
    ]
  },
  {
    id: 'ambawara',
    name: 'Ambarawa',
    coords: { top: '60%', left: '32%' },
    description: 'Pertempuran Ambarawa melawan tentara Sekutu.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Palagan_Ambarawa.jpg/800px-Palagan_Ambarawa.jpg',
    keyEvents: [
      'Pertempuran Ambarawa (Desember 1945)',
      'Dipimpin oleh Kolonel Sudirman'
    ]
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    coords: { top: '63%', left: '33%' },
    description: 'Ibukota Indonesia saat agresi militer Belanda.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gedung_Agung_Yogyakarta.jpg/800px-Gedung_Agung_Yogyakarta.jpg',
    keyEvents: [
      'Ibukota RI (1946-1949)',
      'Serangan Umum 1 Maret 1949',
      'Pusat pemerintahan darurat'
    ]
  },
  {
    id: 'madiun',
    name: 'Madiun',
    coords: { top: '60%', left: '36%' },
    description: 'Lokasi pemberontakan PKI Madiun 1948.',
    imageUrl: 'https://placehold.co/600x400/png?text=Madiun',
    keyEvents: [
      'Pemberontakan PKI Madiun (September 1948)',
      'Ancaman disintegrasi internal'
    ]
  },
  {
    id: 'surabaya',
    name: 'Surabaya',
    coords: { top: '57%', left: '40%' },
    description: 'Kota Pahlawan, tempat terjadinya pertempuran 10 November 1945.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tugu_Pahlawan.jpg/800px-Tugu_Pahlawan.jpg',
    keyEvents: [
      'Pertempuran 10 November 1945',
      'Insiden Hotel Yamato',
      'Bung Tomo membakar semangat rakyat'
    ],
    quote: {
      text: 'Merdeka atau Mati!',
      author: 'Bung Tomo'
    }
  },
  {
    id: 'aceh',
    name: 'Aceh',
    coords: { top: '25%', left: '8%' },
    description: 'Daerah gerakan DI/TII dan perlawanan terhadap Jepang.',
    keyEvents: [
      'Gerakan DI/TII di Aceh',
      'Perlawanan terhadap pendudukan Jepang'
    ]
  },
  {
    id: 'makassar',
    name: 'Makassar',
    coords: { top: '45%', left: '50%' },
    description: 'Pusat gerakan separatis di Sulawesi Selatan.',
    keyEvents: [
      'Gerakan separatis Kahar Muzakkar',
      'Pemberontakan DI/TII Sulawesi'
    ]
  },
  {
    id: 'ambon',
    name: 'Ambon',
    coords: { top: '50%', left: '61%' },
    description: 'Lokasi Republik Maluku Selatan (RMS).',
    keyEvents: [
      'Proklamasi RMS (25 April 1950)',
      'Gerakan separatis di Maluku'
    ]
  }
];