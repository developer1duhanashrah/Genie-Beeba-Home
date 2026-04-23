
"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";


export default function MediaCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          setPlaying(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10 overflow-hidden px-4 pb-10 pt-10 sm:pb-24 sm:pt-14">
      <div aria-hidden="true" className="absolute inset-0 " />
      <div className="relative">
        <div className="group relative " ref={containerRef}>
          {/* Ellipse glow — wide outer bloom */}
          <div
            aria-hidden="true"
            className="ellipse-glow pointer-events-none absolute -top-8 left-1/2 h-[72px] w-[90%] -translate-x-1/2 rounded-[50%] bg-[#00C19C]/20"
            style={{ filter: "blur(22px)" }}
          />
          {/* Ellipse glow — tight inner halo */}
          <div
            aria-hidden="true"
            className="ellipse-glow pointer-events-none absolute -top-3 left-1/2 h-[28px] w-[62%] -translate-x-1/2 rounded-[50%] bg-[#00C19C]/50"
            style={{ filter: "blur(8px)", animationDelay: "0.4s" }}
          />
          {/* Ellipse sharp arc line */}
          <div
            aria-hidden="true"
            className="ellipse-line pointer-events-none absolute top-[9px] left-1/2 h-[2px] w-[72%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#00C19C] to-transparent"
          />

          {/* Device-frame card */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#07100f] p-[8px] ring-1 ring-inset ring-white/[0.32] shadow-[0_-20px_46px_rgba(0,193,156,0.36)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[20px] border border-white/[0.22] bg-gradient-to-r from-[#cabfa8] via-[#3f4d4f] to-[#576a67]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.48)_100%)]"
              />

              {/* Video element */}
              <video
                ref={videoRef}
                src="/Vid-Genie-Beeba.mp4"
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-10"
                style={{ display: playing ? 'block' : 'none' }}
                controls
                poster="/images/video-img.png"
                muted
                playsInline
              />
              {/* Poster image if not playing */}
              {!playing && (
                <Image
                  src="/images/video-img.png"
                  height={600}
                  width={600}
                  alt="Video poster"
                  className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-10"
                />
              )}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}