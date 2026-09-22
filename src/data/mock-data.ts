export type Material = { id: string; name: string; questions: number; mastery: number; subtestId: string };
export type Question = { id: string; materialId: string; prompt: string; options: string[]; answer: number; explanation: string };

export const exams = [
  { id: "skd", name: "SKD", fullName: "Seleksi Kompetensi Dasar", available: true },
  { id: "utbk", name: "UTBK", fullName: "Ujian Tulis Berbasis Komputer", available: false },
];

export const subtests = [
  { id: "twk", name: "TWK", fullName: "Tes Wawasan Kebangsaan", count: 5, mastery: 64 },
  { id: "tiu", name: "TIU", fullName: "Tes Intelegensia Umum", count: 10, mastery: 72 },
  { id: "tkp", name: "TKP", fullName: "Tes Karakteristik Pribadi", count: 6, mastery: 81 },
];

const tiuNames = ["Verbal Analogi", "Verbal Silogisme", "Verbal Analitis", "Numerik Berhitung", "Numerik Deret Angka", "Numerik Perbandingan Kuantitatif", "Numerik Soal Cerita", "Figural Analogi", "Figural Ketidaksamaan", "Figural Serial"];
export const tiuMaterials: Material[] = tiuNames.map((name, index) => ({ id: `tiu-${index + 1}`, name, questions: [36, 28, 32, 42, 38, 24, 34, 26, 22, 30][index] ?? 30, mastery: [78, 66, 70, 72, 61, 75, 69, 80, 74, 68][index] ?? 70, subtestId: "tiu" }));

export const skdTaxonomy = {
  TWK: ["Nasionalisme", "Integritas", "Bela Negara", "Pilar Negara", "Bahasa Negara"],
  TIU: tiuNames,
  TKP: ["Pelayanan Publik", "Jejaring Kerja", "Sosial Budaya", "Teknologi Informasi dan Komunikasi", "Profesionalisme", "Anti Radikalisme"],
};

export const questions: Question[] = [
  { id: "q1", materialId: "tiu-4", prompt: "Jika 25% dari suatu bilangan adalah 40, maka bilangan tersebut adalah...", options: ["100", "120", "140", "160", "180"], answer: 3, explanation: "25% sama dengan ¼. Jika ¼ dari bilangan adalah 40, maka bilangannya 40 × 4 = 160." },
  { id: "q2", materialId: "tiu-4", prompt: "Hasil dari 48 ÷ 6 × 3 + 7 adalah...", options: ["24", "29", "31", "35", "38"], answer: 2, explanation: "Kerjakan pembagian dan perkalian dari kiri: 48 ÷ 6 = 8, lalu 8 × 3 = 24. Tambahkan 7 sehingga hasilnya 31." },
  { id: "q3", materialId: "tiu-4", prompt: "Sebuah barang seharga Rp240.000 mendapat diskon 15%. Harga setelah diskon adalah...", options: ["Rp196.000", "Rp200.000", "Rp204.000", "Rp210.000", "Rp216.000"], answer: 2, explanation: "Diskon 15% dari Rp240.000 adalah Rp36.000. Jadi harga akhirnya Rp204.000." },
];

export const attempts = [{ id: "a1", questionId: "q1", correct: true, seconds: 42 }, { id: "a2", questionId: "q2", correct: false, seconds: 58 }];
export const progress = { accuracy: 76, questions: 184, studyMinutes: 312, currentStreak: 7, longestStreak: 14, weeklyAccuracy: [62, 68, 65, 74, 71, 79, 76] };
export const reviewItems = [{ materialId: "tiu-4", count: 7 }, { materialId: "tiu-1", count: 5 }];
export const streak = { days: 7, activeDates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] };

export const materialById = (id: string) => tiuMaterials.find((item) => item.id === id) ?? tiuMaterials[3];