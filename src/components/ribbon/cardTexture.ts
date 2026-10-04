import * as THREE from "three";

/* Adapted from ~/Downloads/jesper-landberg ribbon/cardTexture.ts: image only. Labels live in the DOM
 * under the ribbon, because website covers already carry their own headline (a canvas label doubled it). */

/* Big enough for a 2:1 card at 2x on a desktop; mipmaps take care of the cards drawn small. */
const MAX_TEX_W = 2048;
const MAX_TEX_H = 1280;

export interface CardTexture {
  texture: THREE.CanvasTexture;
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const imgRatio = img.width / img.height;
  if (w / h > imgRatio) {
    const dh = w / imgRatio;
    ctx.drawImage(img, 0, (h - dh) / 2, w, dh);
  } else {
    const dw = h * imgRatio;
    ctx.drawImage(img, (w - dw) / 2, 0, dw, h);
  }
}

/** Canvas-backed card texture. `onUpdate` fires once the image lands so the caller can render on demand. */
export function createCardTexture(
  src: string,
  width: number,
  height: number,
  anisotropy: number,
  onUpdate: () => void,
): CardTexture {
  const canvas = document.createElement("canvas");
  const fit = Math.min(1, MAX_TEX_W / width, MAX_TEX_H / height);
  canvas.width = Math.round(width * fit);
  canvas.height = Math.round(height * fit);
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Mipmaps + anisotropy: a curved card drawn small or at a slant stays clean instead of shimmering.
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = anisotropy;

  const img = new Image();
  img.decoding = "async";
  img.onload = () => {
    drawCover(ctx, img, canvas.width, canvas.height);
    texture.needsUpdate = true;
    onUpdate();
  };
  // On error the dark placeholder card stays; a missing image must never break the ribbon.
  img.src = src;

  return { texture };
}
