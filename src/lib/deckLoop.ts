import { gsap } from "@/lib/gsap";

/*
 * Hero deck loop, after avecanni.studio's hero film but built live, with a shuffle of our own:
 * shuffle x3 -> deck collapses -> wordmark rises huge -> shrinks to the centre -> deck grows -> again.
 */

/** Slot offsets in frame widths: the front card sits left, the rest step back to the right. */
const SLOT_Y = [0, -0.05, 0.04, -0.07, 0.03, -0.045, 0.06];
export const STEP_DESKTOP = 0.17;
const STEP_MOBILE = 0.09;
const SLOT_SHRINK = 0.04;
const MOBILE_MAX = 767;
const SHUFFLES_PER_LOOP = 3;
const HOLD_S = 0.9;
const MARK_PAD_PX = 28;
const MARK_PAD_MOBILE_PX = 96;

export type Slot = { x: number; y: number; scale: number };

/** Slot k for n cards, in frame widths (unit) so the server render can use it with CSS calc(). */
export function slotUnits(k: number, n: number, step = STEP_DESKTOP): Slot {
  return { x: k * step - ((n - 1) * step) / 2, y: SLOT_Y[k % SLOT_Y.length], scale: 1 - k * SLOT_SHRINK };
}

type Parts = { section: HTMLElement; cards: HTMLElement[]; mark: HTMLElement; chars: HTMLElement[] };

export function createDeckLoop({ section, cards, mark, chars }: Parts) {
  let order = [...cards];
  let alive = true;
  let visible = true;
  let resume: (() => void) | null = null;
  let current: gsap.core.Animation | null = null;

  // A phase may start while the intro is still settling a card; the newer tween wins.
  const timeline = (vars: gsap.TimelineVars = {}) => gsap.timeline({ ...vars, defaults: { overwrite: "auto" } });
  const isMobile = () => window.innerWidth <= MOBILE_MAX;
  const slot = (k: number) => {
    const w = cards[0].offsetWidth;
    const s = slotUnits(k, order.length, isMobile() ? STEP_MOBILE : STEP_DESKTOP);
    return { xPercent: -50, yPercent: -50, x: s.x * w, y: s.y * w, scale: s.scale };
  };
  const stackZ = () => order.forEach((card, k) => gsap.set(card, { zIndex: order.length - k }));

  /*
   * The name grows and shrinks through its real font-size, never scale(): scaled text is a stretched
   * bitmap and shimmers while the scale changes; text laid out at its true size every frame stays as
   * sharp as any other type on the page. The mark is centred by the CSS `translate` property.
   */
  const markSizes = () => {
    gsap.set(mark, { clearProps: "fontSize" });
    const small = parseFloat(getComputedStyle(mark).fontSize);
    const pad = isMobile() ? MARK_PAD_MOBILE_PX : MARK_PAD_PX;
    const giant = (small * (section.clientWidth - pad)) / mark.offsetWidth;
    const y = section.clientHeight / 2 - (mark.offsetHeight * giant) / small / 2 - pad;
    return { small, giant, y };
  };

  const play = (tl: gsap.core.Timeline) =>
    new Promise<void>((done) => {
      current = tl;
      tl.eventCallback("onComplete", () => done());
    });
  const whenVisible = () => (visible ? Promise.resolve() : new Promise<void>((r) => (resume = r)));

  // The loop pauses between phases while the hero is off-screen.
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && resume) {
      const r = resume;
      resume = null;
      r();
    }
  });
  observer.observe(section);

  /** Front card slides out, tucks in at the back, everyone else moves up one slot. */
  function shuffle() {
    const front = order[0];
    const outX = slot(0).x - cards[0].offsetWidth * 0.75;
    order = [...order.slice(1), front];
    const tl = timeline({ delay: HOLD_S });
    tl.to(front, { x: outX, rotation: -7, duration: 0.45, ease: "power2.in" });
    tl.add(stackZ);
    order.forEach((card, k) =>
      tl.to(card, { ...slot(k), rotation: 0, duration: 0.8, ease: "power3.inOut" }, k === 0 ? ">" : "<"),
    );
    return play(tl);
  }

  function collapse() {
    const tl = timeline({ delay: HOLD_S });
    tl.to([...order].reverse(), { x: 0, y: 0, scale: 0.2, opacity: 0, duration: 0.7, ease: "power3.in", stagger: 0.05 });
    tl.to(chars, { yPercent: 110, duration: 0.45, ease: "power2.in", stagger: 0.02 }, "-=0.2");
    return play(tl);
  }

  function rise() {
    const { small, giant, y } = markSizes();
    const tl = timeline();
    tl.set(mark, { fontSize: giant, y });
    tl.to(chars, { yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.035 });
    tl.to(mark, { fontSize: small, y: 0, duration: 1.0, ease: "power3.inOut" }, "+=0.5");
    tl.set(mark, { clearProps: "fontSize" }); // hand the size back to the CSS clamp()
    return play(tl);
  }

  function grow() {
    const tl = timeline();
    tl.add(stackZ);
    order.forEach((card, k) =>
      tl.to(card, { ...slot(k), opacity: 1, duration: 1.1, ease: "expo.out" }, k === 0 ? 0 : "<+0.07"),
    );
    return play(tl);
  }

  async function run() {
    while (alive) {
      for (let i = 0; i < SHUFFLES_PER_LOOP && alive; i += 1) {
        await whenVisible();
        await shuffle();
      }
      for (const phase of [collapse, rise, grow]) {
        if (!alive) return;
        await whenVisible();
        await phase();
      }
    }
  }

  /** Places everything at rest: deck on its slots, small wordmark readable. */
  function settle() {
    stackZ();
    order.forEach((card, k) => gsap.set(card, { ...slot(k), opacity: 1, rotation: 0 }));
    gsap.set(mark, { y: 0, clearProps: "fontSize" });
    gsap.set(chars, { yPercent: 0 });
  }

  return {
    settle,
    /** Intro under the welcome curtain: the deck (minus the landing frame) and the wordmark come in. */
    intro(landing: HTMLElement) {
      settle();
      const rest = order.filter((c) => c !== landing);
      gsap.set(rest, { x: 0, y: 0, scale: 0.2, opacity: 0 });
      gsap.set(chars, { yPercent: 110 });
      const tl = timeline();
      rest.forEach((card, i) =>
        tl.to(card, { ...slot(order.indexOf(card)), opacity: 1, duration: 1.1, ease: "expo.out" }, i * 0.07),
      );
      tl.to(chars, { yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.035 }, 0.2);
      current = tl;
    },
    start() {
      void run();
    },
    stop() {
      alive = false;
      current?.kill();
      observer.disconnect();
    },
  };
}
