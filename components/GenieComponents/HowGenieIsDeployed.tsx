import Image from "next/image";

const HowGenieIsDeployed = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center [font-family:'Inter',sans-serif] text-white">

      {/* Dot grid overlay (replaces ::before) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(rgba(0,200,126,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Center radial glow (replaces ::after) */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,100,55,0.16) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[1050px] mx-auto">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.06] px-[1.15rem] py-[0.42rem] text-[0.82rem] text-white/65 mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-[#00c87e] shadow-[0_0_7px_#00c87e] flex-shrink-0" />
          Deployed
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] mx-auto mb-5 max-w-[500px]">
          How Genie<br />Is Deployed
        </h2>

        {/* Subtitle */}
        <p className="text-[0.92rem] text-white/[0.42] leading-[1.8] max-w-[560px] mx-auto mb-16">
          Getting started with Genie is simple. We handle the setup and
          configuration, so you can focus on your business while the system
          is prepared for you.
        </p>

         </div>
        {/* Cards row — stacked on mobile/tablet, side-by-side on desktop */}
     <div className="flex flex-col md:flex-row md:items-start gap-8 w-full px-4 sm:px-6 lg:px-16">

          {/* Card 1 — tallest, teal glow border */}
          <div
            className="w-full md:flex-1 rounded-[20px] overflow-hidden
              flex flex-col text-center pt-[1.8rem] px-[1.5rem]
              border-[1.5px] border-[rgba(0,200,126,0.45)]
              shadow-[0_0_28px_rgba(0,200,126,0.14),0_0_55px_rgba(0,200,126,0.06),0_18px_50px_rgba(0,0,0,0.55)]
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,200,126,0.22),0_0_80px_rgba(0,200,126,0.09),0_28px_65px_rgba(0,0,0,0.6)]"
            style={{ background: "linear-gradient(175deg, #071a10 0%, #030d07 100%)" }}
          >
            <div className="flex-shrink-0">
              <h3 className="text-[1.15rem] font-bold text-white m-0 mb-[0.55rem] leading-[1.25]">Book Your Session</h3>
              <p className="text-[0.82rem] text-white/45 leading-[1.65] m-0">
                Share your call goals, scripts, and business details in a short meeting.
              </p>
            </div>
            <div >
             
              <div
                className=" "
                
              />
              <Image
                src="/images/beeba-calendar.png"
                alt=""
                width={500}
                height={300}
                className=""
              />
            </div>
          </div>

          {/* Card 2 — medium */}
          <div
            className="w-full md:flex-1 md:mt-[30px] rounded-[20px]
              flex flex-col text-center pt-[1.6rem] px-[1.4rem]
              bg-black border border-white/10
              shadow-[0_14px_50px_rgba(0,0,0,0.5)]
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2 hover:border-white/[0.18] hover:shadow-[0_22px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="">
              <h3 className="text-[1.05rem] font-bold text-white m-0 mb-[0.55rem] leading-[1.25]">We Set Up The System</h3>
              <p className="text-[0.78rem] text-white/40 leading-[1.65] m-0">
                We configure Genie around your call flow, tone, and scheduling rules.
              </p>
            </div>
            <div className="relative flex-1 flex items-end justify-center overflow-visible mt-3 min-h-[160px]">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[180px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(0,200,126,0.18) 0%, transparent 70%)" }}
              />
              <img
                src="/images/beeba-setup.png"
                alt="Beeba system setup"
                className="w-[260px] lg:w-[390px] h-auto object-contain relative z-10 block"
              />
            </div>
          </div>

          {/* Card 3 — shortest */}
          <div
            className="w-full md:flex-1 md:mt-[60px] rounded-[20px]
              flex flex-col text-center pt-[1.4rem] px-[1.2rem]
              bg-black border border-white/[0.07]
              shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              transition-all duration-300 cursor-pointer
              hover:-translate-y-2 hover:border-white/[0.13] hover:shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="">
              <h3 className="text-[0.95rem] font-bold text-white m-0 mb-[0.55rem] leading-[1.25]">Go Live With Genei</h3>
              <p className="text-[0.74rem] text-white/[0.38] leading-[1.65] m-0">
                Once ready, Genie starts handling calls without complex setup or daily management.
              </p>
            </div>
            <div className="relative flex-1 flex items-end justify-center overflow-visible mt-3 min-h-[140px]">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[180px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(0,200,126,0.18) 0%, transparent 70%)" }}
              />
              <img
                src="/images/beeba-live.png"
                alt="Beeba going live"
                className="w-[200px] lg:w-[240px] h-auto object-contain relative z-10 block"
              />
            </div>
          </div>

      
      </div>
    </section>
  );
};


export default HowGenieIsDeployed;