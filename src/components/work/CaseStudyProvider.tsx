"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { allWork } from "@/data/work";
import { ProjectModal } from "@/components/work/ProjectModal";

type CaseStudyContextValue = {
  open: (slug: string) => void;
};

const CaseStudyContext = createContext<CaseStudyContextValue | null>(null);

/**
 * Holds the single case study dialog so any section on the page can open it.
 */
export function CaseStudyProvider({ children }: { children: ReactNode }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const open = useCallback((slug: string) => setOpenSlug(slug), []);
  const close = useCallback(() => setOpenSlug(null), []);

  const value = useMemo(() => ({ open }), [open]);
  const active = openSlug ? (allWork.find((p) => p.slug === openSlug) ?? null) : null;

  return (
    <CaseStudyContext.Provider value={value}>
      {children}
      <ProjectModal project={active} onClose={close} />
    </CaseStudyContext.Provider>
  );
}

export function useCaseStudy() {
  const ctx = useContext(CaseStudyContext);
  if (!ctx) {
    throw new Error("useCaseStudy must be used inside a CaseStudyProvider");
  }
  return ctx;
}
