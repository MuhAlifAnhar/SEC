export type MatchStatus = "upcoming" | "live" | "completed";

export type Match = {
  id: string;
  game: "Mobile Legends" | "Free Fire" | "Valorant";
  category: string;
  round: string;
  teamAId: string;
  teamBId: string;
  scoreA: number;
  scoreB: number;
  status: MatchStatus;
  date: string;
  time: string;
  mvpPlayerId: string | null;
};

export const MATCHES: Match[] = [
  // ==================== MLBB SMP — Quarter Finals ====================
  {
    id: "m-mlbb-smp-qf1",
    game: "Mobile Legends",
    category: "SMP Sederajat",
    round: "Quarter Final",
    teamAId: "mlbb-smp-001",
    teamBId: "mlbb-smp-002",
    scoreA: 2,
    scoreB: 1,
    status: "completed",
    date: "2026-10-16",
    time: "09:00",
    mvpPlayerId: "p-003",
  },

  // ==================== MLBB SMA — Quarter Finals ====================
  {
    id: "m-mlbb-sma-qf1",
    game: "Mobile Legends",
    category: "SMA Sederajat",
    round: "Quarter Final",
    teamAId: "mlbb-sma-001",
    teamBId: "mlbb-sma-002",
    scoreA: 2,
    scoreB: 0,
    status: "completed",
    date: "2026-10-16",
    time: "11:00",
    mvpPlayerId: "p-025",
  },

  // ==================== MLBB SMA — Semi Final ====================
  {
    id: "m-mlbb-sma-sf1",
    game: "Mobile Legends",
    category: "SMA Sederajat",
    round: "Semi Final",
    teamAId: "mlbb-sma-001",
    teamBId: "mlbb-sma-002",
    scoreA: 0,
    scoreB: 0,
    status: "upcoming",
    date: "2026-10-17",
    time: "10:00",
    mvpPlayerId: null,
  },

  // ==================== FREE FIRE ====================
  {
    id: "m-ff-qf1",
    game: "Free Fire",
    category: "SMP/SMA Sederajat",
    round: "Quarter Final",
    teamAId: "ff-001",
    teamBId: "ff-002",
    scoreA: 1,
    scoreB: 0,
    status: "completed",
    date: "2026-10-16",
    time: "13:00",
    mvpPlayerId: "p-041",
  },
  {
    id: "m-ff-sf1",
    game: "Free Fire",
    category: "SMP/SMA Sederajat",
    round: "Semi Final",
    teamAId: "ff-001",
    teamBId: "ff-002",
    scoreA: 0,
    scoreB: 0,
    status: "live",
    date: "2026-10-17",
    time: "13:00",
    mvpPlayerId: null,
  },

  // ==================== VALORANT ====================
  {
    id: "m-valo-qf1",
    game: "Valorant",
    category: "SMA Sederajat",
    round: "Quarter Final",
    teamAId: "valo-001",
    teamBId: "valo-002",
    scoreA: 13,
    scoreB: 9,
    status: "completed",
    date: "2026-10-16",
    time: "15:00",
    mvpPlayerId: "p-057",
  },
  {
    id: "m-valo-sf1",
    game: "Valorant",
    category: "SMA Sederajat",
    round: "Semi Final",
    teamAId: "valo-001",
    teamBId: "valo-002",
    scoreA: 0,
    scoreB: 0,
    status: "upcoming",
    date: "2026-10-17",
    time: "15:00",
    mvpPlayerId: null,
  },
];

export function getMatchesByGame(game: Match["game"]) {
  return MATCHES.filter((m) => m.game === game);
}

export function getLiveMatches() {
  return MATCHES.filter((m) => m.status === "live");
}

export function getUpcomingMatches() {
  return MATCHES.filter((m) => m.status === "upcoming");
}

export function getCompletedMatches() {
  return MATCHES.filter((m) => m.status === "completed");
}
