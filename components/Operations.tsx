const operationCards = [
	{
		title: "What",
		description:
			"We deploy autonomous digital operators that handle work from start to finish with speed and precision. This is not just a tool. It is a complete system that efficiently does the job.",
	},
	{
		title: "How",
		description:
			"You do not need to be technical to use AI. We handle the setup, connections, and fine tuning for you, so you can start seeing results without the stress of a steep learning curve.",
	},
	{
		title: "Why",
		description:
			"We help you grow without growing your headcount. You get a self-running digital workforce that supports your team and keeps work moving as demand increases.",
	},
];

export default function Operations() {
	return (
        <>
         <section className="relative overflow-hidden px-4 pb-5 pt-8 sm:pb-10 sm:pt-10 ">
                    <div
                                    aria-hidden="true"
                                    className="absolute  inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,155,142,0.2),rgba(0,0,0,1)_62%)]"
                                />
                    
                                <div className="relative mx-auto max-w-6xl mb-10">
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
                               
                 
                </section>
        <section className="bg-black  py-2 sm:py-2 px-4 sm:px-6 lg:px-35 lg:mx-10 ">
            
			<div className=" flex flex-col gap-4 sm:flex-row sm:gap-[14px]">
				{operationCards.map((card) => (
					<article
						key={card.title}
						className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#14181e] pt-[54px] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
					>
						<div
							aria-hidden="true"
							className="absolute inset-0"
							style={{
								background:
									"radial-gradient(115% 115% at 70% 3%, rgba(106, 184, 164, 0.72) 0%, rgba(73, 128, 115, 0.4) 26%, rgba(29, 37, 45, 0.9) 58%, rgba(20, 24, 30, 1) 100%)",
							}}
						/>
						<div
							aria-hidden="true"
							className="absolute inset-0 rounded-[18px]"
							style={{
								boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
							}}
						/>

						<div className="relative z-10">
							<h3
								className="text-[31px] font-semibold italic leading-none tracking-[-0.04em] text-white"
								style={{
									fontFamily:
										'"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
								}}
							>
								{card.title}
							</h3>
							<p className="mt-7 max-w-[178px] text-[10px] leading-[1.72] tracking-[0.01em] text-white/72 sm:max-w-none">
								{card.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
        </>
		
	);
}
