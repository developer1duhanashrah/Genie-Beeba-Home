import Image from "next/image";
import MediaCard from "./MediaCard";

export default function BeebaWorkflow() {
  return (
    <>
     <section className="relative flex flex-col items-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-0 [font-family:'Inter',sans-serif]">

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#00c87e]/35 bg-[#00c87e]/10 px-4 py-1.5 mb-8">
        <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e]" />
        <span className="text-[0.78rem] text-white/70 tracking-wide">Simplify Your Social Workflow</span>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-[clamp(26px,5.5vw,54px)] font-semibold text-white text-center leading-[1.2] tracking-[-0.02em] mb-5 max-w-[520px] px-2">
        Ready to Power Your<br />Business with Beeba?
      </h2>

      {/* Subtext */}
      <p className="relative z-10 text-[clamp(0.78rem,1.4vw,0.84rem)] text-white/50 text-center max-w-[560px] leading-[1.7] mb-8 px-2">
        Stop Managing Social Media Tasks And Get Back To Leading Your Business. Beeba Is Built To Bring Consistency And Ease
        To Your Content Operations. Book A Meeting Today, And We&apos;ll Show You How Beeba Can Be Set Up For Your Workflow.
      </p>

      {/* CTA — white outline button, transparent background */}
      <button className="relative z-10 inline-flex items-center gap-2.5 rounded-full border border-white/75 bg-transparent text-white text-[0.78rem] font-semibold tracking-[0.1em] uppercase px-6 py-2.5 mb-10 hover:bg-white/8 transition-colors duration-200">
        Book a Meeting
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

     

    </section>
     <MediaCard />
    </>
   
  );
}
