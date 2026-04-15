/* All animations retained — keyframes cannot be expressed in Tailwind */
const animStyle = `
  @keyframes spinCW {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes spinCCW {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(-360deg); }
  }
  @keyframes charFloat {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-14px); }
  }
  @keyframes barPulse {
    from { transform: scaleY(0.35); opacity: 0.45; }
    to   { transform: scaleY(1);    opacity: 1; }
  }
  .tmc-ring-1      { animation: spinCW   18s linear infinite; }
  .tmc-ring-2      { animation: spinCCW  12s linear infinite; }
  .tmc-rdot-outer  { animation: spinCCW  18s linear infinite; }
  .tmc-rdot-inner  { animation: spinCW   12s linear infinite; }
  .tmc-char-float  {
    animation: charFloat 3.5s ease-in-out infinite;
    filter: drop-shadow(0 0 40px rgba(0,200,126,0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.5));
  }
  .tmc-bar { animation: barPulse 1.4s ease-in-out infinite alternate; }
  /* Button shimmer sweep on hover */
  .tmc-btn-shimmer { position: relative; overflow: hidden; }
  .tmc-btn-shimmer::before {
    content: '';
    position: absolute;
    top: 0; left: -75%;
    width: 50%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
  }
  .tmc-btn-shimmer:hover::before { left: 130%; }
`;

/* ── Icons ── */
const PhoneIco = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="#00c87e" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const TrendIco = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="#00c87e" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const CalIco = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="#00c87e" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
);
const UsersIco = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="#00c87e" strokeWidth="2" strokeLinecap="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const CheckIco = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="#00c87e" strokeWidth="2.5" strokeLinecap="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const barHeights = [10,16,26,38,52,64,74,64,52,38,26,16,10];

const checkItems = [
  "2,800+ calls handled",
  "147 bookings processed",
  "24/7 Assistance",
  "89% lead qualification rate.",
];

/* Shared stat card class string */
const cardCls = `absolute z-10 backdrop-blur-[24px] border border-white/[0.13] rounded-[12px] sm:rounded-[16px]
  px-3 py-2 sm:px-5 sm:py-4 min-w-[115px] sm:min-w-[155px]
  shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.09)]
  transition-all duration-[250ms]
  hover:-translate-y-[5px] hover:scale-[1.03]
  hover:shadow-[0_18px_50px_rgba(0,0,0,0.65),0_0_22px_rgba(0,200,126,0.12)]
  hover:border-[rgba(0,200,126,0.22)]`;

const TurnMissedCalls = () => (
  <>
    <style>{animStyle}</style>

    <div className="relative overflow-hidden [font-family:'Inter',sans-serif] text-white px-4 sm:px-6 lg:px-30 pr-5">

      {/* Page glow — top center */}
      <div
        className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(0,200,126,0.12) 0%, rgba(0,200,126,0.05) 35%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Page glow — bottom right */}
      <div
        className="absolute -bottom-[200px] -right-[200px] w-[900px] h-[650px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(0,200,126,0.10) 0%, rgba(0,200,126,0.04) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Hero grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-center
        min-h-[calc(100vh-97px)] gap-8
        pt-8 pb-12
        max-w-[1400px]">

        {/* ════ LEFT ════ */}
        <div className="flex flex-col items-start">

          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07]
            px-[1.1rem] py-[0.42rem] text-[0.82rem] text-white/70 mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
            Genie
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(28px,4.5vw,48px)] font-normal leading-normal tracking-[-0.02em] m-0 mb-6 text-white">
            Turn Missed Calls Into<br />
            Booked Appointments
          </h1>

          {/* Body text */}
          <p className="text-[0.87rem] text-white/[0.48] leading-[1.88] m-0 mb-2 max-w-[420px]">
            Inbound and outbound AI calling that answers every call 24/7—so no lead is ever lost.
          </p>

          <p className="text-[0.87rem] text-white/[0.48] m-0 mb-[0.9rem]">
            Results delivered in month:
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-[0.55rem] gap-x-4 sm:gap-x-8 mb-9">
            {checkItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[0.85rem] text-white/[0.68]">
                <CheckIco />
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#"
              className="tmc-btn-shimmer inline-flex items-center gap-2
                bg-[#04C09C] text-white border-none rounded-full
                px-[2.2rem] py-[0.85rem] text-[0.92rem] font-bold
                no-underline cursor-pointer
                shadow-[0_4px_24px_rgba(0,200,126,0.35)]
                transition-all duration-200
                hover:bg-[#00e891] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,200,126,0.5)]"
            >
              Book A Free Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent text-white/[0.85]
                border border-white/[0.28] rounded-full
                px-8 py-[0.85rem] text-[0.92rem] font-semibold
                no-underline cursor-pointer
                transition-all duration-200
                hover:border-[rgba(0,200,126,0.5)] hover:text-[#00c87e] hover:-translate-y-0.5"
            >
              See Genei In Action
            </a>
          </div>

        </div>

        {/* ════ RIGHT ════ */}
        <div className="relative h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center overflow-hidden lg:overflow-visible">

          <div className="relative flex items-center justify-center z-[5]">

            {/* Outer ring */}
            <div
              className="tmc-ring-1 absolute w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] lg:w-[440px] lg:h-[440px]
                rounded-full top-1/2 left-1/2
                border border-[rgba(0,200,126,0.18)]
                shadow-[0_0_20px_rgba(0,200,126,0.04)]"
            >
              <span className="tmc-rdot-outer absolute w-[10px] h-[10px] rounded-full bg-[#00c87e]
                shadow-[0_0_10px_#00c87e,0_0_24px_rgba(0,200,126,0.6)]"
                style={{ top: "6%", left: "72%" }} />
              <span className="tmc-rdot-outer absolute w-[10px] h-[10px] rounded-full bg-[#00c87e]
                shadow-[0_0_10px_#00c87e,0_0_24px_rgba(0,200,126,0.6)]"
                style={{ top: "76%", left: "90%" }} />
            </div>

            {/* Inner ring */}
            <div
              className="tmc-ring-2 absolute w-[145px] h-[145px] sm:w-[205px] sm:h-[205px] lg:w-[310px] lg:h-[310px]
                rounded-full top-1/2 left-1/2
                border border-[rgba(0,200,126,0.12)]"
            >
              <span className="tmc-rdot-inner absolute w-[10px] h-[10px] rounded-full bg-[#00c87e]
                shadow-[0_0_10px_#00c87e,0_0_24px_rgba(0,200,126,0.6)]"
                style={{ top: "84%", left: "60%" }} />
            </div>

            {/* Sound wave bars */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-start gap-[4px] sm:gap-[10px] lg:gap-[20px]">
              {barHeights.map((h, i) => (
                <div key={`l${i}`} className="tmc-bar w-[5px] rounded-[3px]"
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.09}s`,
                    background: "linear-gradient(to top, #00c87e, rgba(0,200,126,0.18))",
                  }} />
              ))}
              <div className="w-[20px] sm:w-[50px] lg:w-[80px] flex-shrink-0" />
              {[...barHeights].reverse().map((h, i) => (
                <div key={`r${i}`} className="tmc-bar w-[5px] rounded-[3px]"
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.09}s`,
                    background: "linear-gradient(to top, #00c87e, rgba(0,200,126,0.18))",
                  }} />
              ))}
            </div>

            {/* Character */}
            <img
              src="/images/GeniAgent.png"
              className="tmc-char-float w-[185px] h-[280px] sm:w-[300px] sm:h-[460px] lg:w-[430px] lg:h-[650px]"
              alt="Genie"
            />

          </div>

          {/* ── Stat Card 1 — top left ── */}
          <div
            className={`${cardCls} top-[10px] lg:top-[20px] left-0 lg:-left-[30px]`}
            style={{ background: "linear-gradient(135deg, rgba(9,26,17,0.88) 0%, rgba(3,10,7,0.96) 100%)" }}
          >
            <div className="flex items-center gap-[7px] mb-[0.4rem]">
              <div className="w-6 h-6 rounded-[7px] flex items-center justify-center flex-shrink-0
                bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.22)]">
                <PhoneIco />
              </div>
              <span className="text-[0.7rem] text-white/[0.38] font-medium tracking-[0.02em]">Calls Handled</span>
            </div>
            <div className="text-[1.3rem] sm:text-[1.75rem] font-bold text-white leading-none tracking-[-0.02em]">2,847</div>
          </div>

          {/* ── Stat Card 2 — top right ── */}
          <div
            className={`${cardCls} top-[10px] lg:top-[20px] right-0 lg:-right-[50px]`}
            style={{ background: "linear-gradient(135deg, rgba(9,26,17,0.88) 0%, rgba(3,10,7,0.96) 100%)" }}
          >
            <div className="flex items-center gap-[7px] mb-[0.4rem]">
              <div className="w-6 h-6 rounded-[7px] flex items-center justify-center flex-shrink-0
                bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.22)]">
                <TrendIco />
              </div>
              <span className="text-[0.7rem] text-white/[0.38] font-medium tracking-[0.02em]">Lead Quality</span>
            </div>
            <div className="text-[1.3rem] sm:text-[1.75rem] font-bold text-white leading-none tracking-[-0.02em]">89%</div>
            <div className="flex items-end gap-[3px] h-[26px] mt-[6px]">
              {[3,5,4,6,5,8,7,9].map((h, i) => (
                <div key={i}
                  className={`w-[7px] rounded-[2px] ${i >= 5 ? "bg-[#00c87e]" : "bg-[rgba(0,200,126,0.3)]"}`}
                  style={{ height: `${h * 3}px` }} />
              ))}
            </div>
          </div>

          {/* ── Stat Card 3 — bottom left ── */}
          <div
            className={`${cardCls} bottom-[40px] lg:bottom-[60px] left-0 lg:-left-[20px]`}
            style={{ background: "linear-gradient(135deg, rgba(9,26,17,0.88) 0%, rgba(3,10,7,0.96) 100%)" }}
          >
            <div className="flex items-center gap-[7px] mb-[0.4rem]">
              <div className="w-6 h-6 rounded-[7px] flex items-center justify-center flex-shrink-0
                bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.22)]">
                <CalIco />
              </div>
              <span className="text-[0.7rem] text-white/[0.38] font-medium tracking-[0.02em]">Booked Today</span>
            </div>
            <div className="text-[1.3rem] sm:text-[1.75rem] font-bold text-white leading-none tracking-[-0.02em]">147</div>
          </div>

          {/* ── Stat Card 4 — bottom right ── */}
          <div
            className={`${cardCls} bottom-[20px] lg:bottom-[40px] right-0 lg:-right-[40px]`}
            style={{ background: "linear-gradient(135deg, rgba(9,26,17,0.88) 0%, rgba(3,10,7,0.96) 100%)" }}
          >
            <div className="flex items-center gap-[7px] mb-[0.4rem]">
              <div className="w-6 h-6 rounded-[7px] flex items-center justify-center flex-shrink-0
                bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.22)]">
                <UsersIco />
              </div>
              <span className="text-[0.7rem] text-white/[0.38] font-medium tracking-[0.02em]">Active Users</span>
            </div>
            <div className="text-[1.3rem] sm:text-[1.75rem] font-bold text-white leading-none tracking-[-0.02em]">1.2K</div>
            <div className="flex mt-[6px]">
              {[1,2,3].map(i => (
                <div key={i}
                  className="w-[22px] h-[22px] rounded-full -mr-[6px] flex items-center justify-center
                    text-[0.55rem] border-[1.5px] border-[#0a1a10]"
                  style={{ background: "linear-gradient(135deg, #1a5c3a, #0a3d25)" }}>
                  👤
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  </>
);

export default TurnMissedCalls;
