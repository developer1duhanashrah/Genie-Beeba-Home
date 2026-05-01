import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Genie Beeba",
};
const STARS: { top: string; left: string; size: string; color: string; duration: string; delay: string }[] = [
	
	 { top: "12%",   left: "47%", size: "h-4 w-4", color: "text-[#00C19C]", duration: "3.7s", delay: "3.5s"  },
	//  { top: "43%",  left: "18%", size: "h-4 w-4", color: "text-[#00C19C]", duration: "5.2s", delay: "0.3s"  },
	//  { top: "28%",  left: "72%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "4.8s", delay: "4.1s"  },
	//  { top: "82%",  left: "38%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "3.4s", delay: "1.8s"  },

];

const StarIcon = () => (
	<svg viewBox="0 0 24 24" className="fill-current">
		<path d="M12 1.2 14.8 9l7.8 2.8-7.8 2.8L12 22.4l-2.8-7.8L1.4 11.8 9.2 9z" />
	</svg>
);

const supportOptions = [
  "Select",
  "AI System Setup",
  "Workflow Automation",
  "General Consultation",
  "Partnership Inquiry",
];

import CustomSelect from "../../components/CustomSelect";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-30">
      <div className="bg-[radial-gradient(circle,rgba(0,224,190,0.20)_0%,rgba(0,224,190,0)_72%)]">
 
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-4 sm:px-6 sm:pt-20 lg:px-8">
        
         <div
					aria-hidden="true"
					className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(3,176,162,0.32),rgba(0,0,0,0.96)_62%)]"
				/> 
			 <div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
				/> 
        {/* <div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 h-[280px] [background-image:linear-gradient(to_right,rgba(33,63,62,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,63,62,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_62%_74%_at_50%_0%,black_44%,transparent_92%)]"
			/>  
    */}
        
				
          
      
         {/* Animated floating stars */}
				{STARS.map((s, i) => (
					<span
						key={i}
						aria-hidden="true"
						className={`star-animate pointer-events-none absolute ${s.size} ${s.color}`}
						style={{ top: s.top, left: s.left, animationDuration: s.duration, animationDelay: s.delay }}
					>
						<StarIcon />
					</span>
				))}

        <div
          className="mx-auto max-w-[980px] text-center px-2 sm:px-6"
          style={{
            background: 'radial-gradient(circle at 50% 36%, rgba(6,188,170,0.06) 0%, rgba(6,188,170,0.03) 12%, transparent 48%)',
          }}
        >
         
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a6d66] bg-[#013732] px-4 py-2 text-[14px] font-medium text-[#b4e3da] shadow-[inset_0_0_0_1px_rgba(35,120,108,0.38),0_8px_24px_rgba(0,0,0,0.3)]">
            <span className="h-3 w-3 rounded-full bg-[#20d0bb] shadow-[0_0_12px_rgba(32,208,187,0.95)]" />
            Support Available 24/7
          </div>

          <h1 className="mt-5 text-[36px] sm:text-[52px] md:text-[76px] lg:text-[86px] font-medium leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_10px_40px_rgba(6,188,170,0.08)]">
            Get In Touch
          </h1>

          <p className="mx-auto mt-4 max-w-[780px] text-[14px] leading-[1.65] text-[#93a39f] md:text-[19px]">
           If you have questions about our AI systems or want to explore how they fit your business, use the form below. Share a few details, and we’ll guide you on the next steps.

          </p>
       <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[800px] -z-10 pointer-events-none [background-image:linear-gradient(to_right,rgba(33,63,62,0.42)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,63,62,0.32)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_62%_74%_at_50%_0%,black_56%,transparent_96%)]"
              />  
        </div>
         
        <div className="mx-auto mt-12 w-full max-w-[860px] rounded-[18px] px-4 sm:px-7 py-8 relative overflow-hidden">
          {/* Decorative boxes background (subtle, non-interactive) - hidden on small screens */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute right-6 top-6 bottom-6 w-1/2 opacity-60 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(33,63,62,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,63,62,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <form className="space-y-4 bg-black px-4 sm:px-5 py-5 rounded-[18px] border border-white/10" action="#" method="post">
           
               <label htmlFor="email" className="mb-2 block text-[12px] font-medium text-[#adc0be]">
                  Full Name
                </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter Name"
                className="h-11 w-full rounded-[7px] border border-[#273235] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#728086] outline-none transition focus:border-[#2dd8be] focus:shadow-[0_0_0_3px_rgba(45,216,190,0.16)]"
              />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-[12px] font-medium text-[#adc0be]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="h-11 w-full rounded-[7px] border border-[#273235] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#728086] outline-none transition focus:border-[#2dd8be] focus:shadow-[0_0_0_3px_rgba(45,216,190,0.16)]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-[12px] font-medium text-[#adc0be]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Number"
                  className="h-11 w-full rounded-[7px] border border-[#273235] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#728086] outline-none transition focus:border-[#2dd8be] focus:shadow-[0_0_0_3px_rgba(45,216,190,0.16)]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="helpTopic" className="mb-2 block text-[12px] font-medium text-[#adc0be]">
                How can we help you?
              </label>
              <CustomSelect id="helpTopic" name="helpTopic" defaultValue="Select" options={supportOptions} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-[12px] font-medium text-[#adc0be]">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={9}
                placeholder="Enter Message here"
                className="w-full resize-y rounded-[7px] border border-[#273235] bg-[#0b0f11] px-4 py-3 text-[14px] text-white placeholder:text-[#728086] outline-none transition focus:border-[#2dd8be] focus:shadow-[0_0_0_3px_rgba(45,216,190,0.16)]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[linear-gradient(180deg,#19d2b6_0%,#00b895_100%)] text-[15px] font-semibold text-[#ecffff] shadow-[0_10px_26px_rgba(0,184,149,0.35)] transition hover:brightness-110"
            >
              Lets Connect
              <svg viewBox="0 0 20 20" className="h-6 w-8 fill-none stroke-current stroke-[3]" aria-hidden="true">
								<path d="M4 10H16" />
								<path d="M11 5L16 10L11 15" />
							</svg>
            
            </button>
          </form>
        </div>
      </section>
    </div>
     
    </main>
  );
}
