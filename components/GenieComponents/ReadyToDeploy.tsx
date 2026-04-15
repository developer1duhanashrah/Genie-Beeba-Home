/* Float animation retained (cannot be expressed in Tailwind) */
const animStyle = `
  @keyframes rtdFloat {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
  }
  .rtd-char-float { animation: rtdFloat 4s ease-in-out infinite; }
`;

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const ReadyToDeploy = () => {
  return (
    <>
      <style>{animStyle}</style>

      <section className="relative px-4 sm:px-6 lg:px-25 pr-5 pt-12 pb-20 sm:pb-24 [font-family:'Inter',sans-serif] text-white">

        {/* Bottom fade overlay (replaces ::after) */}
        <div
          className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none z-0"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #0a0f0d 100%)" }}
        />

        {/* Big rounded glass card */}
        <div
          className="relative w-full rounded-[30px] overflow-hidden
            border border-[rgba(21,44,37,0.94)]
            backdrop-blur-[20px]
            shadow-[0_30px_80px_rgba(0,0,0,0.5)]
            grid grid-cols-1 sm:grid-cols-2
            z-10"
          style={{ background: "rgba(0,0,0,0.10)" }}
        >
          {/* Card right-side teal glow (replaces ::before) */}
          <div
            className="absolute top-1/2 -right-[60px] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle, rgba(0,140,80,0.45) 0%, rgba(0,100,55,0.25) 35%, transparent 65%)"
            }}
          />

          {/* ── LEFT — Text ── */}
          <div className="relative z-10 px-8 sm:px-10 lg:px-12 py-10 sm:py-14 flex flex-col items-start">

            {/* Pill */}
            <div className="inline-flex items-center gap-[7px] rounded-full border border-white/[0.18] bg-white/10
              px-4 py-[0.35rem] text-[0.72rem] font-bold text-white/80 uppercase tracking-[0.08em] mb-7">
              <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
              Genie
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(26px,3.8vw,40px)] font-normal leading-[1.15] tracking-[-0.02em] m-0 mb-6 text-white">
              Ready to Deploy Genie<br />for Your Business?
            </h2>

            {/* Paragraphs */}
            <p className="text-[0.84rem] text-white/48 leading-[1.8] m-0 mb-4 max-w-[380px]">
              Join Hundreds Of Businesses Already Using Genie To Transform
              Their Call Operations. Scale Your Team Without Scaling
              Headcount. Get Started In Minutes.
            </p>
            <p className="text-[0.84rem] text-white/48 leading-[1.8] m-0 mb-8 max-w-[380px]">
              Join Hundreds Of Businesses Already Using Genei To Transform
              Their Call Operations. Scale Your Team Without Scaling Headcount.
              Get Started In Minutes.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-[10px] rounded-full bg-white text-black
                px-8 py-[0.85rem] text-[0.85rem] font-bold uppercase tracking-[0.04em]
                no-underline cursor-pointer border-none
                shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                transition-all duration-200
                hover:bg-[#e8e8e8] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.22)]"
            >
              Book A Meeting
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0
                transition-transform duration-200 group-hover:translate-x-[3px]">
                <ArrowIcon />
              </span>
            </a>

          </div>

          {/* ── RIGHT — Character image ── */}
          <div className="relative z-10 flex items-end justify-center min-h-[280px] sm:h-[560px] lg:h-[632px]">
            <img
              src="/images/ReadyToDeployJenie.png"
              alt="Genie character"
              className="rtd-char-float
                w-[280px] sm:w-[360px] lg:w-[420px] h-auto object-contain
                absolute bottom-0 right-0 sm:right-[40px] lg:right-[60px]
                drop-shadow-[0_0_40px_rgba(0,200,126,0.2)]"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default ReadyToDeploy;
