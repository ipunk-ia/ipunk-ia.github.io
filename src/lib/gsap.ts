import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

/*
 * 2D transforms only. With force3D GSAP writes translate3d/matrix3d, the browser rasterises the element
 * once into a GPU layer and then stretches those pixels: the hero name scaled up 10x and the deck cards
 * scaled up from 0.2 came out soft, worst on phones. 2D transforms are repainted at their real size
 * every frame, so type and images stay sharp for the whole animation.
 */
gsap.config({ force3D: false });

export { gsap, CustomEase };
