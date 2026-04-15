import Image from "next/image";

/* ── Animations only ─────────────────────────────────────────────────────────
   Contains ONLY: @keyframes, animation class bindings, ::before pseudo-element,
   and :hover glow rules – nothing else. All other styles live in Tailwind.
────────────────────────────────────────────────────────────────────────────── */
const animStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap');

  /* Letter entrance */
  @keyframes letterLoop {
    0%,10% { opacity: 0; transform: translateY(28px);  }
    25%    { opacity: 1; transform: translateY(0px);   }
    65%    { opacity: 1; transform: translateY(0px);   }
    80%    { opacity: 0; transform: translateY(-20px); }
    100%   { opacity: 0; transform: translateY(28px);  }
  }
  .bm-letter-b  { animation: letterLoop 6s ease infinite 0s;   display: inline-block; opacity: 0; }
  .bm-letter-e1 { animation: letterLoop 6s ease infinite 0.5s; display: inline-block; opacity: 0; }
  .bm-letter-b2 { animation: letterLoop 6s ease infinite 1.0s; display: inline-block; opacity: 0; }
  .bm-letter-a  { animation: letterLoop 6s ease infinite 1.5s; display: inline-block; opacity: 0; }

  /* Accent bar — ::before cannot be expressed in Tailwind */
  .bm-letter-left::before {
    content: '';
    position: absolute;
    left: -4px; top: 10%;
    width: 5px; height: 80%;
    background: linear-gradient(to bottom, #00c87e, transparent);
    border-radius: 3px;
  }

  /* Orbit arm rotations */
  @keyframes as1 { from{transform:rotate(-90deg)}  to{transform:rotate(270deg)}  }
  @keyframes as2 { from{transform:rotate(-15deg)}  to{transform:rotate(345deg)}  }
  @keyframes as3 { from{transform:rotate(90deg)}   to{transform:rotate(450deg)}  }
  @keyframes as4 { from{transform:rotate(175deg)}  to{transform:rotate(535deg)}  }
  .bm-arm-1 { animation: as1 14s linear infinite; }
  .bm-arm-2 { animation: as2 14s linear infinite; }
  .bm-arm-3 { animation: as3 14s linear infinite; }
  .bm-arm-4 { animation: as4 14s linear infinite; }

  /* Icon counter-rotations */
  @keyframes ic1 { from{transform:rotate(90deg)}   to{transform:rotate(-270deg)} }
  @keyframes ic2 { from{transform:rotate(15deg)}   to{transform:rotate(-345deg)} }
  @keyframes ic3 { from{transform:rotate(-90deg)}  to{transform:rotate(-450deg)} }
  @keyframes ic4 { from{transform:rotate(-175deg)} to{transform:rotate(-535deg)} }
  .bm-arm-1 .bm-ico { animation: ic1 14s linear infinite; }
  .bm-arm-2 .bm-ico { animation: ic2 14s linear infinite; }
  .bm-arm-3 .bm-ico { animation: ic3 14s linear infinite; }
  .bm-arm-4 .bm-ico { animation: ic4 14s linear infinite; }

  /* Icon hover glows — :hover + complex inset shadows can't be done in Tailwind */
  .bm-ico { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease; }
  .bm-ico:hover { transform: scale(1.25); }
  .bm-arm-1 .bm-ico:hover { background:rgba(24,119,242,0.25);  border-color:rgba(24,119,242,0.7);  box-shadow:0 0 0 3px rgba(24,119,242,0.2),0 8px 32px rgba(24,119,242,0.5),inset 0 1px 0 rgba(255,255,255,0.2); }
  .bm-arm-2 .bm-ico:hover { background:rgba(0,242,234,0.15);   border-color:rgba(0,242,234,0.7);   box-shadow:0 0 0 3px rgba(0,242,234,0.2),0 8px 32px rgba(254,44,85,0.4),inset 0 1px 0 rgba(255,255,255,0.2); }
  .bm-arm-3 .bm-ico:hover { background:rgba(225,48,108,0.2);   border-color:rgba(225,48,108,0.7);  box-shadow:0 0 0 3px rgba(225,48,108,0.2),0 8px 32px rgba(130,58,180,0.5),inset 0 1px 0 rgba(255,255,255,0.2); }
  .bm-arm-4 .bm-ico:hover { background:rgba(10,102,194,0.25);  border-color:rgba(10,102,194,0.7);  box-shadow:0 0 0 3px rgba(10,102,194,0.2),0 8px 32px rgba(10,102,194,0.5),inset 0 1px 0 rgba(255,255,255,0.2); }

  /* Star orbit + counter-rotation */
  @keyframes starOrbit {
    from { transform: translate(-50%,-50%) rotate(0deg);   }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes starCounter {
    from { transform: rotate(0deg);    }
    to   { transform: rotate(-360deg); }
  }
  .bm-stars-wrap { animation: starOrbit 20s linear infinite; }
  .bm-star-svg {
    animation: starCounter 20s linear infinite;
    filter: drop-shadow(0 0 4px #00c87e) drop-shadow(0 0 10px rgba(0,200,126,0.6));
  }

  /* Character float */
  @keyframes bFloat {
    0%,100% { transform: translateY(0px);   }
    50%     { transform: translateY(-16px); }
  }
  .bm-char-float { animation: bFloat 4s ease-in-out infinite; }

  /* Sparkle twinkle */
  @keyframes twinkle {
    0%,100% { opacity:0.15; transform:scale(0.5); }
    50%     { opacity:1;    transform:scale(1.4); }
  }
  .bm-spark-anim { animation: twinkle 2s ease-in-out infinite; }
`;


const sparks = [
  { w: 5, top: "14%", left: "22%", delay: "0s"    },
  { w: 4, top: "10%", left: "64%", delay: "0.55s" },
  { w: 6, top: "70%", left: "18%", delay: "1.1s"  },
  { w: 4, top: "76%", left: "70%", delay: "1.6s"  },
  { w: 3, top: "36%", left: "8%",  delay: "0.8s"  },
  { w: 5, top: "26%", left: "86%", delay: "0.3s"  },
  { w: 3, top: "55%", left: "88%", delay: "1.3s"  },
  { w: 4, top: "82%", left: "44%", delay: "0.7s"  },
];

const BeebaMobile = () => (
  <>
    <style>{animStyles}</style>

    {/* ── Section ── background gradient + font via Tailwind arbitrary values */}
    <section className="
      min-h-screen flex flex-col items-center justify-center
      relative overflow-hidden py-8 lg:py-16
      [background:radial-gradient(circle_at_50%_0%,rgba(0,255,200,0.10)_0%,transparent_60%),#000000]
      [font-family:'Inter',sans-serif]
    ">

      {/* Teal radial glow blob */}
      <div className="
        absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[1100px] h-[1100px] rounded-full blur-[40px] pointer-events-none z-0
        [background:radial-gradient(circle,rgba(0,255,170,0.28)_0%,rgba(0,180,120,0.18)_25%,rgba(0,120,80,0.10)_45%,transparent_70%)]
      " />

      {/* Main row */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-[1200px] px-2">

        {/* BE — left */}
        <div
          className="
            bm-letter-left font-black leading-none tracking-[-0.03em]
            text-[#04C09C] select-none shrink-0 relative
            text-[clamp(100px,16vw,210px)] max-[1100px]:text-[clamp(65px,9vw,110px)] max-[700px]:text-[clamp(50px,10vw,90px)]
          "
        >
          <span className="bm-letter-b">B</span>
          <span className="bm-letter-e1">E</span>
        </div>

        {/* Orbit stage */}
        <div className="
          relative shrink-0 flex items-center justify-center
          w-[700px] h-[700px] max-[1100px]:w-[500px] max-[1100px]:h-[500px] max-[700px]:w-[280px] max-[700px]:h-[280px]
        ">

          {/* Orbit ring */}
          <Image
            src="/images/Circle.png"
            alt=""
            width={620}
            height={620}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none z-[1] w-[620px] max-[1100px]:w-[440px] max-[700px]:w-[245px]"
          />

          {/* Revolving stars */}
          <div className="
            bm-stars-wrap
            absolute top-1/2 left-1/2 w-[620px] h-[620px]
            rounded-full pointer-events-none z-[3]
            max-[1100px]:w-[440px] max-[1100px]:h-[440px]
            max-[700px]:w-[240px] max-[700px]:h-[240px]
          ">
            {[0, 72, 144, 216, 288].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const r = 310;
              const x = 310 + r * Math.cos(rad) - 6;
              const y = 310 + r * Math.sin(rad) - 6;
              return (
                <div key={i} className="absolute" style={{ left: x, top: y }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#00c87e"
                    className="bm-star-svg"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Sparkles — size/position/delay are dynamic, must stay inline */}
          {sparks.map((s, i) => (
            <div
              key={i}
              className="bm-spark-anim absolute rounded-full bg-[#00c87e] pointer-events-none z-[2] shadow-[0_0_8px_#00c87e,0_0_16px_rgba(0,200,126,0.4)]"
              style={{ width: s.w, height: s.w, top: s.top, left: s.left, animationDelay: s.delay }}
            />
          ))}

          {/* Orbit arm 1 — Facebook */}
          <div className="bm-arm-1 absolute top-1/2 left-1/2 w-[310px] origin-[left_center] z-[5] max-[1100px]:w-[220px] max-[700px]:w-[120px]">
            <div className="
              bm-ico absolute -right-[34px] -top-[34px]
              w-[68px] h-[68px] rounded-full backdrop-blur-md
              flex items-center justify-center cursor-pointer
              bg-white/[0.08] border-[1.5px] border-white/20
              shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]
              max-[1100px]:w-[52px] max-[1100px]:h-[52px] max-[1100px]:-right-[26px] max-[1100px]:-top-[26px]
              max-[700px]:w-10 max-[700px]:h-10 max-[700px]:-right-5 max-[700px]:-top-5
            ">
              <Image src="/images/Facbook.png" alt="Facebook" width={44} height={44} className="object-contain" />
            </div>
          </div>

          {/* Orbit arm 2 — TikTok */}
          <div className="bm-arm-2 absolute top-1/2 left-1/2 w-[310px] origin-[left_center] z-[5] max-[1100px]:w-[220px] max-[700px]:w-[120px]">
            <div className="
              bm-ico absolute -right-[34px] -top-[34px]
              w-[68px] h-[68px] rounded-full backdrop-blur-md
              flex items-center justify-center cursor-pointer
              bg-white/[0.08] border-[1.5px] border-white/20
              shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]
              max-[1100px]:w-[52px] max-[1100px]:h-[52px] max-[1100px]:-right-[26px] max-[1100px]:-top-[26px]
              max-[700px]:w-10 max-[700px]:h-10 max-[700px]:-right-5 max-[700px]:-top-5
            ">
              <Image src="/images/TikTok.png" alt="TikTok" width={44} height={44} className="object-contain" />
            </div>
          </div>

          {/* Orbit arm 3 — Instagram */}
          <div className="bm-arm-3 absolute top-1/2 left-1/2 w-[310px] origin-[left_center] z-[5] max-[1100px]:w-[220px] max-[700px]:w-[120px]">
            <div className="
              bm-ico absolute -right-[34px] -top-[34px]
              w-[68px] h-[68px] rounded-full backdrop-blur-md
              flex items-center justify-center cursor-pointer
              bg-white/[0.08] border-[1.5px] border-white/20
              shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]
              max-[1100px]:w-[52px] max-[1100px]:h-[52px] max-[1100px]:-right-[26px] max-[1100px]:-top-[26px]
              max-[700px]:w-10 max-[700px]:h-10 max-[700px]:-right-5 max-[700px]:-top-5
            ">
              <Image src="/images/Instagram.png" alt="Instagram" width={44} height={44} className="object-contain" />
            </div>
          </div>

          {/* Orbit arm 4 — LinkedIn */}
          <div className="bm-arm-4 absolute top-1/2 left-1/2 w-[310px] origin-[left_center] z-[5] max-[1100px]:w-[220px] max-[700px]:w-[120px]">
            <div className="
              bm-ico absolute -right-[34px] -top-[34px]
              w-[68px] h-[68px] rounded-full backdrop-blur-md
              flex items-center justify-center cursor-pointer
              bg-white/[0.08] border-[1.5px] border-white/20
              shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]
              max-[1100px]:w-[52px] max-[1100px]:h-[52px] max-[1100px]:-right-[26px] max-[1100px]:-top-[26px]
              max-[700px]:w-10 max-[700px]:h-10 max-[700px]:-right-5 max-[700px]:-top-5
            ">
              <Image src="/images/LinkedIn.png" alt="LinkedIn" width={44} height={44} className="object-contain" />
            </div>
          </div>

          {/* Beeba character */}
          <Image
            src="/images/BeebaMobile.png"
            alt="Beeba"
            width={400}
            height={400}
            className="
              bm-char-float relative z-[4] w-[400px] max-[1100px]:w-[300px] max-[700px]:w-[200px] object-contain
              [filter:drop-shadow(0_0_50px_rgba(0,200,126,0.3))_drop-shadow(0_20px_40px_rgba(0,0,0,0.5))]
            "
          />

        </div>

        {/* BA — right */}
        <div className="
          font-black leading-none tracking-[-0.03em]
          text-[#04C09C] select-none shrink-0
          text-[clamp(100px,16vw,210px)] max-[1100px]:text-[clamp(65px,9vw,110px)] max-[700px]:text-[clamp(50px,10vw,90px)]
        ">
          <span className="bm-letter-b2">B</span>
          <span className="bm-letter-a">A</span>
        </div>

      </div>

  

    </section>
  </>
);

export default BeebaMobile;