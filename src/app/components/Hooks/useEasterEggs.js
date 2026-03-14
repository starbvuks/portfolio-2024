"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const SECRET_SEQUENCE = "s3crets";
const KONAMI_CODE = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

export function useEasterEggs() {
  const router = useRouter();
  const [showMatrix, setShowMatrix] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const typedRef = useRef("");
  const konamiRef = useRef("");
  const matrixTimeoutRef = useRef(null);

  const triggerMatrix = useCallback(() => {
    setShowEgg(true);
    setShowMatrix(true);
    setTimeout(() => setShowEgg(false), 3000);
    if (matrixTimeoutRef.current) clearTimeout(matrixTimeoutRef.current);
    matrixTimeoutRef.current = setTimeout(() => setShowMatrix(false), 10000);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      // Skip if command palette or input is focused
      if (e.metaKey || e.ctrlKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const { key } = e;

      // s3crets
      const newTyped = typedRef.current + key;
      if (newTyped === SECRET_SEQUENCE) {
        router.push("/s3crets");
        typedRef.current = "";
      } else if (SECRET_SEQUENCE.startsWith(newTyped)) {
        typedRef.current = newTyped;
      } else {
        typedRef.current = SECRET_SEQUENCE.startsWith(key) ? key : "";
      }

      // konami
      const newKonami = konamiRef.current + e.key;
      if (KONAMI_CODE.includes(newKonami) && newKonami.length <= KONAMI_CODE.length) {
        konamiRef.current = newKonami;
        if (newKonami === KONAMI_CODE) {
          triggerMatrix();
          konamiRef.current = "";
        }
      } else {
        konamiRef.current = "";
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (matrixTimeoutRef.current) clearTimeout(matrixTimeoutRef.current);
    };
  }, [router, triggerMatrix]);

  return { showMatrix, showEgg, triggerMatrix };
}
