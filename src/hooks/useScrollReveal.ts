import { useEffect, useRef, useState } from "react";

export function useScrollReveal(itemCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxIndex = -1;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (index > maxIndex) maxIndex = index;
            observer.unobserve(entry.target);
          }
        });
        if (maxIndex >= 0) {
          setVisibleCount((prev) => Math.max(prev, maxIndex + 1));
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    const items = container.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [itemCount]);

  return { containerRef, visibleCount };
}
