const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8"  y1="2" x2="8"  y2="6"/>
    <line x1="3"  y1="10" x2="21" y2="10"/>
  </svg>
);
const PhoneOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07"/>
    <path d="M14.35 9.65a16 16 0 00-2.6-3.41L10.48 7.51a2 2 0 01-2.11.45 12.05 12.05 0 00-2.81-.7A2 2 0 014 5.54V2.72"/>
    <line x1="23" y1="1" x2="1" y2="23"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const items = [
  {
    icon: <BoltIcon />,
    title: "Faster Response Times",
    text: "Calls are answered instantly, so no opportunity goes cold.",
  },
  {
    icon: <CalendarIcon />,
    title: "Higher Booking Rates",
    text: "Appointments get scheduled and confirmed in real time, without back-and-forth delays.",
  },
  {
    icon: <PhoneOffIcon />,
    title: "Fewer Missed Opportunities",
    text: "No unanswered calls, no delayed follow-ups, and no leads lost in silence.",
  },
  {
    icon: <UsersIcon />,
    title: "Reduced Front-Desk Workload",
    text: "Routine calls are handled automatically, freeing your team to focus on higher-value work.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Growth Without Hiring",
    text: "Scale your call handling capacity without increasing headcount or extending work hours.",
  },
];

const HowGenieTransforms = () => (
  <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center [font-family:'Inter',sans-serif] text-white">

    {/* Bottom-left radial glow (replaces ::before) */}
    <div
      className="absolute -bottom-[60px] -left-[60px] w-[500px] h-[500px] pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(0,100,55,0.22) 0%, transparent 65%)" }}
    />

    <div className="relative z-10 max-w-[860px] mx-auto">

      {/* Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.06] px-[1.15rem] py-[0.42rem] text-[0.82rem] text-white/65 mb-7">
        <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
        Your Autonomous Digital Operators
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-normal tracking-[-0.02em] mx-auto mb-5 max-w-[600px]">
        How Genie Transforms<br />Your Business
      </h2>

      {/* Subtitle */}
      <p className="text-[0.92rem] text-white/[0.42] leading-[1.8] max-w-[560px] mx-auto mb-14">
        Genei helps you respond faster, capture more qualified leads, and convert
        more callers into booked appointments.
      </p>

      {/* Timeline list */}
      <div className="flex flex-col max-w-[760px] mx-auto text-left">
        {items.map((item, i) => (
          <div key={i} className="group grid grid-cols-[52px_1fr] gap-[1.4rem] items-start">

            {/* Left: icon + connector line */}
            <div className="flex flex-col items-center">
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center
                  text-[#00c87e] flex-shrink-0 z-[2]
                  bg-[rgba(0,200,126,0.12)] border border-[rgba(0,200,126,0.35)]
                  shadow-[0_0_12px_rgba(0,200,126,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
                  transition-all duration-[250ms]
                  group-hover:bg-[rgba(0,200,126,0.2)] group-hover:shadow-[0_0_22px_rgba(0,200,126,0.4)]"
              >
                {item.icon}
              </div>
              {/* Connector line — hidden on last item */}
              {i < items.length - 1 && (
                <div
                  className="w-[1px] flex-1 min-h-[48px] mt-1"
                  style={{ background: "linear-gradient(to bottom, rgba(0,200,126,0.4), rgba(0,200,126,0.08))" }}
                />
              )}
            </div>

            {/* Right: card */}
            <div
              className="relative overflow-hidden rounded-[14px] border border-white/[0.08]
                px-6 sm:px-8 py-[1.6rem] mb-[1.6rem]
                transition-all duration-[250ms]
                group-hover:border-[rgba(0,200,126,0.2)] group-hover:translate-x-1
                group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              style={{ background: "linear-gradient(145deg, #0a1812, #060e0a)" }}
            >
              {/* Left accent bar (replaces ::before) */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[3px_0_0_3px]
                  opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
                style={{ background: "linear-gradient(to bottom, #00c87e, transparent)" }}
              />
              <h3 className="text-[1.05rem] font-bold text-white m-0 mb-[0.55rem]">{item.title}</h3>
              <p className="text-[0.875rem] text-white/45 leading-[1.75] m-0">{item.text}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default HowGenieTransforms;

