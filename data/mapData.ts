import { MapLocation } from '../types';

export const mapData: MapLocation[] = [
  {
    id: 'jakarta',
    name: 'Jakarta',
    coords: { top: '58%', left: '23%' },
    color: 'bg-red-600', // Merah Berani (Proklamasi)
    description: 'Pusat Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945 di Jalan Pegangsaan Timur No. 56.',
    keyEvents: [
      'Pembacaan Proklamasi (17 Agustus 1945)',
      'Perumusan teks proklamasi di rumah Laksamana Maeda',
      'Pengesahan UUD 1945'
    ],
    quote: {
      text: 'Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.',
      author: 'Soekarno - Hatta'
    }
  },
  {
    id: 'rengasdengklok',
    name: 'Rengasdengklok',
    coords: { top: '56%', left: '25%' },
    color: 'bg-rose-500', // Merah Muda (Semangat Pemuda)
    description: 'Tempat diamankannya Soekarno-Hatta oleh golongan muda untuk menjauhkan dari pengaruh Jepang.',
    keyEvents: [
      'Peristiwa Rengasdengklok (16 Agustus 1945)',
      'Desakan golongan muda untuk segera proklamasi'
    ],
    quote: {
      text: 'Jika Saudara tidak menyiarkan kemerdekaan malam ini juga, besok akan terjadi pertumpahan darah.',
      author: 'Wikana'
    }
  },
  {
    id: 'kalijati',
    name: 'Kalijati',
    coords: { top: '55%', left: '26%' },
    color: 'bg-slate-600', // Abu-abu (Masa Suram/Pendudukan)
    description: 'Lokasi bersejarah di Subang tempat Belanda menyerah tanpa syarat kepada Jepang.',
    keyEvents: [
      '8 Maret 1942: Penyerahan Belanda ke Jepang',
      'Akhir penjajahan Belanda, awal pendudukan Jepang'
    ],
    quote: {
      text: 'Angkatan Perang Hindia Belanda menyerah tanpa syarat kepada Angkatan Perang Jepang.',
      author: 'Letjen Ter Poorten'
    }
  },
  {
    id: 'bandung',
    name: 'Bandung',
    coords: { top: '62%', left: '24%' },
    color: 'bg-orange-500', // Oranye (Api/Kebakaran)
    description: 'Kota yang sengaja dibakar oleh pejuang agar tidak dijadikan markas militer Sekutu (Bandung Lautan Api).',
    keyEvents: [
      '23 Maret 1946: Bandung Lautan Api',
      'Evakuasi penduduk Bandung Selatan'
    ],
    quote: {
      text: 'Mari Bung Rebut Kembali, Halo-Halo Bandung.',
      author: 'Ismail Marzuki'
    }
  },
  {
    id: 'ambawara',
    name: 'Ambarawa',
    coords: { top: '60%', left: '32%' },
    color: 'bg-emerald-600', // Hijau Tentara (TKR/Militer)
    description: 'Pertempuran palagan Ambarawa di mana TKR menggunakan taktik supit urang melawan Sekutu.',
    keyEvents: [
      '12-15 Desember 1945: Pertempuran Ambarawa',
      'Kemenangan TKR di bawah Kolonel Sudirman'
    ],
    quote: {
      text: 'Kita harus menang, satu-satunya jalan adalah mengusir musuh dari Ambarawa.',
      author: 'Jenderal Sudirman'
    }
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    coords: { top: '63%', left: '33%' },
    color: 'bg-amber-600', // Emas/Coklat (Keraton/Ibukota)
    description: 'Menjadi ibu kota perjuangan RI saat Jakarta dikuasai Belanda, dan lokasi Serangan Umum 1 Maret.',
    keyEvents: [
      'Ibukota RI (1946-1949)',
      '1 Maret 1949: Serangan Umum'
    ],
    quote: {
      text: 'Yogyakarta adalah nyawa Republik yang harus dipertahankan.',
      author: 'Sri Sultan HB IX'
    }
  },
  {
    id: 'madiun',
    name: 'Madiun',
    coords: { top: '60%', left: '36%' },
    color: 'bg-red-800', // Merah Gelap (Pemberontakan Kiri)
    description: 'Lokasi pemberontakan PKI pada tahun 1948 yang dipimpin oleh Musso.',
    keyEvents: [
      'September 1948: Pemberontakan PKI Madiun',
      'Penumpasan pemberontakan oleh Divisi Siliwangi'
    ],
    quote: {
      text: 'Pilih Musso-Amir atau Soekarno-Hatta?',
      author: 'Soekarno'
    }
  },
  {
    id: 'surabaya',
    name: 'Surabaya',
    coords: { top: '57%', left: '40%' },
    color: 'bg-red-700', // Merah Darah (Pertempuran 10 Nov)
    description: 'Medan pertempuran dahsyat 10 November 1945 melawan tentara Sekutu (Inggris).',
    keyEvents: [
      '10 November 1945: Pertempuran Surabaya',
      'Insiden Hotel Yamato'
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
    color: 'bg-teal-600', // Hijau Teal (Nuansa Islam/DI-TII)
    description: 'Daerah yang gigih melawan Belanda dan Jepang, serta basis pemberontakan DI/TII.',
    keyEvents: [
      'Perlawanan Ulama terhadap Jepang',
      'Proklamasi DI/TII Aceh'
    ],
    quote: {
      text: 'Kami berjuang demi menegakkan syariat Islam di bumi Aceh.',
      author: 'Daud Beureueh'
    }
  },
  {
    id: 'makassar',
    name: 'Makassar',
    coords: { top: '45%', left: '50%' },
    color: 'bg-indigo-600', // Ungu/Biru (Indonesia Timur)
    description: 'Pusat pergolakan di Indonesia Timur, termasuk pemberontakan Andi Azis.',
    keyEvents: [
      'Pemberontakan Andi Azis',
      'Pemberontakan Kahar Muzakkar'
    ],
    quote: {
      text: 'Menolak kedatangan pasukan APRIS dari Jawa.',
      author: 'Andi Azis'
    }
  },
  {
    id: 'ambon',
    name: 'Ambon',
    coords: { top: '50%', left: '61%' },
    color: 'bg-blue-600', // Biru Laut (Kepulauan/RMS)
    description: 'Lokasi diproklamasikannya Republik Maluku Selatan (RMS) yang ingin memisahkan diri.',
    keyEvents: [
      '25 April 1950: Proklamasi RMS',
      'Operasi militer penumpasan RMS'
    ],
    quote: {
      text: 'Maluku Selatan berdiri sendiri terpisah dari NIT.',
      author: 'Dr. Soumokil'
    }
  }
];