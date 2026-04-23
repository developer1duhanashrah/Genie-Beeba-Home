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
    <main className="min-h-screen bg-[#040708] text-white">
      <style>{`
        #helpTopic option:hover {
          background-color: #00C19C !important;
          color: white !important;
        }
        #helpTopic option:checked {
          background-color: #00C19C !important;
          color: white !important;
        }
        #helpTopic option {
          background-color: #0b0f11;
          color: #8f999f;
        }
      `}</style>
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_7%,rgba(0,207,177,0.28)_0%,rgba(0,207,177,0.12)_26%,rgba(0,207,177,0.03)_48%,rgba(4,7,8,1)_68%)]" />
          <div className="absolute left-1/2 top-[150px] h-[280px] w-[860px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,224,190,0.16)_0%,rgba(0,224,190,0)_72%)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-[280px] [background-image:linear-gradient(to_right,rgba(33,63,62,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,63,62,0.22)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_72%_at_50%_0%,black_44%,transparent_92%)]" />
        </div>
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

        <div className="mx-auto max-w-[980px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1f4f4a] bg-[#0a1515]/90 px-4 py-1.5 text-[12px] font-medium text-[#a3d4cb] shadow-[inset_0_0_0_1px_rgba(35,120,108,0.25)]">
            <span className="h-2 w-2 rounded-full bg-[#20d0bb] shadow-[0_0_12px_rgba(32,208,187,0.95)]" />
            Support Available 24/7
          </div>

          <h1 className="mt-5 text-[44px] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[62px]">
            Get In Touch
          </h1>

          <p className="mx-auto mt-4 max-w-[760px] text-[14px] leading-[1.6] text-[#8d9b9a] sm:text-[15px]">
            If you have questions about our AI systems or want to explore how they fit your
            business, use the form below. Share a few details, and we&apos;ll guide you on the
            next steps.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[860px] rounded-[20px] border border-[#163634] bg-[#050607]/95 p-4 shadow-[0_0_0_1px_rgba(16,53,48,0.42),0_30px_90px_rgba(0,0,0,0.65)] sm:p-7 lg:p-8">
          <form className="space-y-4" action="#" method="post">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-[12px] font-medium text-[#a9b8b8]">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter Name"
                className="h-11 w-full rounded-[7px] border border-[#242b2d] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#6e787d] outline-none transition focus:border-[#26ceb5]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-[12px] font-medium text-[#a9b8b8]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="h-11 w-full rounded-[7px] border border-[#242b2d] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#6e787d] outline-none transition focus:border-[#26ceb5]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-[12px] font-medium text-[#a9b8b8]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Number"
                  className="h-11 w-full rounded-[7px] border border-[#242b2d] bg-[#0b0f11] px-4 text-[14px] text-white placeholder:text-[#6e787d] outline-none transition focus:border-[#26ceb5]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="helpTopic" className="mb-2 block text-[12px] font-medium text-[#a9b8b8]">
                How can we help you?
              </label>
              <CustomSelect id="helpTopic" name="helpTopic" defaultValue="Select" options={supportOptions} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-[12px] font-medium text-[#a9b8b8]">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={9}
                placeholder="Enter Message here"
                className="w-full resize-y rounded-[7px] border border-[#242b2d] bg-[#0b0f11] px-4 py-3 text-[14px] text-white placeholder:text-[#6e787d] outline-none transition focus:border-[#26ceb5]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[#00C19C] text-[15px] font-semibold text-[#e9ffff] transition hover:bg-[#1cc3af]"
            >
              Lets Connect
              <span aria-hidden="true" className="text-base leading-none">
                -&gt;
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
