/**
 * Central demo media for the Nigeria Sports MVP.
 * Local Nigerian-coded photography + SVG brand art — no mismatched stock faces.
 */

export const DEMO = {
  hero: "/images/hero-naija.svg",
  stadium: "/images/nigerian_stadium.png",
  athleteMale: "/images/nigerian_athlete_1.png",
  athleteFemale: "/images/nigerian_athlete_2.png",
  coach: "/images/nigerian_coach.png",
  event: "/images/nigerian_sports_event.png",
  media: "/images/nigerian_sports_media.png",
  jersey: "/images/super_eagles_jersey.png",
  equipment: "/images/football_equipment.png",
  nffLogo: "/images/nff_logo.png",
  // Venue / abstract sports scenes
  pitch: "/images/demo/pitch-wide.jpg",
  stadiumNight: "/images/demo/stadium-crowd.jpg",
  football: "/images/demo/football-action.jpg",
  footballField: "/images/demo/football-field.jpg",
  basketball: "/images/demo/basketball-court.jpg",
  volleyball: "/images/demo/volleyball.jpg",
  athletics: "/images/demo/athletics-sprint.jpg",
  ballClose: "/images/demo/african-football-1.jpg",
  crowd: "/images/demo/crowd-stadium.jpg",
  footballKit: "/images/demo/football-kit.jpg",
};

export const AVATARS = {
  chinedu: "/images/avatars/chinedu.svg",
  tunde: "/images/avatars/tunde.svg",
  ngozi: "/images/avatars/ngozi.svg",
  ibrahim: "/images/avatars/ibrahim.svg",
  blessing: "/images/avatars/blessing.svg",
  emmanuel: "/images/avatars/emmanuel.svg",
  sarah: "/images/avatars/sarah.svg",
  kano: "/images/avatars/kano.svg",
};

/** Deterministic warm palette for name-based fallbacks */
export function avatarColor(name = "") {
  const palette = [
    "#048b4e",
    "#0f766e",
    "#166534",
    "#1e3a5f",
    "#7c2d12",
    "#365314",
    "#4a1942",
    "#b45309",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

export function initials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}
