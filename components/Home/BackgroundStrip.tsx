"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BG_IMAGES = [
  "/img/offer-software.png",
  "/img/taskflow-screenshot.jpg",
  "/img/offer-systems.png",
  "/img/notyourmoney-screenshot.jpg",
  "/img/offer-mobile.png",
  "/img/mangalens-screenshot-1.jpg",
];

export default function BackgroundStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const SPEED = 0.3;
    let prev = performance.now();

    const tick = (now: number) => {
      const dt = now - prev;
      prev = now;

      posRef.current += SPEED * (dt / 16.67);

      const halfHeight = strip.scrollHeight / 2;
      if (posRef.current >= halfHeight) posRef.current = 0;

      strip.style.transform = `translateY(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div ref={stripRef} className="grid gap-4 md:gap-10 will-change-transform">
        {([0, 1] as const).map((set) => (
          <div
            key={set}
            className="grid h-screen grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 grid-rows-6 md:grid-rows-3"
          >
            {BG_IMAGES.map((src, i) => (
              <div key={`${set}-${i}`} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="50vw"
                  className="object-cover"
                  unoptimized
                  priority={set === 0 && i < 2}
                  loading={set === 0 && i < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
