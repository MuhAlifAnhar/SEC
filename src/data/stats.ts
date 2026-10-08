// ==================== Hero/Agent Stats ====================

export type HeroStat = {
  name: string;
  game: "Mobile Legends" | "Valorant";
  role: string;
  pickRate: number; // percentage
  banRate: number;  // percentage
  winRate: number;  // percentage
  totalPicked: number;
  totalBanned: number;
};

export const HERO_STATS: HeroStat[] = [
  // MLBB Heroes
  { name: "Ling", game: "Mobile Legends", role: "Assassin", pickRate: 78, banRate: 65, winRate: 58, totalPicked: 14, totalBanned: 12 },
  { name: "Fanny", game: "Mobile Legends", role: "Assassin", pickRate: 45, banRate: 80, winRate: 62, totalPicked: 8, totalBanned: 15 },
  { name: "Beatrix", game: "Mobile Legends", role: "Marksman", pickRate: 72, banRate: 30, winRate: 55, totalPicked: 13, totalBanned: 5 },
  { name: "Valentina", game: "Mobile Legends", role: "Mage", pickRate: 60, banRate: 50, winRate: 52, totalPicked: 11, totalBanned: 9 },
  { name: "Khufra", game: "Mobile Legends", role: "Tank", pickRate: 85, banRate: 10, winRate: 60, totalPicked: 15, totalBanned: 2 },
  { name: "Mathilda", game: "Mobile Legends", role: "Support", pickRate: 55, banRate: 15, winRate: 48, totalPicked: 10, totalBanned: 3 },
  { name: "Esmeralda", game: "Mobile Legends", role: "Mage/Tank", pickRate: 40, banRate: 70, winRate: 64, totalPicked: 7, totalBanned: 13 },
  { name: "Lancelot", game: "Mobile Legends", role: "Assassin", pickRate: 65, banRate: 45, winRate: 50, totalPicked: 12, totalBanned: 8 },

  // Valorant Agents
  { name: "Jett", game: "Valorant", role: "Duelist", pickRate: 82, banRate: 0, winRate: 54, totalPicked: 15, totalBanned: 0 },
  { name: "Omen", game: "Valorant", role: "Controller", pickRate: 70, banRate: 0, winRate: 50, totalPicked: 13, totalBanned: 0 },
  { name: "Sova", game: "Valorant", role: "Initiator", pickRate: 68, banRate: 0, winRate: 56, totalPicked: 12, totalBanned: 0 },
  { name: "Killjoy", game: "Valorant", role: "Sentinel", pickRate: 75, banRate: 0, winRate: 58, totalPicked: 14, totalBanned: 0 },
  { name: "Reyna", game: "Valorant", role: "Duelist", pickRate: 60, banRate: 0, winRate: 48, totalPicked: 11, totalBanned: 0 },
  { name: "Sage", game: "Valorant", role: "Sentinel", pickRate: 55, banRate: 0, winRate: 52, totalPicked: 10, totalBanned: 0 },
  { name: "Raze", game: "Valorant", role: "Duelist", pickRate: 50, banRate: 0, winRate: 55, totalPicked: 9, totalBanned: 0 },
  { name: "Viper", game: "Valorant", role: "Controller", pickRate: 45, banRate: 0, winRate: 60, totalPicked: 8, totalBanned: 0 },
];

// ==================== Player Stats ====================

export type PlayerStat = {
  playerId: string;
  game: "Mobile Legends" | "Free Fire" | "Valorant";
  kills: number;
  deaths: number;
  assists: number;
  mvpCount: number;
  matchesPlayed: number;
  // MLBB specific
  heroPicks?: string[];
  // FF specific
  booyahCount?: number;
  damageDealt?: number;
  // Valorant specific
  headshots?: number;
  firstBloods?: number;
  clutches?: number;
};

export const PLAYER_STATS: PlayerStat[] = [
  // MLBB SMP Players
  { playerId: "p-003", game: "Mobile Legends", kills: 24, deaths: 8, assists: 18, mvpCount: 3, matchesPlayed: 4, heroPicks: ["Valentina", "Lunox"] },
  { playerId: "p-005", game: "Mobile Legends", kills: 30, deaths: 10, assists: 12, mvpCount: 2, matchesPlayed: 4, heroPicks: ["Ling", "Fanny"] },
  { playerId: "p-001", game: "Mobile Legends", kills: 20, deaths: 6, assists: 8, mvpCount: 1, matchesPlayed: 4, heroPicks: ["Beatrix", "Moskov"] },
  { playerId: "p-008", game: "Mobile Legends", kills: 18, deaths: 12, assists: 20, mvpCount: 1, matchesPlayed: 4, heroPicks: ["Kagura", "Valentina"] },
  { playerId: "p-010", game: "Mobile Legends", kills: 22, deaths: 14, assists: 10, mvpCount: 1, matchesPlayed: 4, heroPicks: ["Lancelot", "Hayabusa"] },

  // MLBB SMA Players
  { playerId: "p-025", game: "Mobile Legends", kills: 35, deaths: 5, assists: 20, mvpCount: 4, matchesPlayed: 4, heroPicks: ["Ling", "Lancelot", "Fanny"] },
  { playerId: "p-021", game: "Mobile Legends", kills: 28, deaths: 8, assists: 10, mvpCount: 2, matchesPlayed: 4, heroPicks: ["Beatrix", "Karrie"] },
  { playerId: "p-028", game: "Mobile Legends", kills: 15, deaths: 11, assists: 22, mvpCount: 1, matchesPlayed: 4, heroPicks: ["Kagura", "Lunox"] },

  // FF Players
  { playerId: "p-041", game: "Free Fire", kills: 45, deaths: 15, assists: 10, mvpCount: 3, matchesPlayed: 5, booyahCount: 3, damageDealt: 12500 },
  { playerId: "p-043", game: "Free Fire", kills: 38, deaths: 18, assists: 12, mvpCount: 2, matchesPlayed: 5, booyahCount: 2, damageDealt: 10800 },
  { playerId: "p-045", game: "Free Fire", kills: 35, deaths: 20, assists: 8, mvpCount: 2, matchesPlayed: 5, booyahCount: 2, damageDealt: 9500 },
  { playerId: "p-047", game: "Free Fire", kills: 30, deaths: 16, assists: 14, mvpCount: 1, matchesPlayed: 5, booyahCount: 1, damageDealt: 8900 },

  // Valorant Players
  { playerId: "p-057", game: "Valorant", kills: 52, deaths: 22, assists: 15, mvpCount: 4, matchesPlayed: 4, headshots: 28, firstBloods: 12, clutches: 3 },
  { playerId: "p-062", game: "Valorant", kills: 45, deaths: 25, assists: 18, mvpCount: 2, matchesPlayed: 4, headshots: 22, firstBloods: 8, clutches: 2 },
  { playerId: "p-059", game: "Valorant", kills: 30, deaths: 18, assists: 25, mvpCount: 1, matchesPlayed: 4, headshots: 15, firstBloods: 5, clutches: 1 },
  { playerId: "p-060", game: "Valorant", kills: 28, deaths: 20, assists: 22, mvpCount: 1, matchesPlayed: 4, headshots: 12, firstBloods: 3, clutches: 2 },
];

// ==================== Team Stats ====================

export type TeamStat = {
  teamId: string;
  game: "Mobile Legends" | "Free Fire" | "Valorant";
  wins: number;
  losses: number;
  totalKills: number;
  totalDeaths: number;
  winStreak: number;
};

export const TEAM_STATS: TeamStat[] = [
  { teamId: "mlbb-smp-001", game: "Mobile Legends", wins: 3, losses: 0, totalKills: 74, totalDeaths: 24, winStreak: 3 },
  { teamId: "mlbb-smp-002", game: "Mobile Legends", wins: 1, losses: 2, totalKills: 40, totalDeaths: 46, winStreak: 0 },
  { teamId: "mlbb-sma-001", game: "Mobile Legends", wins: 3, losses: 0, totalKills: 78, totalDeaths: 18, winStreak: 3 },
  { teamId: "mlbb-sma-002", game: "Mobile Legends", wins: 1, losses: 2, totalKills: 43, totalDeaths: 50, winStreak: 0 },
  { teamId: "ff-001", game: "Free Fire", wins: 3, losses: 1, totalKills: 83, totalDeaths: 33, winStreak: 2 },
  { teamId: "ff-002", game: "Free Fire", wins: 2, losses: 2, totalKills: 65, totalDeaths: 48, winStreak: 0 },
  { teamId: "valo-001", game: "Valorant", wins: 3, losses: 0, totalKills: 110, totalDeaths: 60, winStreak: 3 },
  { teamId: "valo-002", game: "Valorant", wins: 2, losses: 1, totalKills: 88, totalDeaths: 68, winStreak: 1 },
];

// ==================== MVP Standings ====================

export type MvpEntry = {
  playerId: string;
  game: "Mobile Legends" | "Free Fire" | "Valorant";
  mvpCount: number;
  totalPoints: number; // calculated from performance
};

export const MVP_STANDINGS: MvpEntry[] = [
  // MLBB
  { playerId: "p-025", game: "Mobile Legends", mvpCount: 4, totalPoints: 28 },
  { playerId: "p-003", game: "Mobile Legends", mvpCount: 3, totalPoints: 22 },
  { playerId: "p-005", game: "Mobile Legends", mvpCount: 2, totalPoints: 18 },
  { playerId: "p-021", game: "Mobile Legends", mvpCount: 2, totalPoints: 16 },
  { playerId: "p-008", game: "Mobile Legends", mvpCount: 1, totalPoints: 12 },

  // FF
  { playerId: "p-041", game: "Free Fire", mvpCount: 3, totalPoints: 25 },
  { playerId: "p-043", game: "Free Fire", mvpCount: 2, totalPoints: 18 },
  { playerId: "p-045", game: "Free Fire", mvpCount: 2, totalPoints: 16 },
  { playerId: "p-047", game: "Free Fire", mvpCount: 1, totalPoints: 10 },

  // VALORANT
  { playerId: "p-057", game: "Valorant", mvpCount: 4, totalPoints: 32 },
  { playerId: "p-062", game: "Valorant", mvpCount: 2, totalPoints: 20 },
  { playerId: "p-059", game: "Valorant", mvpCount: 1, totalPoints: 14 },
  { playerId: "p-060", game: "Valorant", mvpCount: 1, totalPoints: 12 },
];

// ==================== Helpers ====================

export function getHeroStatsByGame(game: HeroStat["game"]) {
  return HERO_STATS.filter((h) => h.game === game);
}

export function getPlayerStatsByGame(game: PlayerStat["game"]) {
  return PLAYER_STATS.filter((p) => p.game === game);
}

export function getTeamStatsByGame(game: TeamStat["game"]) {
  return TEAM_STATS.filter((t) => t.game === game);
}

export function getMvpByGame(game: MvpEntry["game"]) {
  return MVP_STANDINGS.filter((m) => m.game === game).sort((a, b) => b.totalPoints - a.totalPoints);
}
