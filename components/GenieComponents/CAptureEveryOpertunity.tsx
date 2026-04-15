/* Keyframe only — cannot be expressed in Tailwind */
const animStyle = `
  @keyframes pillSpin {
    0%,100% { transform: rotate(0deg) scale(1); opacity: 1; }
    50%      { transform: rotate(180deg) scale(1.2); opacity: 0.8; }
  }
  .ceo-pill-spin { animation: pillSpin 4s linear infinite; display: inline-block; }
`;

const cards = [
  { label: "Inbound",    img: "/images/Inbound.png"    },
  { label: "Outbound",   img: "/images/Outbound.png"   },
  { label: "Follow-ups", img: "/images/Followups.png"  },
  { label: "Scheduling", img: "/images/Scheduling.png" },
];

const CaptureEveryOpportunity = () => (
  <>
    <style>{animStyle}</style>

    {/* Section wrapper */}
    <div className="flex items-center justify-center py-12 lg:py-16 px-4 sm:px-6 lg:px-25 bg-transparent relative [font-family:'Inter',sans-serif] text-white">

      {/* Outer glass card */}
      <div
        className="relative w-full rounded-[14px] border border-white/[0.12] overflow-hidden
          backdrop-blur-[25px] flex flex-col items-center 
          gap-8 sm:gap-10 py-10 sm:py-12 px-5 sm:px-8 lg:px-12"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      >
        {/* Top shimmer line — replaces ::before */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10 rounded-t-[14px]"
          style={{
            background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.15) 80%, transparent 100%)",
          }}
        />

        {/* Radial glow behind content — replaces ::after */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[700px] h-[400px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse, rgba(0,188,125,0.10) 0%, transparent 65%)" }}
        />

        {/* Inner content */}
        <div className="relative z-10 flex flex-col items-center gap-7 sm:gap-10 w-full">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-[8px] px-5 py-2 text-[0.85rem] text-white/75">
            <span className="ceo-pill-spin text-[#00c87e] text-base leading-none">✦</span>
            Processed automatically
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(24px,4.5vw,48px)] font-light leading-[1.15] text-center text-white tracking-[-0.02em] m-0 px-2">
            Capture Every Opportunity<br />
            Starting Today
          </h2>

          {/* 4 Cards */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">
            {cards.map(({ label, img }) => (
              <div
                key={label}
                className="group relative flex-shrink-0 flex flex-col items-center justify-center gap-2
                  w-[140px] h-[80px] sm:w-[180px] sm:h-[94px]
                  rounded-[14px] bg-[#0D392B] overflow-hidden cursor-pointer
                  border border-[rgba(0,188,125,0.20)]
                  transition-all duration-[250ms] ease-out
                  hover:-translate-y-[5px] hover:bg-[#0f4535]
                  hover:border-[rgba(0,188,125,0.45)]
                  hover:shadow-[0_12px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(0,188,125,0.15)]"
              >
                <div className="w-9 h-9 flex items-center justify-center text-white/90 transition-transform duration-[250ms] group-hover:scale-[1.12]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={label} className="w-8 h-8 object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(58%)_sepia(83%)_saturate(400%)_hue-rotate(115deg)]" />
                </div>
                <span className="text-[0.78rem] font-light text-white/80 tracking-[0.01em] text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </>
);

export default CaptureEveryOpportunity;