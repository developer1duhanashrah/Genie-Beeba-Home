"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

/* ── Animations only ─────────────────────────────────────────────────────────
   Contains ONLY: @keyframes, animation class bindings, and :hover pseudo-state
   with complex inset box-shadows. Everything else uses Tailwind.
────────────────────────────────────────────────────────────────────────────── */
const animStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  @keyframes smfTwinkle {
    0%,100% { opacity:0.1; transform:scale(0.5); }
    50%     { opacity:1;   transform:scale(1.5); }
  }
  .smf-spark-anim { animation: smfTwinkle 2.4s ease-in-out infinite; }

  @keyframes beebaFloat {
    0%,100% { transform: translateY(0px);   }
    50%     { transform: translateY(-14px); }
  }
  .smf-beeba-float { animation: beebaFloat 4s ease-in-out infinite; }

  /* :hover with complex inset shadow — cannot be expressed in Tailwind */
  .smf-ico {
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
                box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .smf-ico:hover {
    transform: scale(1.18);
    border-color: rgba(0,200,126,0.45);
    box-shadow:
      0 0 0 3px rgba(0,200,126,0.15),
      0 8px 32px rgba(0,200,126,0.35),
      inset 0 1px 0 rgba(255,255,255,0.15);
  }
`;

/* ── Animated dot along ellipse ── */
function EllipseDot({ cx, cy, rx, ry, duration, offset }: {
  cx: number; cy: number; rx: number; ry: number; duration: number; offset: number;
}) {
  const [t, setT] = useState(offset);
  useEffect(() => {
    let start: number | null = null, raf: number;
    const step = (ts: number) => {
      if (!start) start = ts - offset * duration * 1000;
      setT(((ts - start) / 1000 / duration) % 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const angle = t * 2 * Math.PI;
  const x = cx + rx * Math.cos(angle);
  const y = cy + ry * Math.sin(angle);
  return (
    <div
      className="absolute w-2 h-2 rounded-full bg-[#00c87e] pointer-events-none z-[7] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#00c87e,0_0_18px_rgba(0,200,126,0.5)]"
      style={{ left: x, top: y }}
    />
  );
}

const W = 820, H = 460;
const cy = H / 2;

const ellipses = [
  { ecx: 130,     ecy: cy, rx: 55, ry: 160, duration: 4.0, offset: 0.0 },
  { ecx: 80,      ecy: cy, rx: 55, ry: 200, duration: 5.5, offset: 0.5 },
  { ecx: W - 130, ecy: cy, rx: 55, ry: 160, duration: 4.0, offset: 0.3 },
  { ecx: W - 80,  ecy: cy, rx: 55, ry: 200, duration: 5.5, offset: 0.7 },
];

const nodes: { id: string; x: number; y: number; img: string }[] = [];

const sparkles = [
  { w: 5, top: "12%", left: "18%", delay: "0s"   },
  { w: 4, top: "8%",  left: "58%", delay: "0.6s" },
  { w: 6, top: "72%", left: "14%", delay: "1.1s" },
  { w: 4, top: "78%", left: "74%", delay: "1.5s" },
  { w: 3, top: "30%", left: "6%",  delay: "0.9s" },
  { w: 5, top: "20%", left: "88%", delay: "0.3s" },
  { w: 3, top: "60%", left: "90%", delay: "1.4s" },
];

const SocialMediaIcons = () => (
  <>
    <style>{animStyles}</style>

    <section className="
      min-h-screen flex flex-col items-center justify-center
      relative overflow-hidden py-8 lg:py-16 px-4 sm:px-6 lg:px-8 bg-black
      [font-family:'Inter',sans-serif]
    ">
       <div className="
        inline-flex items-center gap-2 rounded-full
        px-[1.4rem] py-2 text-[0.82rem] text-white/65
        relative z-[2] mt-6
        bg-white/[0.06] border border-white/[0.15]
        mb-5
      ">
        <span className="w-[7px] h-[7px] bg-[#00c87e] rounded-full shadow-[0_0_8px_#00c87e]" />
        Your Autonomous Digital Operators
      </div>
      {/* Sparkles — size/position/delay are dynamic, must stay inline */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="smf-spark-anim absolute rounded-full bg-[#00c87e] pointer-events-none shadow-[0_0_6px_#00c87e,0_0_14px_rgba(0,200,126,0.5)]"
          style={{ width: s.w, height: s.w, top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      {/* Heading */}
      <div className="text-center relative z-[2] mb-8">
        <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal text-white leading-[1.25] mb-[0.7rem] tracking-[-0.02em]">
          Social media icons<br />connected in flow
        </h2>
        <p className="text-[clamp(0.78rem,1.4vw,0.92rem)] text-white/45 max-w-[480px] mx-auto leading-[1.65]">
          Running a business already demands your attention. Beeba turns social
          media into a system that works in the background, so content no longer
          competes with your day.
        </p>
      </div>

      {/* Stage */}
      <div className="
        relative flex items-center justify-center z-[2]
        w-[820px] h-[460px]
        max-[1000px]:w-[620px] max-[1000px]:h-[360px]
        max-[680px]:w-[340px] max-[680px]:h-[480px]
      ">

        {/* Left orbit — wrapper is positioned so next/image fill works */}
        <div className="absolute -left-[60px] max-[1000px]:-left-[40px] max-[680px]:-left-[20px] top-1/2 -translate-y-1/2 h-[220%] w-[48%] pointer-events-none z-[1]">
          <Image
            src="/images/rightOrbit (2).png"
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Right orbit */}
        <div className="absolute -right-[60px] max-[1000px]:-right-[40px] max-[680px]:-right-[20px] top-1/2 -translate-y-1/2 h-[220%] w-[48%] pointer-events-none z-[1]">
          <Image
            src="/images/rightOrbit.png"
            alt=""
            fill
            className="object-contain object-right"
          />
        </div>

        {/* Animated dots */}
        {ellipses.map((e, i) => (
          <EllipseDot
            key={i}
            cx={e.ecx} cy={e.ecy}
            rx={e.rx}  ry={e.ry}
            duration={e.duration} offset={e.offset}
          />
        ))}

        {/* Beeba GIF — unoptimized preserves animation */}
        <Image
          src="/images/BebaSocailIcon.gif"
          alt="Beeba"
          width={420}
          height={500}
          unoptimized
          className="
            smf-beeba-float relative z-[5] w-[420px] max-[1000px]:w-[320px] max-[680px]:w-[140px] object-contain
            [filter:drop-shadow(0_20px_50px_rgba(0,0,0,0.7))_drop-shadow(0_0_30px_rgba(0,200,126,0.15))]
          "
        />

        {/* Icon nodes */}
        {nodes.map(n => (
          <div
            key={n.id}
            className="absolute flex items-center justify-center z-[6] -translate-x-1/2 -translate-y-1/2"
            style={{ left: n.x, top: n.y }}
          >
            <div className="smf-ico w-[62px] h-[62px] rounded-full flex items-center justify-center cursor-pointer max-[680px]:w-12 max-[680px]:h-12">
              <Image src={n.img} alt={n.id} width={60} height={60} className="object-contain" />
            </div>
          </div>
        ))}

      </div>
    </section>
  </>
);

export default SocialMediaIcons;