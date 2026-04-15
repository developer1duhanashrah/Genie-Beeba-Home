import React from "react";

/* Keyframe animation retained for star pulsing (cannot be expressed in Tailwind) */
const animStyle = `
  @keyframes starPulse {
    0%, 100% { transform: scale(1)    rotate(0deg);  opacity: 1;   }
    50%       { transform: scale(1.4) rotate(20deg); opacity: 0.7; }
  }
  .fcta-star-pulse { animation: starPulse 2.5s ease-in-out infinite; }
`;



const steps = [
  { img: "/images/InboubdOroutBound.png", label: "Inbound or Outbound\nCall Starts"    },
  { img: "/images/NaturalGreeting.png",   label: "Natural Greeting\nand Flow"           },
  { img: "/images/UnderstandsIntent.png", label: "Understands\nIntent"                 },
  { img: "/images/Qualifiesthe.png",      label: "Qualifies the\nLead"                  },
  { img: "/images/BookIcon.png",          label: "Books or Confirms\nAppointment"       },
  { img: "/images/CRMIcon.png",           label: "Updates CRM\nAutomatically"           },
];

const FromCallToAppointment = () => (
  <>
    <style>{animStyle}</style>

    <div className="flex flex-col items-center py-16 sm:py-20 gap-5 relative [font-family:'Inter',sans-serif] text-white">

      {/* Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-[0.45rem] text-[0.82rem] text-white/70 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#00c87e] shadow-[0_0_6px_#00c87e] flex-shrink-0" />
        How It Works
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,4.5vw,48px)] font-normal leading-none text-center text-white tracking-[-0.02em] m-0">
        From Call to Appointment
        <br />
        Effortlessly with Genie
      </h2>

      {/* Subtext */}
      <p className="text-[clamp(0.9rem,1.5vw,1rem)] font-normal text-white/55 text-center max-w-[520px] leading-[1.7] mt-1 mb-8">
        Inbound and outbound calls are answered with natural conversation flow,
        so leads are captured and moved forward automatically.
      </p>

      {/* Steps Row — mobile: 2 cols, sm: 3 cols, lg: all in one row with connectors */}
     

    </div>
     <div className="flex flex-wrap lg:flex-nowrap items-start  w-full px-4 sm:px-6 lg:px-20 pr-5">
        {steps.map(({ img, label }, i) => (
          <React.Fragment key={i}>
            {/* Step */}
            <div
              key={label}
              className="group flex flex-col items-center gap-4
                w-[calc(50%-1rem)] mx-2 mb-8
                sm:w-[calc(33.333%-1rem)]
                lg:flex-1 lg:w-auto lg:mx-0 lg:mb-0
                min-w-0"
            >
              {/* Icon box */}
              <div
                className="relative w-[100px] h-[100px] rounded-[24px] flex items-center justify-center
                  text-white/90 flex-shrink-0 overflow-hidden
                  border border-white/10
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_32px_rgba(0,0,0,0.3)]
                  transition-all duration-[250ms] ease-out cursor-pointer
                  group-hover:border-[rgba(0,200,126,0.35)] group-hover:-translate-y-1
                  group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_12px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,200,126,0.12)]"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                }}
              >
                {/* Radial glow overlay */}
                <div
                  className="absolute inset-0 rounded-[24px] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,126,0.12) 0%, transparent 65%)" }}
                />
                <img src={img} alt={label} className="w-[100px] h-[100px] object-contain relative z-10" />
              </div>

              {/* Label */}
              <span className="text-[13px] font-medium leading-[1.35] text-center max-w-[140px] mt-[10px] text-[#D1D5DC]">
                {label.split("\n").map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </span>
            </div>

            {/* Connector — sibling flex item, vertically centered with icon (mt-[50px] = half of 100px icon) */}
            {i < steps.length - 1 && (
              <div
                key={`conn-${i}`}
                className="hidden lg:flex items-center justify-center gap-1 mt-[50px] flex-shrink-0 w-[60px]"
              >
                <span className="h-[1.5px] w-4 bg-white/20 rounded-sm" />
                <img
                  src="/images/Star.png"
                  alt="star"
                  className="fcta-star-pulse w-4 h-4 drop-shadow-[0_0_4px_#00c87e]"
                />
                <span className="h-[1.5px] w-4 bg-white/20 rounded-sm" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
  </>
);

export default FromCallToAppointment;
