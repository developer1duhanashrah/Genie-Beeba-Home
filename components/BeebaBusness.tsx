const steps = [
  {
    side: "left",
    heading: "Time for Clear Strategy",
    desc: "Instead Of Reacting To Posts, You Get Space To Plan. Content Follows A Clear Direction, Not Last-Minute Decisions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00c87e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    side: "right",
    heading: "Lower Effort, Better Use of Budget",
    desc: "Social Media Runs As A System, Not A Manual Task. You Reduce Repeated Effort And Avoid The Constant Cost Of Doing Everything By Hand.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00c87e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    side: "left",
    heading: "Consistent Engagement",
    desc: "With A System Always Running, Conversations Stay Active. Responses Are Timely, And Interest Does Not Fade Because Of Delays.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00c87e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function BeebaBusiness() {
  return (
    <section className="
      relative min-h-screen flex flex-col items-center justify-center
      overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black
      [font-family:'Inter',sans-serif]
    ">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#00c87e]/30 px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full" />
        <span className="text-[0.78rem] text-white/70 tracking-wide">Effortless Social Media Growth</span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(28px,5vw,52px)] font-semibold text-white text-center leading-[1.2] tracking-[-0.02em] mb-5">
        How Beeba Helps<br />Your Business
      </h2>

      {/* Subtext */}
      <p className="text-[clamp(0.82rem,1.5vw,0.95rem)] text-white/50 text-center max-w-[520px] leading-[1.7] mb-10 sm:mb-16 lg:mb-20">
        Running a business already demands your attention. Beeba turns social
        media into a system that works in the background, so content no longer
        competes with your day.
      </p>

      {/* Roadmap */}
      <div className="relative w-full max-w-[720px]">

        {/* Desktop: vertical center line */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00c87e]/30 to-transparent" />

        {/* Mobile: vertical left rail */}
        <div className="sm:hidden absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00c87e]/30 to-transparent" />

        {steps.map((step, i) => (
          <div key={i} className="relative flex items-start sm:items-center pb-8 sm:pb-0 sm:min-h-[140px] sm:mb-6 last:pb-0 last:mb-0 pl-8 sm:pl-0">

            {/* Mobile: timeline dot */}
            <div className="sm:hidden absolute left-0 top-2 w-8 flex justify-center flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#00c87e] shadow-[0_0_8px_#00c87e,0_0_20px_rgba(0,200,126,0.4)]" />
            </div>

            {/* Mobile: icon + text stacked */}
            <div className="sm:hidden flex flex-col gap-3">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-[#0a1f15] border border-[#00c87e]/20 shadow-[0_0_0_1px_rgba(0,200,126,0.08),0_4px_24px_rgba(0,0,0,0.6)]">
                {step.icon}
              </div>
              <h3 className="text-[0.95rem] font-semibold text-white leading-snug">{step.heading}</h3>
              <p className="text-[0.78rem] text-white/50 leading-[1.65]">{step.desc}</p>
            </div>

            {/* Desktop: left column */}
            <div className="hidden sm:block w-[calc(50%-36px)] pr-8 text-right">
              {step.side === "left" ? (
                <>
                  <h3 className="text-[1rem] font-semibold text-white mb-2 leading-snug">
                    {step.heading}
                  </h3>
                  <p className="text-[0.78rem] text-white/50 leading-[1.65]">
                    {step.desc}
                  </p>
                </>
              ) : (
                <div className="flex justify-end">
                  <div className="
                    w-[72px] h-[72px] rounded-full flex items-center justify-center
                    bg-[#0a1f15] border border-[#00c87e]/20
                    shadow-[0_0_0_1px_rgba(0,200,126,0.08),0_4px_24px_rgba(0,0,0,0.6)]
                  ">
                    {step.icon}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop: center dot */}
            <div className="hidden sm:flex relative z-10 flex-shrink-0 items-center justify-center w-[72px]">
              <span className="w-3 h-3 rounded-full bg-[#00c87e] shadow-[0_0_8px_#00c87e,0_0_20px_rgba(0,200,126,0.4)]" />
            </div>

            {/* Desktop: right column */}
            <div className="hidden sm:block w-[calc(50%-36px)] pl-8 text-left">
              {step.side === "right" ? (
                <>
                  <h3 className="text-[1rem] font-semibold text-white mb-2 leading-snug">
                    {step.heading}
                  </h3>
                  <p className="text-[0.78rem] text-white/50 leading-[1.65]">
                    {step.desc}
                  </p>
                </>
              ) : (
                <div className="
                  w-[72px] h-[72px] rounded-full flex items-center justify-center
                  bg-[#0a1f15] border border-[#00c87e]/20
                  shadow-[0_0_0_1px_rgba(0,200,126,0.08),0_4px_24px_rgba(0,0,0,0.6)]
                ">
                  {step.icon}
                </div>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
