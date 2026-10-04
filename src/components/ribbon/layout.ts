export const MOBILE_BREAKPOINT = 650;

const DESKTOP_GAP_PX = 16;
const MOBILE_GAP_PX = 12;
const MAX_CARD_HEIGHT_PX = 550;
const CARD_HEIGHT_VH = 0.435;
const MOBILE_CARD_HEIGHT_VH = 0.52;
/** On phones a card is at most this share of the screen wide; wider covers are cropped by the shader (uvCover). */
const MOBILE_MAX_CARD_VW = 0.86;
/** Overscroll allowed past the left edge before the rubber band pulls back. */
export const BOUNDS_MAX = 20;

export interface Sized {
  width: number;
  height: number;
}

export interface CardLayout {
  left: number;
  width: number;
  height: number;
}

export interface TrackLayout {
  cards: CardLayout[];
  /** Most negative scroll offset: the last card ends one edge-padding from the right. */
  minScroll: number;
}

/** Single source of truth for card sizes AND scroll bounds, so the two can never disagree. */
export function layoutCards(items: Sized[], vw: number, vh: number): TrackLayout {
  const isMobile = vw < MOBILE_BREAKPOINT;
  const gap = isMobile ? MOBILE_GAP_PX : DESKTOP_GAP_PX;
  const pad = Math.max(isMobile ? 20 : 40, vw * 0.04);
  const height = Math.min(vh * (isMobile ? MOBILE_CARD_HEIGHT_VH : CARD_HEIGHT_VH), MAX_CARD_HEIGHT_PX);
  const maxWidth = isMobile ? vw * MOBILE_MAX_CARD_VW : Infinity;

  const cards = items.reduce<CardLayout[]>((acc, item) => {
    const prev = acc[acc.length - 1];
    const left = prev ? prev.left + prev.width + gap : pad;
    return [...acc, { left, width: Math.min((height * item.width) / item.height, maxWidth), height }];
  }, []);

  const last = cards[cards.length - 1];
  const trackEnd = last ? last.left + last.width + pad : 0;
  return { cards, minScroll: Math.min(0, vw - trackEnd) };
}
