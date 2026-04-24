export default function MettingForm() {
	return (
		<section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10 pb-1 pt-8 ">
			<div className="mx-auto w-full">
				<div className="relative overflow-hidden rounded-[28px] border border-white/[0.04] bg-[#050608] px-6 py-14 shadow-[0_40px_90px_rgba(0,0,0,0.72)] sm:px-10 md:py-16">
					<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.00)_44%)]" />
					<div className="pointer-events-none absolute -bottom-20 left-1/2 h-52 w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,198,161,0.45)_0%,rgba(13,198,161,0.0)_72%)] blur-[26px]" />
					<div className="relative mx-auto w-full text-center">
						<h2 className="text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-[56px]">
							Ready to Make Work Feel
							<br />
							Less Heavy Each Day?
						</h2>

						<p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.45] text-[#8d9399]">
							If daily operations are taking too much of your time, it may be time for a
							system that works quietly in the background. Schedule a meeting, and we&apos;ll
							help identify the right setup to support your workflow more efficiently.
						</p>

						<form className="mx-auto mt-8 w-full max-w-[560px] space-y-4">
							<input
								type="text"
								placeholder="Full Name"
								className="h-[52px] w-full rounded-[12px] border border-white/[0.12] bg-[#0f1216]/85 px-4 text-[18px] text-white placeholder:text-[#8f949a] outline-none transition focus:border-[#1ec8a7]"
							/>
							<input
								type="email"
								placeholder="Email"
								className="h-[52px] w-full rounded-[12px] border border-white/[0.12] bg-[#0f1216]/85 px-4 text-[18px] text-white placeholder:text-[#8f949a] outline-none transition focus:border-[#1ec8a7]"
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className="h-[52px] w-full rounded-[12px] border border-white/[0.12] bg-[#0f1216]/85 px-4 text-[18px] text-white placeholder:text-[#8f949a] outline-none transition focus:border-[#1ec8a7]"
							/>

							<button
								type="button"
								className="flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#11c7a3] text-[18px] font-semibold text-white transition hover:bg-[#10b996]"
							>
								Schedule a Meeting
								<span className="inline-flex h-7 w-9 items-center justify-center rounded-full bg-transparent text-white">
								<svg viewBox="0 0 20 20" className="h-7 w-9 fill-none stroke-current stroke-[2]" aria-hidden="true">
									<path d="M4 10H16" />
									<path d="M11 5L16 10L11 15" />
								</svg>
							</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
