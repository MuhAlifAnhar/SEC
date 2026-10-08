export type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  game: "Mobile Legends" | "Free Fire" | "Valorant" | "ALL";
  type: "photo" | "video";
  date: string;
  day: "Day 1" | "Day 2" | "Day 3" | "Pre-Event";
};

// Placeholder gallery items — replace src with actual image/video URLs when available
export const GALLERY: GalleryItem[] = [
  { id: "g-001", src: "/gallery/placeholder.jpg", caption: "Opening Ceremony SEC Vol. 3", game: "ALL", type: "photo", date: "2026-10-16", day: "Day 1" },
  { id: "g-002", src: "/gallery/placeholder.jpg", caption: "MLBB SMP — Quarter Final Match", game: "Mobile Legends", type: "photo", date: "2026-10-16", day: "Day 1" },
  { id: "g-003", src: "/gallery/placeholder.jpg", caption: "Free Fire — Intense Battle Moment", game: "Free Fire", type: "photo", date: "2026-10-16", day: "Day 1" },
  { id: "g-004", src: "/gallery/placeholder.jpg", caption: "Valorant — Clutch by Sentinel Force", game: "Valorant", type: "photo", date: "2026-10-16", day: "Day 1" },
  { id: "g-005", src: "/gallery/placeholder.jpg", caption: "Antusiasme Penonton di Aula", game: "ALL", type: "photo", date: "2026-10-16", day: "Day 1" },
  { id: "g-006", src: "/gallery/placeholder.jpg", caption: "Tim Panitia SEC Vol. 3", game: "ALL", type: "photo", date: "2026-10-16", day: "Pre-Event" },
  { id: "g-007", src: "/gallery/placeholder.jpg", caption: "MLBB SMA — Dragon Slayers Celebration", game: "Mobile Legends", type: "photo", date: "2026-10-17", day: "Day 2" },
  { id: "g-008", src: "/gallery/placeholder.jpg", caption: "FF Semi Final Showdown", game: "Free Fire", type: "photo", date: "2026-10-17", day: "Day 2" },
  { id: "g-009", src: "/gallery/placeholder.jpg", caption: "Valorant Semi Final Highlight", game: "Valorant", type: "photo", date: "2026-10-17", day: "Day 2" },
  { id: "g-010", src: "/gallery/placeholder.jpg", caption: "Awarding Ceremony", game: "ALL", type: "photo", date: "2026-10-18", day: "Day 3" },
];

export function getGalleryByGame(game: GalleryItem["game"]) {
  if (game === "ALL") return GALLERY;
  return GALLERY.filter((g) => g.game === game || g.game === "ALL");
}

export function getGalleryByDay(day: GalleryItem["day"]) {
  return GALLERY.filter((g) => g.day === day);
}
