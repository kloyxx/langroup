"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

export function HeroMotion({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <m.div
          className="hero-visual"
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {children}
        </m.div>
      </LazyMotion>
    </MotionConfig>
  );
}
