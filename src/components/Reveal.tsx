"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds before the element animates in. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

const OBSERVER_THRESHOLD = 0.12;
const OBSERVER_MARGIN = "0px 0px -8% 0px";

/**
 * Fades and lifts its children into view once, the first time they are scrolled to.
 * Falls back to visible immediately when IntersectionObserver is unavailable.
 */
export function Reveal({ children, delay = 0, className = "", as }: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.disconnect();
          }
        }
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: OBSERVER_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isIn ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
