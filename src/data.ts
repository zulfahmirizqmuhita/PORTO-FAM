import canva from "./assets/logos/canva.svg";
import lightroom from "./assets/logos/lightroom.svg";
import premiere from "./assets/logos/premiere.svg";
import figma from "./assets/logos/figma.svg";
import illustrator from "./assets/logos/illustrator.svg";
import capcut from "./assets/logos/capcut.svg";

export const profile = {
  name: "Zulfahmi Rizq Aldiansyah",
  shortName: "ZULFAHMI RIZQ A.",
  tagline: "DESAIN · FOTO · VIDEO",
  school: "SMK Muhammadiyah 2 Taman",
  major: "Desain Komunikasi Visual (DKV)",
  email: "zulfahmi.rizq.muhita@gmail.com",
  whatsapp: "082233190293",
  whatsappIntl: "6282233190293",
  about1:
    "Halo, perkenalkan saya Zulfahmi Rizq Aldiansyah, siswa SMK Muhammadiyah 2 Taman jurusan Desain Komunikasi Visual (DKV).",
  about2:
    "Saya memiliki minat dan kemampuan di bidang desain grafis, fotografi, videografi, dan editing video. Saya senang mengeksplorasi ide kreatif, mempelajari hal baru, serta mengubah ide menjadi karya visual yang menarik dan komunikatif.",
  photoLink: "https://photos.app.goo.gl/CHZLQKWbyRfAu1fy8",
  videoLink: "https://photos.app.goo.gl/xCnDRLmuvXiLRCgm6",
};

export type Skill = {
  index: string;
  title: string;
  desc: string;
  link?: string;
  icon: "design" | "photo" | "video" | "edit" | "team";
};

export const skills: Skill[] = [
  {
    index: "01",
    title: "Desain Grafis",
    desc: "Membuat desain visual yang menarik, kreatif, dan komunikatif.",
    link: "https://drive.google.com/drive/folders/1eBBHQ2YMqab__smYBl5Fi2ecVzIudQiZ",
    icon: "design",
  },
  {
    index: "02",
    title: "Fotografi",
    desc: "Mengabadikan momen melalui komposisi dan sudut pengambilan gambar.",
    link: "https://drive.google.com/drive/folders/1CRF0Kh30LgkoZHG3jSnZsJw3wA7RcZfn",
    icon: "photo",
  },
  {
    index: "03",
    title: "Videografi",
    desc: "Mengambil gambar untuk kebutuhan konten, dokumentasi, dan storytelling.",
    link: "https://drive.google.com/drive/folders/1GBNVQHGnaNuu94pM4syJMPoKefT_FtWs",
    icon: "video",
  },
  {
    index: "04",
    title: "Editing Video",
    desc: "Mengolah footage menjadi video yang menarik dan memiliki alur cerita.",
    link: "https://drive.google.com/drive/folders/1GBNVQHGnaNuu94pM4syJMPoKefT_FtWs",
    icon: "edit",
  },
  {
    index: "05",
    title: "Leadership",
    desc: "Bekerja sama, berkomunikasi, dan berkontribusi dalam tim.",
    icon: "team",
  },
];

export const software = [
  { name: "Canva", logo: canva, tint: "#00C4CC" },
  { name: "Adobe Lightroom", logo: lightroom, tint: "#31A8FF" },
  { name: "Adobe Premiere Pro", logo: premiere, tint: "#9999FF" },
  { name: "Figma", logo: figma, tint: "#A259FF" },
  { name: "Adobe Illustrator", logo: illustrator, tint: "#FF9A00" },
  { name: "CapCut", logo: capcut, tint: "#ffffff" },
];

export type Experience = {
  title: string;
  org: string;
  date: string;
  type: "Dokumentasi" | "Pelatihan" | "Kunjungan";
};

export const experiences: Experience[] = [
  { title: "Tim Dokumentasi Kegiatan Aisyiyah", org: "MUSYPIMCAB", date: "20 Agustus 2025", type: "Dokumentasi" },
  { title: "Tim Dokumentasi RS Siti Khodijah", org: "Tabligh Akbar", date: "2025", type: "Dokumentasi" },
  { title: "Pelatihan Foto Model", org: "bersama Nailah & Inggrid", date: "26 Februari 2025", type: "Pelatihan" },
  { title: "Tim Dokumentasi PPG Guru", org: "Dokumentasi Kegiatan", date: "2025", type: "Dokumentasi" },
  { title: "Tim Dokumentasi RS As-Sakinah", org: "Peresmian Gedung Baru", date: "8 Juli 2025", type: "Dokumentasi" },
  { title: "Pelatihan AI Agent", org: "Workshop", date: "23 Oktober 2025", type: "Pelatihan" },
  { title: "Pelatihan Adobe Illustrator", org: "Workshop", date: "24 April 2025", type: "Pelatihan" },
  { title: "Kunjungan Industri", org: "PT HOMPIMPA Mahakarya Nusantara, Malang", date: "9 Oktober 2025", type: "Kunjungan" },
];

export const education = [
  { school: "MI Darunnajah Kloposepuluh Sukodono", years: "2015 – 2021", note: "Madrasah Ibtidaiyah" },
  { school: "MTs Muhammadiyah 1 Taman", years: "2021 – 2024", note: "Madrasah Tsanawiyah" },
  { school: "SMK Muhammadiyah 2 Taman", years: "2024 – Sekarang", note: "Jurusan Desain Komunikasi Visual (DKV)", current: true },
];
