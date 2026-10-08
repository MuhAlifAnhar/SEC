export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "announcement" | "recap" | "update" | "highlight";
  game: "Mobile Legends" | "Free Fire" | "Valorant" | "ALL";
  thumbnail: string | null;
};

export const NEWS: NewsArticle[] = [
  {
    id: "news-001",
    title: "SEC Vol. 3 Resmi Dibuka! Pendaftaran Sudah Dimulai",
    excerpt: "STELK E-Sport Championship Vol. 3 resmi dibuka. Segera daftarkan timmu dan tunjukkan kemampuanmu di arena pertarungan terbesar antar pelajar Makassar.",
    content: "STELK E-Sport Championship Vol. 3 kembali hadir dengan tema \"PIXEL BATTLE — Level Up Your Skill, Unity In Victory\". Tahun ini, SEC menghadirkan 3 cabang game: Mobile Legends, Free Fire, dan Valorant. Total prize pool yang diperebutkan mencapai Rp16.500.000. Pendaftaran dibuka mulai 15 September hingga 13 Oktober 2026. Jangan lewatkan kesempatan ini!",
    date: "2026-09-15",
    category: "announcement",
    game: "ALL",
    thumbnail: null,
  },
  {
    id: "news-002",
    title: "Technical Meeting SEC Vol. 3 — Persiapan Final!",
    excerpt: "Technical Meeting akan dilaksanakan pada 14 Oktober 2026. Pastikan perwakilan timmu hadir untuk mendapatkan informasi penting menjelang pertandingan.",
    content: "Technical Meeting SEC Vol. 3 dijadwalkan pada 14 Oktober 2026 di Aula SMK Telkom Makassar. Setiap tim wajib mengirimkan minimal 1 perwakilan. Agenda meliputi: penjelasan aturan, drawing bracket, dan Q&A. Tim yang tidak mengirimkan perwakilan akan dikenakan sanksi sesuai juknis.",
    date: "2026-10-10",
    category: "update",
    game: "ALL",
    thumbnail: null,
  },
  {
    id: "news-003",
    title: "Day 1 Recap: MLBB SMP — Phoenix Rising Dominasi Quarter Final",
    excerpt: "Phoenix Rising tampil dominan di hari pertama pertandingan MLBB kategori SMP dengan kemenangan telak 2-1 atas Shadow Wolves.",
    content: "Pada pertandingan pembuka MLBB kategori SMP, Phoenix Rising dari SMPN 1 Makassar menunjukkan performa luar biasa. PhxMid (Cahyo Wibowo) menjadi MVP pertandingan dengan penampilan gemilang menggunakan Valentina. Shadow Wolves sempat menyamakan kedudukan di game 2, namun Phoenix Rising berhasil menutup seri di game 3 dengan rotasi yang rapi.",
    date: "2026-10-16",
    category: "recap",
    game: "Mobile Legends",
    thumbnail: null,
  },
  {
    id: "news-004",
    title: "Free Fire: Blaze Squad Lolos ke Semi Final!",
    excerpt: "Blaze Squad dari SMPN 2 Makassar berhasil meraih tiket semi final setelah menaklukkan Arctic Foxes.",
    content: "Blaze Squad menunjukkan dominasi di arena Free Fire. Oscar Pratama (BlzRush) memimpin timnya dengan agresivitas tinggi, meraih booyah di match pertama. Arctic Foxes memberikan perlawanan sengit namun tidak cukup untuk membendung serangan Blaze Squad.",
    date: "2026-10-16",
    category: "recap",
    game: "Free Fire",
    thumbnail: null,
  },
  {
    id: "news-005",
    title: "Valorant Highlight: Sentinel Force vs Phantom Aces — Duel Sengit!",
    excerpt: "Pertandingan Valorant antara Sentinel Force dan Phantom Aces menjadi salah satu highlight hari pertama dengan skor akhir 13-9.",
    content: "Sentinel Force dari SMAN 1 Makassar tampil impresif di pertandingan Valorant melawan Phantom Aces dari SMK Telkom Makassar. Gading Pratama (SfDuel) menjadi bintang pertandingan dengan 28 kills dan 3 clutch situations. Meski Phantom Aces sempat memimpin di babak pertama, Sentinel Force menunjukkan mental yang kuat dan meraih kemenangan 13-9.",
    date: "2026-10-16",
    category: "highlight",
    game: "Valorant",
    thumbnail: null,
  },
  {
    id: "news-006",
    title: "Bracket Semi Final Telah Dirilis!",
    excerpt: "Bracket semi final untuk ketiga cabang game telah ditentukan. Simak jadwal pertandingan yang akan berlangsung pada 17 Oktober 2026.",
    content: "Setelah seri pertandingan seru di quarter final, bracket semi final SEC Vol. 3 telah resmi dirilis. Pertandingan semi final akan berlangsung pada 17 Oktober 2026 di Aula SMK Telkom Makassar. Jadwal lengkap: MLBB SMP (09:00), MLBB SMA (10:00), FF (13:00), Valorant (15:00). Datang dan dukung tim favoritmu!",
    date: "2026-10-16",
    category: "announcement",
    game: "ALL",
    thumbnail: null,
  },
];

export function getNewsByGame(game: NewsArticle["game"]) {
  if (game === "ALL") return NEWS;
  return NEWS.filter((n) => n.game === game || n.game === "ALL");
}

export function getNewsByCategory(category: NewsArticle["category"]) {
  return NEWS.filter((n) => n.category === category);
}
