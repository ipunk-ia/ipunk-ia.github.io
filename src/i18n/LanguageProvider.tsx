"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { COPY, LANGS, type Copy, type Lang } from "@/i18n/dict";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG: Lang = "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  copy: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  /* Restore the visitor's last choice without blocking first paint. */
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Private mode or storage disabled: the choice simply does not persist. */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, copy: COPY[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside a LanguageProvider");
  return ctx;
}

export function useCopy(): Copy {
  return useLanguage().copy;
}

export function useLang() {
  const { lang, setLang } = useLanguage();
  return { lang, setLang, options: LANGS };
}
