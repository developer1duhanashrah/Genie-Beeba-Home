import Image from "next/image";

const items = [
	{
		title: "Custom Setup",
		description:
			"Your system should not feel generic. We build around your goals, your workflow, and your customers, so it fits your business from day one.",
		image: "/card1.png",
	},
	{
		title: "Smart Build",
		description:
			"We go beyond basic automation. We design systems that help you act faster, follow up better, and stay consistent in daily execution.",
		image: "/card2.png",
	},
	{
		title: "Clear Flow",
		description:
			"You get simple workflows and clear visibility. You will know what the system is doing, what changed, and what to improve next.",
		image: "/card3.png",
	},
	{
		title: "Ongoing Support",
		description:
			"This is the point. Less chasing, fewer missed tasks, and more breathing room for you and your team, so you can focus on leadership and growth.",
		image: "/card4.png",
	},
];

export default function Cards() {
	return (
		<section className="relative pb-16 pt-8 sm:pb-24 sm:pt-10 ">
            <div
                            aria-hidden="true"
                            className="absolute  inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,155,142,0.2),rgba(0,0,0,1)_62%)]"
                        />
            
                        <div className="relative mb-10">
                            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] text-white/75 backdrop-blur">
                                    <span className="h-2 w-2 rounded-full bg-[#2de4cf]" />
                                    Your Autonomous Digital Operators
                                </div>
                                <h2 className="mt-6 text-balance text-[2.15rem] font-medium leading-[1.12] text-white sm:text-[3.2rem]">
                                    Meet the team that
                                    <br />
                                    never clocks out
                                </h2>

                                <div>
                            <span className="inline-flex items-center mt-5 p-1 text-xs text-white/70">
                            Deploying agentic AI should feel simple. We handle the setup and the hard parts, so your business gets a system that runs smoothly. This is not self service. It is built for you, and supported after launch.
                            </span>
                        </div>
                            </div>
             
                           
                        </div>
                       
			<div className="mx-auto grid px-4 sm:px-6 lg:px-20 lg:mx-10 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item) => (
					<article
						key={item.title}
						className="group relative overflow-hidden rounded-[22px] ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.6)] bg-[linear-gradient(180deg,#4ab4a2_0%,#204742_45%,#020808_78%,#000_100%)]"
					>
						<div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
							/>
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.42)_100%)]"
							/>
						</div>

						<div className="px-5 pb-6 pt-4 text-center border-t border-black/40">
							<h3 className="text-[1.6rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[2rem] font-semibold leading-none tracking-[-0.02em] text-white">{item.title}</h3>
							<p className="mt-3 text-[0.72rem] leading-[1.35] text-white/55">{item.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
