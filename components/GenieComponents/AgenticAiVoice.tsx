const HeadphonesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z" />
    <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const features = [
  {
    icon: <HeadphonesIcon />,
    title: "Follows Your Call Flow",
    text: "Configured to match your specific process and requirements",
  },
  {
    icon: <TargetIcon />,
    title: "Qualifies Callers",
    text: "Asks the right questions to identify serious opportunities",
  },
  {
    icon: <ChatIcon />,
    title: "Collects Information",
    text: "Gathers exactly what you need to move forward",
  },
];

const AgenticAiVoice = () => (
  <section
    className="relative overflow-hidden text-white text-center mt-0 pt-10 lg:pt-14 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 [font-family:'Inter',sans-serif]"
    style={{
      background: "linear-gradient(to bottom, #020c08 0%, #010806 50%, #000000 100%)",
    }}
  >
    {/* Top bridge glow */}
    <div
      className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none z-0"
      style={{ background: "radial-gradient(ellipse, rgba(0,100,55,0.18) 0%, transparent 70%)" }}
    />

    {/* Corner glow */}
    <div
      className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(0,100,55,0.28) 0%, transparent 65%)" }}
    />

    {/* Inner container */}
    <div className="relative z-10 max-w-[860px] mx-auto">

      {/* Pill badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-[0.42rem] text-[0.82rem] text-white/65 mb-7">
        <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
        Deployment Status
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(28px,4.5vw,48px)] font-normal leading-tight tracking-[-0.02em] mx-auto mb-5 max-w-[620px]">
        An Agentic AI Voice
        <br />
        System, Not an IVR
      </h2>

      {/* Subtext */}
      <p className="text-[clamp(0.78rem,1.4vw,0.9rem)] text-white/40 leading-[1.8] max-w-[520px] mx-auto mb-10 px-2">
        Genei is not a recorded menu or voicemail system. It is an agentic AI
        voice system designed to listen, respond, and guide conversations in a
        natural way.
      </p>

      {/* Card */}
      <div
        className="rounded-[22px] px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-9 lg:px-12"
        style={{
          background: "linear-gradient(160deg, #071410 0%, #040e0a 100%)",
          border: "1px solid rgba(0,200,126,0.25)",
          boxShadow: "0 0 20px rgba(0,200,126,0.12), 0 0 50px rgba(0,200,126,0.07), 0 0 90px rgba(0,200,126,0.04), 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10">
          {features.map((f, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0
                  bg-gradient-to-br from-[#00c87e] to-[#009960]
                  shadow-[0_6px_24px_rgba(0,200,126,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]
                  transition-all duration-300 ease-out
                  group-hover:-translate-y-1 group-hover:scale-105
                  group-hover:shadow-[0_10px_30px_rgba(0,200,126,0.5)]"
              >
                {f.icon}
              </div>
              <h3 className="text-[0.95rem] font-bold text-white mb-2 leading-snug">{f.title}</h3>
              <p className="text-[0.82rem] text-white/40 leading-[1.7] max-w-[200px] mx-auto">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] mb-6" />

        {/* Bottom text */}
        <p className="text-[0.92rem] text-white/55">
          So calls <span className="text-[#00c87e] font-semibold">move forward</span> instead
          of stopping at &ldquo;leave a message.&rdquo;
        </p>
      </div>

    </div>
  </section>
);

export default AgenticAiVoice;
