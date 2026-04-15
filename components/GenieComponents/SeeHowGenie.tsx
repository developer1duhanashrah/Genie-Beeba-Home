/* Shimmer pseudo-elements retained (cannot be expressed in Tailwind) */
const animStyle = `
  .shg-card-shimmer::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent);
  }
  .shg-rec-shine::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    border-radius: 16px 16px 0 0;
    background: linear-gradient(to right,
      transparent 0%,
      rgba(144,255,230,0.4) 30%,
      rgba(255,255,255,0.5) 50%,
      rgba(144,255,230,0.4) 70%,
      transparent 100%
    );
  }
`;

const problemCards = [
  { title: "Hiring adds costs",        desc: "Salary costs, training time, and turnover risk", img: "/images/HiringIcon.png"    },
  { title: "Traditional IVR systems",  desc: "Create friction and frustrate callers",          img: "/images/IVRIcon.png"       },
  { title: "Voicemail costs you",       desc: "Qualified leads go unanswered",                  img: "/images/VoicemailIcon.png" },
];

const SeeHowGenie = () => (
  <>
    <style>{animStyle}</style>

    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 gap-6 relative [font-family:'Inter',sans-serif] text-white">

      {/* Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-[0.45rem] text-[0.82rem] text-white/70">
        <span className="w-2 h-2 rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e] flex-shrink-0" />
        Deployment Process
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-normal text-center text-white tracking-[-0.02em] m-0">
        See How Genie<br />Handles a Real Call
      </h2>

      {/* Subtitle */}
      <p className="text-[0.95rem] font-light text-white/55 text-center leading-[1.7] m-0 max-w-[420px]">
        Getting started with Genie is simple. We handle the
        setup and configuration so it fits your business.
      </p>

      {/* 3 Problem Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[820px] mt-2">
        {problemCards.map(({ title, desc, img }) => (
          <div
            key={title}
            className="shg-card-shimmer group relative overflow-hidden rounded-[16px]
              bg-black border border-white/[0.09]
              flex flex-col items-center justify-center text-center gap-5
              px-6 py-8 min-h-[240px] sm:min-h-[269px] cursor-pointer
              transition-all duration-[250ms]
              hover:border-[rgba(0,188,125,0.25)] hover:bg-[rgba(0,188,125,0.04)] hover:-translate-y-[3px]"
          >
            <div
              className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center
                text-[#00c87e] flex-shrink-0
                bg-[rgb(13,57,43)] border border-[rgba(0,188,125,0.22)]
                transition-all duration-[250ms]
                group-hover:bg-[rgba(0,188,125,0.2)] group-hover:shadow-[0_0_16px_rgba(0,188,125,0.25)]"
            >
              <img src={img} alt={title} className="w-[26px] h-[26px] object-contain" />
            </div>
            <div>
              <p className="text-[0.95rem] font-bold text-white m-0 mb-1">{title}</p>
              <p className="text-[0.82rem] font-light text-white/50 leading-[1.6] m-0">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Genie Card */}
      <div className="relative w-full max-w-[820px] mt-2">

        {/* Floating badge */}
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-[2]
          bg-[#00c87e] text-white text-[0.75rem] font-bold
          px-4 py-[0.3rem] rounded-full whitespace-nowrap tracking-[0.02em]">
          Recommended
        </div>

        {/* Card */}
        <div
          className="shg-rec-shine relative w-full rounded-[16px] overflow-hidden
            flex flex-col items-center gap-5 px-6 sm:px-10 py-12 sm:py-14
            border-2 border-[rgba(144,255,230,0.2)]
            shadow-[0px_4px_40px_rgba(144,255,230,0.1)]"
          style={{
            background: "linear-gradient(135deg, rgba(144,255,230,0.20) 0%, rgba(144,255,230,0.12) 50%, rgba(144,255,230,0.20) 100%)",
          }}
        >
          {/* Inner radial glow (replaces ::after) */}
          <div
            className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none z-0"
            style={{ background: "radial-gradient(ellipse, rgba(144,255,230,0.12) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4 w-full">
            <img src="/images/GeneiDelivers.png" alt="Genie" className="max-w-[180px] sm:max-w-[240px] h-auto" />
            <p className="text-[1.5rem] font-bold text-white m-0">Genie</p>
            <h3 className="text-[clamp(20px,2.8vw,29px)] font-normal text-center text-white m-0">
              Genei delivers{' '}
              <span className="text-[#00c87e]">consistent execution</span>
            </h3>
            <p className="text-[0.9rem] font-light text-white/50 text-center m-0">
              Without expanding your headcount.
            </p>
          </div>
        </div>

      </div>

    </div>
  </>
);

export default SeeHowGenie;

