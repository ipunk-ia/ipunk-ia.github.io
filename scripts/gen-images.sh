#!/usr/bin/env bash
# Pre-generates the WebP widths that src/lib/image-loader.ts points at.
# Keep WIDTHS in sync with images.deviceSizes + images.imageSizes in next.config.ts.
set -euo pipefail

WIDTHS=(160 320 640 768 1080 1600)
ROOT="$(cd "$(dirname "$0")/.." && pwd)/public/work"

find "$ROOT" -type f \( -name '*.jpg' -o -name '*.png' \) -not -name '*-[0-9]*.webp' | while read -r src; do
  base="${src%.*}"
  orig_w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$src")

  for w in "${WIDTHS[@]}"; do
    out="${base}-${w}.webp"
    [ -f "$out" ] && continue
    # Never upscale: a small source keeps its own width under the larger name.
    target=$w
    if [ "$orig_w" -lt "$w" ]; then target=$orig_w; fi
    cwebp -quiet -q 72 -resize "$target" 0 "$src" -o "$out"
  done
done
echo "generated"
