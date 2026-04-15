/* Keyframes that cannot be expressed in Tailwind */
const animStyle = `
  .euc-card-shimmer::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0,188,125,0.5), transparent);
  }
  .euc-bottom-shimmer::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.15) 80%, transparent 100%);
    border-radius: 14px 14px 0 0;
    z-index: 2;
  }
`;

/* Icons */
const LeadsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);
const FollowUpsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const PipelinesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const TeamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const featureCards = [
  { Icon: LeadsIcon,     label: "Leads move\nto competitors"  },
  { Icon: FollowUpsIcon, label: "Follow-ups\nget delayed"     },
  { Icon: PipelinesIcon, label: "Sales pipelines\nslow down"  },
  { Icon: TeamIcon,      label: "Your team gets\noverwhelmed" },
];

const EveryUnAnsweredCall = () => (
  <>
    <style>{animStyle}</style>

    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 gap-5 relative [font-family:'Inter',sans-serif] text-white">

      {/* Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-[0.45rem] text-[0.82rem] text-white/70">
        <span className="w-2 h-2 rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e] flex-shrink-0" />
        Calls Matter
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,4.5vw,48px)] font-extralight leading-normal text-center text-white tracking-[-0.02em] m-0 px-2">
        Every Unanswered<br />
        Call Is Lost Revenue
      </h2>

    </div>
    {/* 4 Feature Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full px-4 sm:px-6 lg:px-25 pr-5  ">
        {featureCards.map(({ Icon, label }) => (
          <div
            key={label}
            className="euc-card-shimmer group relative flex flex-col items-center gap-6 p-6 sm:p-7
              rounded-[14px] overflow-hidden cursor-pointer
              bg-white/[0.04] border border-white/[0.09]
              transition-all duration-[250ms] ease-out
              hover:border-[rgba(0,188,125,0.3)] hover:bg-[rgba(0,188,125,0.05)] hover:-translate-y-[3px]"
          >
            {/* Icon bubble */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#00c87e]
              bg-[rgba(0,188,125,0.12)] border border-[rgba(0,188,125,0.25)]
              transition-all duration-[250ms]
              group-hover:bg-[rgba(0,188,125,0.2)] group-hover:shadow-[0_0_14px_rgba(0,188,125,0.3)]">
              <Icon />
            </div>
            {/* Label */}
            <div className="text-[0.92rem] font-bold text-center text-white leading-[1.45]">
              {label.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="px-4 sm:px-6 lg:px-25 pr-5 py-5">
         {/* Bottom dark glass card */}
      <div
        className="euc-bottom-shimmer relative w-full rounded-[14px] overflow-hidden
          flex flex-col items-center gap-5
          px-4 sm:px-6 lg:px-25 pr-5 py-8  sm:py-10  lg:py-10
          border border-white/[0.12] backdrop-blur-[40px]
          transition-transform duration-300 ease-out
          hover:-translate-y-1"
        style={{
          background: "linear-gradient(135deg, rgba(89,193,160,0.20) 0%, rgba(89,193,160,0.05) 50%, rgba(0,0,0,0.3) 100%), rgba(16,42,35,0.7)",
          boxShadow: "-40px 0 50px rgba(0,0,0,0.25), 40px 0 50px rgba(0,0,0,0.25), 0 -30px 40px rgba(0,0,0,0.2), 0 30px 40px rgba(0,0,0,0.2), 0 0 60px rgba(0,0,0,0.15), inset 0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        {/* Text */}
        <p className="text-[clamp(16px,2.2vw,28px)] font-normal text-white/80 leading-[1.8] text-center m-0 max-w-[780px]">
          Growing businesses don&apos;t lose opportunities because of bad marketing.<br className="hidden sm:block" />
          They lose them because{' '}
          <span className="text-[#00c87e] font-normal">no one picked up the phone.</span>
        </p>

        {/* Input + Button row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-[700px]">
          <div className="flex items-center gap-3 flex-1 min-w-0
            bg-black border border-white/[0.12] rounded-[10px] px-4 py-3 text-white">
            <span className="text-white/35 flex-shrink-0"><CloseIcon /></span>
            <span className="text-[0.88rem] text-white/45 [font-family:'Inter',sans-serif] truncate">
              If missed calls are costing you revenue, it&apos;s time to fix it.
            </span>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2.5
              rounded-full bg-[#00C19C] text-black font-bold text-[0.9rem]
              px-7 py-3.5 whitespace-nowrap cursor-pointer border-none
           
              transition-all duration-200 ease-out
              hover:bg-[#00e891] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,200,126,0.5)]
              [font-family:'Inter',sans-serif]"
          >
            Request a Live Demo
            <span className="w-[22px] h-[22px] rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
       </div>
     

  </>
);
export default EveryUnAnsweredCall;