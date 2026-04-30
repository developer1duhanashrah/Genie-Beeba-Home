import Image from "next/image";

export default function Beeba() {
	return (
	<section className="relative mt-8 sm:mt-10 px-4 sm:px-6 lg:px-20 lg:mx-10">
		<div className="relative">
			<div className="grid gap-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
					<div className="relative  md:max-w-[530px]">
											<div className="rounded-2xl border border-white/18 bg-[#1a2527] p-[1px]">
												<div className="relative h-[350px] overflow-hidden rounded-[15px] bg-[radial-gradient(ellipse_at_top_right,rgba(168,255,243,0.38)_0%,rgba(74,192,170,0.22)_30%,rgba(34,71,70,0.85)_62%,rgba(26,34,40,1)_100%),linear-gradient(112deg,#232c33_0%,#2d5c57_48%,#35b8a1_100%)]">
													<Image
														src="/beebaHome.png"
														alt="Beeba"
														fill
														priority
														className="transition-transform drag-none"
													/>
												</div>
											</div>
										</div>

					<div className="order-1 lg:order-2">
						<div className="inline-flex gap-4">
							<button type="button" className="rounded-full bg-white/[0.08] px-5 py-2 items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/70">
								Brand Management
							</button>
							<button type="button" className="rounded-full bg-white/[0.08] px-5 py-2 items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/70">
								Social Intelligence
							</button>
						</div>

					<h3 className="mt-6 text-[1.8rem] sm:text-[2.35rem] font-semibold tracking-[0.02em] text-[#00C19C]">BEEBA</h3>
					<p className="max-w-[730px] text-[0.98rem] sm:text-[1.3rem] leading-[1.65] text-white/82">
						Move from the content grind to a fully autonomous operation. Our Autonomous Agent Beeba executes everything from deep market analysis and strategic planning to content creation and multi-platform scheduling, all tailored to your unique brand voice.
						</p>

						<button
							type="button"
							className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-[0.03em] text-black transition-transform hover:scale-[1.02]"
						>
							MEET BEEBA
							<svg viewBox="0 0 20 20" className="h-6 w-6 fill-none stroke-current stroke-[2]" aria-hidden="true">
								<path d="M4 10H16" />
								<path d="M11 5L16 10L11 15" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
