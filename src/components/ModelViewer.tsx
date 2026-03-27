"use client";

import { useRef, useEffect, useState } from "react";

export default function ModelViewer({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markLoaded = () => setLoaded(true);
    video.addEventListener("loadeddata", markLoaded);
    video.addEventListener("playing", markLoaded);

    const fallback = setTimeout(markLoaded, 2000);

    video.play().catch(markLoaded);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener("loadeddata", markLoaded);
      video.removeEventListener("playing", markLoaded);
    };
  }, []);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0C0A08] z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-accent border-t-transparent rounded-full animate-spin" />
            <p className="text-muted/50 text-xs tracking-[0.3em] uppercase font-display">
              Ładowanie wizualizacji...
            </p>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/30 via-transparent to-[#0C0A08]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0C0A08] to-transparent" />
      </div>
    </div>
  );
}
