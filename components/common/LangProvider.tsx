"use client";

import { useState, useCallback, type ReactNode } from "react";
import { LangContext, type Lang } from "@/lib/i18n";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
