export type StandingEntry = {
  teamId: string;
  wins: number;
  losses: number;
  points: number;
  matchesPlayed: number;
  roundDiff: string; // e.g. "+3" or "-1"
};

export type GameStandings = {
  game: "Mobile Legends" | "Free Fire" | "Valorant";
  category: string;
  entries: StandingEntry[];
};

export const STANDINGS: GameStandings[] = [
  {
    game: "Mobile Legends",
    category: "SMP Sederajat",
    entries: [
      { teamId: "mlbb-smp-001", wins: 2, losses: 0, points: 6, matchesPlayed: 2, roundDiff: "+4" },
      { teamId: "mlbb-smp-002", wins: 1, losses: 1, points: 3, matchesPlayed: 2, roundDiff: "+1" },
    ],
  },
  {
    game: "Mobile Legends",
    category: "SMA Sederajat",
    entries: [
      { teamId: "mlbb-sma-001", wins: 2, losses: 0, points: 6, matchesPlayed: 2, roundDiff: "+5" },
      { teamId: "mlbb-sma-002", wins: 1, losses: 1, points: 3, matchesPlayed: 2, roundDiff: "+1" },
    ],
  },
  {
    game: "Free Fire",
    category: "SMP/SMA Sederajat",
    entries: [
      { teamId: "ff-001", wins: 2, losses: 0, points: 6, matchesPlayed: 2, roundDiff: "+3" },
      { teamId: "ff-002", wins: 1, losses: 1, points: 3, matchesPlayed: 2, roundDiff: "0" },
    ],
  },
  {
    game: "Valorant",
    category: "SMA Sederajat",
    entries: [
      { teamId: "valo-001", wins: 2, losses: 0, points: 6, matchesPlayed: 2, roundDiff: "+12" },
      { teamId: "valo-002", wins: 1, losses: 1, points: 3, matchesPlayed: 2, roundDiff: "+2" },
    ],
  },
];

export function getStandingsByGame(game: GameStandings["game"]) {
  return STANDINGS.filter((s) => s.game === game);
}
