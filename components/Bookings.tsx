function CircuitPattern({ mirrored = false }: { mirrored?: boolean }) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 170 170"
			className={`h-full w-full ${mirrored ? "-scale-x-100" : ""}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
				<path d="M0 28H22L34 16H56" />
				<path d="M0 18H16L28 6H50" />
				<path d="M0 114H20L32 126V170" />
				<path d="M0 78H36L52 94V122" />
				<path d="M0 62H28L40 50H70V32" />
				<path d="M0 144H40L56 160" />
				<path d="M86 16V36H118L134 52H170" />
				<path d="M98 104H126L142 120H170" />
				<path d="M74 68H112L128 84H170" />
				<path d="M72 146H106L120 132H146" />
			</g>
			<g fill="rgba(255,255,255,0.26)">
				<circle cx="56" cy="16" r="2.7" />
				<circle cx="50" cy="6" r="2.7" />
				<circle cx="70" cy="32" r="2.7" />
				<circle cx="52" cy="94" r="2.7" />
				<circle cx="32" cy="126" r="2.7" />
				<circle cx="86" cy="16" r="2.7" />
				<circle cx="134" cy="52" r="2.7" />
				<circle cx="128" cy="84" r="2.7" />
				<circle cx="120" cy="132" r="2.7" />
			</g>
		</svg>
	);
}

export default function Bookings() {
	return (
		<section className="bg-black px-4 sm:px-6 lg:px-20 lg:mx-10 py-8 sm:px-6 sm:py-10">
			<div className="">
				<div className="relative min-h-[158px] overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#183630] shadow-[0_18px_40px_rgba(0,0,0,0.34)]">
					<div
						aria-hidden="true"
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(90deg, #17352F 0%, #3C8F84 16%, #79E5D6 50%, #3C8F84 84%, #17352F 100%)",
						}}
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0"
						style={{
							background:
								"radial-gradient(42% 120% at 50% -8%, rgba(243,255,252,0.9) 0%, rgba(243,255,252,0.22) 18%, rgba(255,255,255,0) 58%), linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 32%, rgba(0,0,0,0.2) 100%)",
						}}
					/>
					<div
						aria-hidden="true"
						className="absolute left-0 top-0 h-full w-[80px] sm:w-[130px] md:w-[170px] opacity-95"
					>
						<CircuitPattern />
					</div>
					<div
						aria-hidden="true"
						className="absolute right-0 top-0 h-full w-[80px] sm:w-[130px] md:w-[170px] opacity-95"
					>
						<CircuitPattern mirrored />
					</div>
					<div
						aria-hidden="true"
						className="absolute inset-x-[65px] sm:inset-x-[105px] md:inset-x-[136px] top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
					/>

					<div className="relative flex min-h-[158px] flex-col items-center justify-center px-6 pb-7 pt-6 text-center">
						<h2 className="max-w-[430px] text-[18px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[20px]">
							Stop Spending Time on Repeat Tasks
						</h2>
						<p className="mt-4 max-w-[348px] text-[10px] font-medium leading-[1.45] tracking-[0.01em] text-white/88 sm:text-[10.5px]">
							Let agentic AI handle the routine work, so you can
							<br className="hidden sm:block" />
							 focus on clients and strategy.
						</p>
						<button
							type="button"
							className="mt-5 inline-flex h-10 items-center gap-3 rounded-full bg-white px-5 text-[10px] font-semibold uppercase tracking-[0.02em] text-black shadow-[0_8px_20px_rgba(255,255,255,0.18)]"
						>
							Book a Discovery Call
							<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-transparent text-black">
								<svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2]" aria-hidden="true">
									<path d="M4 10H16" />
									<path d="M11 5L16 10L11 15" />
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
