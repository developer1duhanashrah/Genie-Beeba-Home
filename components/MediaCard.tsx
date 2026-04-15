import Image from "next/image";

export default function MediaCard() {
	return (
		<section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10 overflow-hidden px-4 pb-10 pt-10 sm:pb-24 sm:pt-14">
			<div
				aria-hidden="true"
				className="absolute inset-0 "
			/>
			<div className="relative">
				

				<div className="group relative ">
					{/* Ellipse glow — wide outer bloom */}
					<div
						aria-hidden="true"
						className="ellipse-glow pointer-events-none absolute -top-8 left-1/2 h-[72px] w-[90%] -translate-x-1/2 rounded-[50%] bg-[#00C19C]/20"
						style={{ filter: "blur(22px)" }}
					/>
					{/* Ellipse glow — tight inner halo */}
					<div
						aria-hidden="true"
						className="ellipse-glow pointer-events-none absolute -top-3 left-1/2 h-[28px] w-[62%] -translate-x-1/2 rounded-[50%] bg-[#00C19C]/50"
						style={{ filter: "blur(8px)", animationDelay: "0.4s" }}
					/>
					{/* Ellipse sharp arc line */}
					<div
						aria-hidden="true"
						className="ellipse-line pointer-events-none absolute top-[9px] left-1/2 h-[2px] w-[72%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#00C19C] to-transparent"
					/>

					{/* Device-frame card */}
					<div className="relative overflow-hidden rounded-[28px] bg-[#07100f] p-[10px] shadow-[0_-8px_32px_rgba(0,193,156,0.18)] ring-1 ring-inset ring-white/[0.06]">

						<div className="relative aspect-video w-full overflow-hidden rounded-[20px] border border-white/[0.07] bg-gradient-to-r from-[#cabfa8] via-[#3f4d4f] to-[#576a67]">
							<div
								aria-hidden="true"
								className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.48)_100%)]"
							/>

							{/* Foreground character anchors to mimic the reference frame composition */}
							<div className="absolute bottom-[17%] left-[18%] z-10">
								<Image
									src="/beeba.png"
									alt="Beeba character"
									width={102}
									height={118}
									priority
									className="h-[88px] w-auto sm:h-[98px]"
								/>
							</div>

							<div className="absolute bottom-[20%] right-[20%] z-20">
								<Image
									src="/genie.png"
									alt="Genie character"
									width={118}
									height={135}
									priority
									className="h-[112px] w-auto sm:h-[126px]"
								/>
							</div>

							{/* Centered play button */}
						<div
								className="absolute inset-0 flex items-center justify-center"
							>
								<button
									type="button"
									className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white text-black transition-transform duration-300 group-hover:scale-110"
									aria-label="Play video"
								>
									<svg className="relative ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M8 5v14l11-7z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

			
			</div>
		</section>
	);
}
