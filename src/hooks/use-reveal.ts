import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const idx = el.dataset.revealIndex;
            if (idx) {
              const delay = Math.min(parseInt(idx, 10), 12) * 70;
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useScrollSpy(ids: string[], offset = 120) {
  // returns the id of the section currently in view
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const React = require("react");
  return React;
}