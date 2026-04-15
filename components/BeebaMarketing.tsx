const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "From Keywords to a Clear Content Plan",
    desc: "Start with a few keywords or topics. Beeba reviews competitors, studies patterns, and builds a structured content plan. You get a clear weekly or monthly calendar instead of guessing what to post next.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "One Click Content Creation",
    desc: "Beeba turns ideas into ready posts quickly. It generates clear, professional text and creates on-brand visuals. You can review, adjust, or regenerate before approving, so content stays aligned with your brand.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Social Media Scheduling and Posting",
    desc: "Once approved, content is scheduled and published at the right time. Posting stays consistent without daily reminders or last-minute work.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Engagement and Lead Handling",
    desc: "When people comment or message, Beeba keeps the conversation moving. Engagement is captured, and interested contacts can be guided into follow-up flows, so opportunities are not missed.",
  },
];

export default function BeebaMarketing() {
  return (
    <section className="relative overflow-hidden [font-family:'Inter',sans-serif] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(0,200,126,0.08) 0%, rgba(0,200,126,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">

        {/* ── LEFT ── */}
        <div>
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-[0.42rem] text-[0.82rem] text-white/70 mb-8">
            <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
            All-In-One Marketing Engine
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(32px,5vw,58px)] font-semibold leading-[1.1] tracking-[-0.02em] m-0 mb-8 text-white">
            360° Autonomous<br />Marketing Solution
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-5 text-[0.9rem] text-white/50 leading-[1.85] max-w-[520px]">
            <p className="m-0">
              Beeba brings every part of social media into one clear system. From planning to posting to basic lead handling, everything works together without constant manual effort. This creates a smoother workflow, stronger consistency, and less day-to-day pressure on your team.
            </p>
            <p className="m-0">
              Instead of managing disconnected tasks across different tools, Beeba helps unify the process into one structured flow. Content planning, writing, scheduling, publishing, and basic response handling can all move in alignment, making execution feel more organized and less reactive.
            </p>
            <p className="m-0">
              The result is a marketing system that supports daily visibility without demanding constant attention. Your team spends less time chasing routine tasks and more time focusing on direction, growth, and higher-value decisions that move the business forward.
            </p>
          </div>
        </div>

        {/* ── RIGHT — 2×2 feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-[18px] border border-white/[0.09] p-6
                backdrop-blur-[12px]
                transition-all duration-300
                hover:border-[rgba(0,200,126,0.22)] hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,200,126,0.08)]"
              style={{
                background: "linear-gradient(145deg, rgba(10,28,20,0.85) 0%, rgba(5,14,10,0.95) 100%)",
              }}
            >
              {/* Icon circle */}
              <div
                className="mb-5 w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
                  border border-[rgba(0,200,126,0.2)]
                  group-hover:border-[rgba(0,200,126,0.4)] transition-colors duration-300"
                style={{ background: "rgba(0,200,126,0.1)" }}
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-[1rem] font-semibold text-white leading-[1.35] mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-[0.82rem] text-white/45 leading-[1.75] m-0">
                {f.desc}
              </p>

              {/* Subtle bottom glow on hover */}
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,126,0.35), transparent)" }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
