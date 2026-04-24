const operationCards = [
	{
		title: "What",
		description:
			"We deploy autonomous digital operators that handle work from start to finish with speed and precision. This is not just a tool. It is a complete system that efficiently does the job",
	},
	{
		title: "How",
		description:
			"You do not need to be technical to use AI. We handle the setup, connections, and fine tuning for you, so you can start seeing results without the stress of a steep learning curve",
	},
	{
		title: "Why",
		description:
			"We help you grow without growing your headcount. You get a self-running digital workforce that supports your team and keeps work moving as demand increases",
	},
];

export default function Operations() {
	return (
		<section className="relative overflow-hidden bg-black px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-20 lg:pb-16">
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,155,142,0.16),rgba(0,0,0,1)_58%)]"
			/>

			<div className="relative mx-auto max-w-[1160px]">
				<div className="mx-auto mb-10 flex max-w-[760px] flex-col items-center text-center sm:mb-14">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] text-white/75 backdrop-blur">
						<span className="h-3 w-3 rounded-full bg-[#00C19C]" />
						Business Runs Without Effort
					</div>
					<h2 className="mt-6 text-balance text-[2.15rem] font-medium leading-[1.1] text-white sm:text-[3.2rem]">
						Making Operations
						<br />
						Run on Autopilot
					</h2>

					<p className="mt-5 text-xs leading-relaxed text-white/55 sm:text-[15px] sm:leading-[1.45]">
						We help replace manual workflows with self operating AI systems, so your business runs smoother and
						<br className="hidden sm:block" />
						faster, day and night
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
				{operationCards.map((card) => (
					<article
						key={card.title}
						className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#14181e] px-6 pb-6 pt-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
					>
						<div
							aria-hidden="true"
							className="absolute inset-0"
							style={{
								background:
									"radial-gradient(110% 100% at 72% 8%, rgba(108,188,166,0.78) 0%, rgba(70,130,116,0.42) 28%, rgba(20,28,36,0.95) 63%, rgba(12,18,25,1) 100%)",
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
								className="text-[58px] font-semibold italic leading-none tracking-[-0.045em] text-white"
								style={{
									fontFamily:
										'"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
								}}
							>
								{card.title}
							</h3>
							<p className="mt-5 text-[13px] leading-[1.8] tracking-[0.01em] text-white/72">
								{card.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
		</section>
	);
}
