"use client"
import { useState } from "react";

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5"  y1="12" x2="19" y2="12"/>
  </svg>
);

const faqs = [
  {
    q: "Does Genei sound robotic?",
    a: "No. Genei uses advanced conversational AI designed to sound natural and human-like. It adapts its tone, pacing, and language based on your business and your callers, so most people don't even realize they're speaking with an AI.",
  },
  {
    q: "Does it handle outbound calls too?",
    a: "Yes. Genei can handle both inbound and outbound calls. Whether you need to follow up on leads, confirm appointments, or run outreach campaigns, Genei manages the entire conversation flow automatically.",
  },
  {
    q: "Does it connect to our CRM?",
    a: "Absolutely. Genei integrates with popular CRMs and scheduling tools. All call data, lead information, and appointment bookings are automatically synced so your team always has up-to-date records.",
  },
  {
    q: "How fast can we launch?",
    a: "Most businesses are live within a few days. After your onboarding session, we handle all configuration and testing. You don't need any technical setup — just tell us your call goals and we handle the rest.",
  },
  {
    q: "Who Genei Is Best For?",
    a: "Genei is ideal for small to mid-sized businesses that receive a high volume of calls but can't afford to miss any. Real estate teams, healthcare offices, service businesses, and sales teams all benefit greatly from Genei's always-on availability.",
  },
];

const GenieFAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center [font-family:'Inter',sans-serif] text-white">

      {/* top-center radial glow (replaces ::before) */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] z-0"
        style={{ background: "radial-gradient(ellipse, rgba(0,100,55,0.14) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1110px] mx-auto">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.06] px-[1.15rem] py-[0.42rem] text-[0.82rem] text-white/65 mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
          Your Autonomous Digital Operators
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-normal tracking-[-0.02em] mx-auto mb-12 max-w-[560px]">
          Frequently Asked<br />Questions
        </h2>

        {/* Accordion list */}
        <div className="flex flex-col gap-[0.65rem] text-left w-full max-w-[1240px] mx-auto">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[14px] overflow-hidden border transition-all duration-[250ms]
                  bg-[#111614]
                  ${isOpen
                    ? "border-[rgba(0,200,126,0.25)] shadow-[0_0_18px_rgba(0,200,126,0.07)]"
                    : "border-white/[0.07]"
                  }`}
              >
                {/* Question row */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-[1.15rem]
                    bg-transparent border-none cursor-pointer text-left text-white
                    text-[0.95rem] sm:text-[0.95rem] font-medium leading-[1.4]
                    transition-colors duration-200 [font-family:'Inter',sans-serif]"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {/* Plus/close icon */}
                  <span
                    className={`flex-shrink-0 w-[26px] h-[26px] rounded-[6px] flex items-center justify-center
                      text-[1.1rem] leading-none border
                      transition-all duration-300
                      ${isOpen
                        ? "rotate-45 border-[rgba(0,200,126,0.5)] bg-[rgba(0,200,126,0.1)] text-[#00c87e]"
                        : "border-white/25 text-white/70"
                      }`}
                  >
                    <PlusIcon />
                  </span>
                </button>

                {/* Answer — grid accordion animation */}
                <div
                  className={`grid transition-[grid-template-rows] duration-[350ms] ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-6 pb-[1.3rem]">
                      <p className="text-[0.86rem] text-white/48 leading-[1.8] m-0 border-t border-white/[0.06] pt-4">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default GenieFAQ;