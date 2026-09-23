"use client";

import { useEffect, useRef } from "react";

// Muted, looping background video. Calls play() after mount as a fallback for
// browsers that skip the autoplay attribute.
export default function BackgroundVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 size-full object-cover"
    />
  );
}
