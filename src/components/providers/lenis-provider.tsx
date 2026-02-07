"use client";

import { ReactLenis } from "lenis/react";

const lenisOptions = {
  lerp: 0.08,
  smoothWheel: true,
};

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
