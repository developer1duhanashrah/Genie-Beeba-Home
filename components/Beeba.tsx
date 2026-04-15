import Image from "next/image";

export default function Beeba() {
	return (
	<section className="relative mt-8 sm:mt-10 px-4 sm:px-6 lg:px-20 lg:mx-10">
		<div className="relative">
			<div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
					<div className="relative w-full order-2 lg:order-1">
						<div className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(53,88,92,0.48),rgba(28,219,188,0.52))]">
							<div className="relative h-[300px] overflow-hidden rounded-[14px] bg-[radial-gradient(ellipse_at_top_right,rgba(175,255,246,0.42),rgba(28,214,190,0.45)_45%,rgba(15,41,45,0.55)_100%)]">
								<Image
									src="/beeba.png"
									alt="Beeba"
									fill
									priority
									className="object-contain "
								/>
							</div>
						</div>
					</div>

					<div className="order-1 lg:order-2">
						<div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs text-white/70">
							<button type="button" className="rounded-full bg-white/[0.08] px-5 py-2">
								Brand Management
							</button>
							<button type="button" className="px-5 py-2">
								Social Intelligence
							</button>
						</div>

					<h3 className="mt-6 text-[1.8rem] sm:text-[2.35rem] font-semibold tracking-[0.02em] text-[#10d7c2]">BEEBA</h3>
					<p className="mt-4 max-w-xl text-[0.92rem] sm:text-[1.07rem] leading-[1.75] text-white/78">
							Move from the content grind to a fully autonomous operation. Our Autonomous Agent
							Beeba executes everything from deep market analysis and strategic planning to content
							creation and multi-platform scheduling, all tailored to your unique brand voice.
						</p>

						<button
							type="button"
							className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-[0.03em] text-black transition-transform hover:scale-[1.02]"
						>
							MEET BEEBA
							<span aria-hidden="true" className="text-base leading-none">-&gt;</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
