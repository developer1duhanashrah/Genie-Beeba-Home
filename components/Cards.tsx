import Image from "next/image";

const items = [
	{
		title: "Custom Setup",
		description:
			"Your system should not feel generic. We build around your goals, your workflow, and your customers, so it fits your business from day one.",
		image: "/card1.png",
		imageClassName: "scale-x-[-1]",
	},
	{
		title: "Smart Build",
		description:
			"We go beyond basic automation. We design systems that help you act faster, follow up better, and stay consistent in daily execution.",
		image: "/card2.png",
		imageClassName: "scale-x-[-1]",
	},
	{
		title: "Clear Flow",
		description:
			"You get simple workflows and clear visibility. You will know what the system is doing, what changed, and what to improve next.",
		image: "/card3.png",
		imageClassName: "rotate-[1deg] scale-[1.03]",
	},
	{
		title: "Ongoing Support",
		description:
			"This is the point. Less chasing, fewer missed tasks, and more breathing room for you and your team, so you can focus on leadership and growth.",
		image: "/card4.png",
		imageClassName: "rotate-[2deg] scale-[1.03]",
	},
];

export default function Cards() {
	return (
		<section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-12">
            <div
                            aria-hidden="true"
                            className="absolute inset-0 "
                        />
            
                        <div className="relative mb-10">
                            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] text-white/75 backdrop-blur">
                                    <span className="h-3 w-3 rounded-full bg-[#00C19C]" />
                                    Smart Work, Smooth Execution
                                </div>
                                <h2 className="mt-6 text-balance text-[2.15rem] font-medium leading-[1.1] text-white sm:text-[3.2rem]">
                                    A Calm, Clear System
                                    <br />
                                    You Can Rely On
                                </h2>

                                <div>
                            <span className="mt-5 inline-flex items-center p-1 text-xs leading-relaxed text-white/65">
                            Deploying agentic AI should feel simple. We handle the setup and the hard parts, so your business gets a system that runs smoothly. This is not self service. It is built for you, and supported after launch
                            </span>
                        </div>
                            </div>
             
                           
                        </div>
                       
			<div className="mx-auto grid gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:mx-10 lg:grid-cols-4 lg:px-20">
				{items.map((item) => (
					<article
						key={item.title}
						className="group relative overflow-hidden rounded-t-[22px] border-t  border-white/12 "
					>
						<div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#4ea996_0%,#2e6c62_36%,#123029_62%,#071513_82%,#040808_100%)] shadow-[0_10px_24px_rgba(0,0,0,0.32)]">
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								className={`object-cover object-center drag-none transition-transform duration-300 ${item.imageClassName}`}
							/>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.5)_100%)]"
							/>
						</div>

						<div className=" px-5 pb-6 pt-5 text-center">
							<h3 className="text-[2.1rem] font-semibold leading-none tracking-[-0.02em] text-white">{item.title}</h3>
							<p className="mt-3 text-[0.78rem] leading-[1.42] text-white/50">{item.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
