import { useEffect, useRef } from "react";

export function useIntersection(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          callback(entry);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
}

export function useRevealOnScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-hidden");
    const staggerItems = document.querySelectorAll(".stagger-item");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = Number.parseInt(el.dataset.index ?? "0");
            setTimeout(() => {
              el.classList.add("visible");
            }, index * 80);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of sections) {
      sectionObserver.observe(el);
    }
    for (const el of staggerItems) {
      staggerObserver.observe(el);
    }

    return () => {
      sectionObserver.disconnect();
      staggerObserver.disconnect();
    };
  });
}
