import Image from "next/image";

export default function Genie() {
	return (
		<section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10">
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,155,142,0.2),rgba(0,0,0,1)_62%)]"
			/>

			<div className="relative">
				{/* Section heading */}
				<div className="mx-auto flex max-w-xl flex-col items-center text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] text-white/75 backdrop-blur">
						<span className="h-2 w-2 rounded-full bg-[#2de4cf]" />
						Your Autonomous Digital Operators
					</div>
					<h2 className="mt-6 text-balance text-[1.8rem] font-medium leading-[1.12] text-white sm:text-[3.2rem]">
						Meet the team that
						<br />
						never clocks out
					</h2>
				</div>

				{/* Content row: stacked on mobile/md, side-by-side from lg */}
				<div className="mt-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
					{/* Text side */}
					<div>
						<div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/70">
							<button type="button" className="rounded-full bg-white/[0.08] px-5 py-2">
								Inbound
							</button>
							<button type="button" className="px-5 py-2">
								Outbound
							</button>
						</div>

						<h3 className="mt-6 text-[1.8rem] sm:text-[2.35rem] font-semibold tracking-[0.02em] text-[#10d7c2]">GENIE</h3>
						<p className="mt-4 max-w-xl text-[0.92rem] sm:text-[1.07rem] leading-[1.75] text-white/78">
							Genie, provides a human-like voice to independently handle unlimited calls, 24/7. It
							excels at autonomous lead qualification, appointment scheduling, and customer support,
							integrating directly with your CRM to ensure every opportunity is captured, even while
							you are away.
						</p>

						<button
							type="button"
							className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-[0.03em] text-black transition-transform hover:scale-[1.02]"
						>
							MEET GENIE
							<span aria-hidden="true" className="text-base leading-none">-&gt;</span>
						</button>
					</div>

					{/* Image side */}
					<div className="relative w-full">
						<div className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(53,88,92,0.48),rgba(28,219,188,0.52))]">
							<div className="relative h-[300px] overflow-hidden rounded-[14px] bg-[radial-gradient(ellipse_at_top_right,rgba(175,255,246,0.42),rgba(28,214,190,0.45)_45%,rgba(15,41,45,0.55)_100%)]">
								<Image
									src="/genie.png"
									alt="Genie"
									fill
									priority
									className="object-contain p-4"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
