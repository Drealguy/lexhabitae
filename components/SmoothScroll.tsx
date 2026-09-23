"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// GSAP ScrollSmoother around the page content. Fixed elements (the navbar and
// its mobile menu) must stay outside this wrapper, since the content is moved
// with transforms.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
  });

  // New page: jump to the top and re-measure the content height.
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    smoother?.scrollTop(0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
