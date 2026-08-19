/**
 * Static-export image loader.
 *
 * GitHub Pages has no Next image optimiser, so the WebP widths are generated
 * ahead of time by scripts/gen-images.sh and simply addressed here.
 */

/** Must match WIDTHS in scripts/gen-images.sh. */
const AVAILABLE_WIDTHS = [160, 320, 640, 768, 1080, 1600] as const;

type LoaderArgs = { src: string; width: number };

export default function imageLoader({ src, width }: LoaderArgs): string {
  const generated = AVAILABLE_WIDTHS.find((w) => w >= width) ?? AVAILABLE_WIDTHS.at(-1)!;
  const base = src.replace(/\.(jpg|jpeg|png)$/i, "");

  // Anything outside the pre-generated set is served untouched.
  if (base === src) return src;

  return `${base}-${generated}.webp`;
}
