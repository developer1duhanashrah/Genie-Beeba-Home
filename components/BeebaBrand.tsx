import Image from "next/image";

const cardStyle = {
  background: "linear-gradient(160deg, #0d2518 0%, #071610 60%, #040e08 100%)",
  boxShadow: "0 0 0 1px rgba(0,200,126,0.12), 0 8px 40px rgba(0,0,0,0.65)",
};
const cardStyleMiddle = {
  background: "linear-gradient(160deg, #0d2518 0%, #071610 60%, #040e08 100%)",
  boxShadow: "0 0 0 1.5px rgba(0,200,126,0.22), 0 12px 56px rgba(0,0,0,0.75), 0 0 60px rgba(0,200,126,0.07)",
};

const DOT = "absolute z-20 w-[11px] h-[11px] rounded-full bg-[#00c87e] shadow-[0_0_8px_#00c87e,0_0_20px_rgba(0,200,126,0.55)]";

export default function BeebaBrand() {
  return (
    <section
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 [font-family:'Inter',sans-serif]"
     
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#00c87e]/30 bg-[#00c87e]/10 px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e]" />
        <span className="text-[0.78rem] text-white/70 tracking-wide">Your Brand, Fully Automated</span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(28px,5.5vw,58px)] font-semibold text-white text-center leading-[1.15] tracking-[-0.02em] mb-5">
        How Beeba Is<br />Deployed
      </h2>

      {/* Subtext */}
      <p className="text-[clamp(0.82rem,1.4vw,0.93rem)] text-white/50 text-center max-w-[520px] leading-[1.7] mb-10 sm:mb-16">
        Getting started with Beeba is simple. We handle the setup and
        configuration, so you can focus on your business while the system is
        prepared for you.
      </p>

      {/* ── Cards row — sm+ (tablet & desktop) ───────────────────────────── */}
      {/*
          Side card dot center from flex-row top:
            Tablet : 66% × 420px = 277px  → connector mt-[277px], middle dot top = 277+40 = 317px
            Desktop: 66% × 490px = 323px  → connector mt-[323px], middle dot top = 323+40 = 363px
          Middle card starts at -mt-10 (-40px) above the row, so we add 40px to sync the dots.
      */}
      <div className="hidden sm:flex items-start justify-center w-full max-w-[860px]">

        {/* ── LEFT CARD ── */}
        <div className="relative flex-shrink-0">
          <div
            className="w-[190px] lg:w-[220px] h-[420px] lg:h-[490px] rounded-3xl overflow-hidden border border-[#00c87e]/20 flex flex-col"
            style={cardStyle}
          >
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/BeebaCalender.png"
                alt="Book Your Session"
                fill
                className="object-contain object-bottom"
              />
            </div>
            <div className="px-4 lg:px-5 pt-3 pb-5 lg:pb-6 flex-shrink-0">
              <h3 className="text-[0.88rem] lg:text-[0.95rem] font-semibold text-white mb-1.5 leading-snug">
                Book Your Session
              </h3>
              <p className="text-[0.68rem] lg:text-[0.72rem] text-white/45 leading-[1.65]">
                Start with a short meeting where you share your brand voice,
                competitors, and content goals. This helps us understand how
                Beeba should work.
              </p>
            </div>
          </div>
          {/* Dot right edge — center at 66% of card height */}
          <div className={`${DOT} -right-[5px] top-[277px] lg:top-[323px] -translate-y-1/2`} />
        </div>

        {/* ── CONNECTOR 1 ── aligned to dot centers */}
        <div className="relative flex-shrink-0 h-px w-[24px] lg:w-[32px] mt-[277px] lg:mt-[323px] bg-[#00c87e]/50
          shadow-[0_0_4px_rgba(0,200,126,0.4)]" />

        {/* ── MIDDLE CARD ── elevated */}
        <div className="relative flex-shrink-0 -mt-10">
          <div
            className="w-[210px] lg:w-[240px] rounded-3xl overflow-hidden border border-[#00c87e]/25 flex flex-col"
            style={cardStyleMiddle}
          >
            <div className="px-4 lg:px-5 pt-5 lg:pt-6 pb-3 flex-shrink-0">
              <h3 className="text-[0.88rem] lg:text-[0.95rem] font-semibold text-white mb-1.5 leading-snug">
                We Set Up the System
              </h3>
              <p className="text-[0.68rem] lg:text-[0.72rem] text-white/45 leading-[1.65]">
                We configure Beeba around your brand, content direction, and
                lead flow. Everything is set up to match how you want your
                social media to run.
              </p>
            </div>
            <div className="relative w-full h-[280px] lg:h-[330px] flex-shrink-0">
              <Image
                src="/images/BeebaSetup.png"
                alt="We Set Up the System"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
          {/* Dots: card starts 40px above row → add 40 to row-relative dot position */}
          <div className={`${DOT} -left-[5px] top-[317px] lg:top-[363px] -translate-y-1/2`} />
          <div className={`${DOT} -right-[5px] top-[317px] lg:top-[363px] -translate-y-1/2`} />
        </div>

        {/* ── CONNECTOR 2 ── same mt as connector 1 */}
        <div className="relative flex-shrink-0 h-px w-[24px] lg:w-[32px] mt-[277px] lg:mt-[323px] bg-[#00c87e]/50
          shadow-[0_0_4px_rgba(0,200,126,0.4)]" />

        {/* ── RIGHT CARD ── */}
        <div className="relative flex-shrink-0">
          <div
            className="w-[190px] lg:w-[220px] h-[420px] lg:h-[490px] rounded-3xl overflow-hidden border border-[#00c87e]/20 flex flex-col"
            style={cardStyle}
          >
            <div className="relative flex-1 min-h-0">
              <Image
                src="/images/BeebaLive.png"
                alt="Go Live With Beeba"
                fill
                className="object-contain object-bottom"
              />
            </div>
            <div className="px-4 lg:px-5 pt-3 pb-5 lg:pb-6 flex-shrink-0">
              <h3 className="text-[0.88rem] lg:text-[0.95rem] font-semibold text-white mb-1.5 leading-snug">
                Go Live With Beeba
              </h3>
              <p className="text-[0.68rem] lg:text-[0.72rem] text-white/45 leading-[1.65]">
                Once ready, Beeba goes live. Content planning, creation, and
                scheduling begin without complex setup or daily management from
                your side.
              </p>
            </div>
          </div>
          {/* Dot left edge — center at 66% of card height */}
          <div className={`${DOT} -left-[5px] top-[277px] lg:top-[323px] -translate-y-1/2`} />
        </div>

      </div>

      {/* ── Mobile cards — vertical stack (< sm) ─────────────────────────── */}
      <div className="sm:hidden flex flex-col w-full max-w-[360px] relative">

        {/* Vertical left rail */}
        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00c87e]/30 to-transparent pointer-events-none" />

        {/* Card 1: Book Your Session */}
        <div className="pl-9 pb-5 relative">
          <div className="absolute left-[11px] top-6 w-[9px] h-[9px] rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e,0_0_14px_rgba(0,200,126,0.45)] z-10" />
          <div className="rounded-2xl overflow-hidden border border-[#00c87e]/20 flex flex-col" style={cardStyle}>
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/images/BeebaCalender.png" alt="Book Your Session" fill className="object-contain object-bottom" />
            </div>
            <div className="px-4 pt-3 pb-5 flex-shrink-0">
              <h3 className="text-[0.9rem] font-semibold text-white mb-1.5 leading-snug">Book Your Session</h3>
              <p className="text-[0.72rem] text-white/45 leading-[1.65]">
                Start with a short meeting where you share your brand voice, competitors, and content goals. This helps us understand how Beeba should work.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: We Set Up the System */}
        <div className="pl-9 pb-5 relative">
          <div className="absolute left-[11px] top-6 w-[9px] h-[9px] rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e,0_0_14px_rgba(0,200,126,0.45)] z-10" />
          <div className="rounded-2xl overflow-hidden border border-[#00c87e]/25 flex flex-col" style={cardStyleMiddle}>
            <div className="px-4 pt-5 pb-3 flex-shrink-0">
              <h3 className="text-[0.9rem] font-semibold text-white mb-1.5 leading-snug">We Set Up the System</h3>
              <p className="text-[0.72rem] text-white/45 leading-[1.65]">
                We configure Beeba around your brand, content direction, and lead flow. Everything is set up to match how you want your social media to run.
              </p>
            </div>
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/images/BeebaSetup.png" alt="We Set Up the System" fill className="object-contain object-bottom" />
            </div>
          </div>
        </div>

        {/* Card 3: Go Live With Beeba */}
        <div className="pl-9 relative">
          <div className="absolute left-[11px] top-6 w-[9px] h-[9px] rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e,0_0_14px_rgba(0,200,126,0.45)] z-10" />
          <div className="rounded-2xl overflow-hidden border border-[#00c87e]/20 flex flex-col" style={cardStyle}>
            <div className="relative w-full h-[200px] flex-shrink-0">
              <Image src="/images/BeebaLive.png" alt="Go Live With Beeba" fill className="object-contain object-bottom" />
            </div>
            <div className="px-4 pt-3 pb-5 flex-shrink-0">
              <h3 className="text-[0.9rem] font-semibold text-white mb-1.5 leading-snug">Go Live With Beeba</h3>
              <p className="text-[0.72rem] text-white/45 leading-[1.65]">
                Once ready, Beeba goes live. Content planning, creation, and scheduling begin without complex setup or daily management from your side.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
