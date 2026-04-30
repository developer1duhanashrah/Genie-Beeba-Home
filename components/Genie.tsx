import Image from "next/image";

export default function Genie() {
	return (
		<section className="relative overflow-hidden px-4 pb-10 sm:px-6 sm:pb-14 lg:mx-10 lg:px-20">
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,155,142,0.18),rgba(0,0,0,1)_62%)]"
			/>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 h-[280px] [background-image:linear-gradient(to_right,rgba(33,63,62,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,63,62,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_62%_74%_at_50%_0%,black_44%,transparent_92%)]"
			/>

			<div className="relative pt-20">
				{/* Section heading */}
				<div className="mx-auto flex max-w-xl flex-col items-center text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2 text-[11px] text-white/75 backdrop-blur">
						<span className="h-2 w-2 rounded-full bg-[#00C19C]" />
						Your Autonomous Digital Operators
					</div>
					<h2 className="mt-6 text-balance text-[1.9rem] font-medium leading-[1.15] text-white sm:text-[3.2rem]">
						Meet the team that
						<br />
						never clocks out
					</h2>
				</div>

				{/* Content row: stacked on mobile/md, side-by-side from lg */}
				<div className="mt-10 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
					{/* Text side */}
					<div>
						<div className="inline-flex gap-4">
							<button type="button" className="rounded-full border border-white/20 bg-white/[0.08] px-5 py-2 text-sm text-white/90">
								Inbound
							</button>
							<button type="button" className="rounded-full border border-white/20 bg-white/[0.08] px-5 py-2 text-sm text-white/90">
								Outbound
							</button>
						</div>

						<h3 className="mt-6 text-[2.9rem] font-semibold tracking-[0.01em] text-[#00C19C]">GENIE</h3>
						<p className="mt-4 max-w-[560px] text-[0.98rem] sm:text-[1.07rem] leading-[1.65] text-white/82">
							Genie, provides a human-like voice to independently handle unlimited calls, 24/7. It
							excels at autonomous lead qualification, appointment scheduling, and customer support,
							integrating directly with your CRM to ensure every opportunity is captured, even while
							you are away
						</p>

						<button
							type="button"
							className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-[0.01em] text-black transition-transform hover:scale-[1.02]"
						>
							MEET GENIE
							<svg viewBox="0 0 20 20" className="h-6 w-6 fill-none stroke-current stroke-[2]" aria-hidden="true">
								<path d="M4 10H16" />
								<path d="M11 5L16 10L11 15" />
							</svg>
						</button>
					</div>

					{/* Image side */}
					<div className="relative w-full">
						<div className="rounded-2xl border border-white/18 bg-[#1a2527] p-[1px]">
							<div className="relative h-[350px] overflow-hidden rounded-[15px] bg-[radial-gradient(ellipse_at_top_right,rgba(168,255,243,0.38)_0%,rgba(74,192,170,0.22)_30%,rgba(34,71,70,0.85)_62%,rgba(26,34,40,1)_100%),linear-gradient(112deg,#232c33_0%,#2d5c57_48%,#35b8a1_100%)]">
								<Image
									src="/genie.png"
									alt="Genie"
									fill
									priority
									className="object-cover transition-transform duration-400 -scale-x-100 drag-none"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
