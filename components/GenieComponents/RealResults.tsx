/* ── Icons ── */
const TrendIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const CalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

/* ── Data ── */
const stats = [
  { icon: <TrendIcon />, num: "+32%", label: "Call Answer Rate"          },
  { icon: <BoltIcon />,  num: "45%",  label: "Faster Lead Qualification" },
  { icon: <CalIcon />,   num: "3x",   label: "Appointment Bookings"      },
  { icon: <ClockIcon />, num: "24/7", label: "AI Availability"           },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Sales, TechCorp",
    avatar: "👩🏻",
    quote: `"Genei transformed our call handling. We've seen a 40% increase in qualified leads within the first month."`,
  },
  {
    name: "James Chen",
    role: "Director, Real Estate Pro",
    avatar: "👨🏻",
    quote: `"The ROI was immediate. Our team can now focus on closing deals instead of answering repetitive calls."`,
  },
];

const RealResults = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center [font-family:'Inter',sans-serif] text-white">

      {/* Left radial glow (replaces ::before) */}
      <div
        className="absolute top-[40%] -left-[80px] w-[450px] h-[450px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,100,55,0.18) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.06] px-[1.15rem] py-[0.42rem] text-[0.82rem] text-white/65 mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
          Your Autonomous Digital Operators
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] mx-auto mb-5 max-w-[540px]">
          Real Results<br />Real Impact
        </h2>

        {/* Subtitle */}
        <p className="text-[0.92rem] text-white/[0.42] leading-[1.8] max-w-[580px] mx-auto mb-14">
          Running a business already demands attention. Genie takes over
          routine voice interactions, so calls no longer interrupt your day
          or go unanswered.
        </p>

        {/* Stat cards — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[16px] border border-white/[0.08]
                px-[1.4rem] py-[1.8rem] text-left
                transition-all duration-[250ms]
                hover:-translate-y-[5px] hover:border-[rgba(0,200,126,0.2)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              style={{ background: "linear-gradient(160deg, #0a1812 0%, #060e0a 100%)" }}
            >
              {/* Corner glow (replaces ::before) */}
              <div
                className="absolute -bottom-[30px] -right-[30px] w-[120px] h-[120px] pointer-events-none
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(0,200,126,0.06) 0%, transparent 70%)" }}
              />
              {/* Icon */}
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[#00c87e] mb-5
                  bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.25)]
                  shadow-[0_0_14px_rgba(0,200,126,0.15)]
                  transition-all duration-[250ms]
                  group-hover:bg-[rgba(0,200,126,0.2)] group-hover:shadow-[0_0_22px_rgba(0,200,126,0.28)]"
              >
                {s.icon}
              </div>
              <div className="text-[2.4rem] font-normal text-white leading-none mb-[0.4rem] tracking-[-0.02em]">
                {s.num}
              </div>
              <div className="text-[0.82rem] text-white/[0.42] font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards — 1 col mobile, 2 cols tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-[16px] border border-white/[0.08] px-[1.8rem] py-[1.6rem] text-left
                transition-all duration-[250ms]
                hover:-translate-y-1 hover:border-[rgba(0,200,126,0.16)]"
              style={{ background: "linear-gradient(160deg, #0a1812 0%, #060e0a 100%)" }}
            >
              {/* Person row */}
              <div className="flex items-center gap-[0.9rem] mb-4">
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center
                    text-[1.1rem] flex-shrink-0 overflow-hidden
                    border-2 border-[rgba(0,200,126,0.25)]"
                  style={{ background: "linear-gradient(135deg, #1a5c3a, #0a3d25)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[0.92rem] text-white m-0 mb-[0.18rem]">{t.name}</p>
                  <p className="text-[0.76rem] text-white/40 m-0">{t.role}</p>
                </div>
              </div>
              {/* Quote */}
              <p className="text-[0.86rem] text-white/55 leading-[1.75] italic m-0">{t.quote}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RealResults;
