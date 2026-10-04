"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

/*
 * Motion Method rule 4: a ratio threshold fails on blocks taller than the viewport (the archive on a
 * phone never shows 15% of itself at once). Trigger on the top edge crossing 85% of the viewport instead.
 */
const OBSERVER_MARGIN = "0px 0px -15% 0px";

/**
 * Adds `is-in` the first time the block scrolls into view. The motion itself lives in CSS
 * (`.rise`, `.fade-in`), so content is never hidden from no-JS or reduced-motion visitors.
 */
export function Reveal({ children, className = "", as, id }: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsIn(true);
        observer.disconnect();
      },
      { threshold: 0, rootMargin: OBSERVER_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`${isIn ? "is-in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

/** One masked line that rises into place when its Reveal parent comes into view. */
export function Rise({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="rise">
      <span style={{ "--rise-delay": `${delay}ms` } as React.CSSProperties}>{children}</span>
    </span>
  );
}
