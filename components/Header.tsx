const STARS: { top: string; left: string; size: string; color: string; duration: string; delay: string }[] = [
	{ top: "12%",  left: "7%",  size: "h-3 w-3", color: "text-[#00C19C]", duration: "3.2s", delay: "0s"    },
	{ top: "22%",  left: "87%", size: "h-5 w-5", color: "text-[#00C19C]", duration: "5.8s", delay: "1.4s"  },
	{ top: "58%",  left: "4%",  size: "h-3 w-3", color: "text-[#00C19C]", duration: "4.3s", delay: "2.7s"  },
	{ top: "72%",  left: "93%", size: "h-4 w-4", color: "text-[#00C19C]", duration: "6.1s", delay: "0.9s"  },
	{ top: "8%",   left: "48%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "3.7s", delay: "3.5s"  },
	{ top: "43%",  left: "18%", size: "h-4 w-4", color: "text-[#00C19C]", duration: "5.2s", delay: "0.3s"  },
	{ top: "28%",  left: "72%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "4.8s", delay: "4.1s"  },
	{ top: "82%",  left: "38%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "3.4s", delay: "1.8s"  },
	{ top: "53%",  left: "80%", size: "h-5 w-5", color: "text-[#00C19C]", duration: "6.6s", delay: "2.2s"  },
	{ top: "6%",   left: "28%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "4.0s", delay: "5.0s"  },
	{ top: "66%",  left: "60%", size: "h-4 w-4", color: "text-[#00C19C]", duration: "5.5s", delay: "0.6s"  },
	{ top: "36%",  left: "55%", size: "h-3 w-3", color: "text-[#00C19C]", duration: "3.9s", delay: "3.0s"  },
];

const StarIcon = () => (
	<svg viewBox="0 0 24 24" className="fill-current">
		<path d="M12 1.2 14.8 9l7.8 2.8-7.8 2.8L12 22.4l-2.8-7.8L1.4 11.8 9.2 9z" />
	</svg>
);

export default function Header() {
	return (
		<>
			<section className="relative isolate overflow-hidden px-4 pb-20 pt-12 sm:pb-24 sm:pt-16">
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(3,176,162,0.32),rgba(0,0,0,0.96)_62%)]"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"
				/>

				{/* Animated floating stars */}
				{STARS.map((s, i) => (
					<span
						key={i}
						aria-hidden="true"
						className={`star-animate pointer-events-none absolute ${s.size} ${s.color}`}
						style={{ top: s.top, left: s.left, animationDuration: s.duration, animationDelay: s.delay }}
					>
						<StarIcon />
					</span>
				))}

				<div className="mx-auto flex max-w-5xl flex-col items-center text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium tracking-[0.01em] text-white/80 backdrop-blur">
						<span className="badge-dot h-3 w-3 rounded-full bg-[#00C19C]" />
						<span className="text-[14px]">Your Operations Autonomously Executed </span>
					</div>

					<h1 className="mt-6 text-balance text-[1.8rem] font-medium leading-[1.12] text-white md:text-[3.5rem]">
						Autonomous AI Systems

						<br />
						for Business Growth
					

					<span className="star-animate ml-2 inline-flex align-middle text-[#00C19C] h-7 w-7 sm:h-8 sm:w-8" style={{ animationDuration: "4.5s", animationDelay: "1.2s" }}>
						<StarIcon />
						</span>
					</h1>

					<p className="mt-4 sm:mt-6 max-w-3xl text-xs leading-relaxed text-white/55 sm:text-xl sm:leading-[1.45]">
						Run calls, follow-ups and daily workflows without constant manual work.
						<br />
						Designed for Leaders, Entrepreneurs and Business Owners
					</p>

					<button
						type="button"
						className="mt-7 sm:mt-9 rounded-full bg-[#00C19C] px-8 sm:px-11 py-2.5 sm:py-3 text-sm font-semibold tracking-[0.01em] text-white transition-transform hover:scale-[1.02]"
					>
						Deploy System
					</button>
				</div>
			</section>

			<section className="relative overflow-hidden px-4 py-8 sm:py-4">
				 <div
					aria-hidden="true"
					className="absolute inset-0 "
				/> 
				<div className="relative mx-auto grid w-full max-w-[760px] grid-cols-3 gap-4 text-center text-white sm:grid-cols-3 sm:gap-0">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute left-1/3 top-1/2 hidden h-[84px] w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(216,255,252,0.95),rgba(255,255,255,0))] sm:block"
						style={{ left: "33.333%" }}
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute top-1/2 hidden h-[84px] w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(216,255,252,0.95),rgba(255,255,255,0))] sm:block"
						style={{ left: "66.666%" }}
					/>
					<div className="sm:pr-8">
						<p className="text-[9px] md:text-[13px] tracking-[0.01em] text-white/50">Boost Efficiency</p>
						<p className="mt-1 sm:mt-2 text-[26px] sm:text-[42px] font-semibold leading-none tracking-[-0.02em] text-white">90%</p>
						<p className="mt-2 sm:mt-3 text-[8px] md:text-[13px] leading-[1.25] text-white/40">
							Improvement of efficiency with
							<br />
							our autonomous digital operators
						</p>
					</div>
					<div className="sm:px-8">
						<p className="text-[9px] md:text-[13px] tracking-[0.01em] text-white/50">Trusted by</p>
						<p className="mt-1 sm:mt-2 text-[26px] sm:text-[42px] font-semibold leading-none tracking-[-0.02em] text-white">200+</p>
						<p className="mt-2 sm:mt-3 text-[8px] md:text-[13px] leading-[1.25] text-white/40">
							Businesses and entrepreneurs
							<br />
							worldwide
						</p>
					</div>
					<div className="sm:pl-8">
						<p className="text-[9px] md:text-[13px] tracking-[0.01em] text-white/50">Experience</p>
						<p className="mt-1 sm:mt-2 text-[26px] sm:text-[42px] font-semibold leading-none tracking-[-0.02em] text-white">20+</p>
						<p className="mt-2 sm:mt-3 text-[8px] md:text-[13px] leading-[1.25] text-white/40">
							Years serving clients with
							<br />
							innovation and integrity
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
