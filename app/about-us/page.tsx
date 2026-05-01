import FrequentlyQuestions from "@/components/FrequentlyQuestions";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
	title: "About Us – Duha Nashrah AI",
	description:
		"We are an autonomous AI systems company built to make business feel lighter.",
};

/* ─── Orbital diagram constants ──────────────────────────────────────── */
const S   = 600; // SVG/container size px
const CX  = 300; // center x
const CY  = 300; // center y
const R1  = 258; // outer ring  – icons live here
const R2  = 186; // middle ring – stars live here
const R3  = 103; // inner ring  – stars live here

/* Icon positions: angle in degrees, clockwise from 3-o'clock (right) */
function pos(angleDeg: number, r: number) {
	const rad = (angleDeg * Math.PI) / 180;
	return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

/* Compute animation-delay so an icon starts at its initial orbit angle */
const ORBIT_DURATION = 12; // seconds
function orbitDelay(angleDeg: number) {
	const normalized = ((angleDeg % 360) + 360) % 360;
	return -(normalized / 360 * ORBIT_DURATION);
}

/* ─── Inline SVG icons ──────────────────────────────────────────────── */
function IconPhone() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[35px] w-[35px]">
			<path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2c.28-.28.7-.37 1.07-.25A11.5 11.5 0 0020 17.5a1 1 0 011 1V21a1 1 0 01-1 1C9.6 22 2 14.4 2 5a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.6 3.57 1 1 0 01-.25 1L6.6 10.8z" />
		</svg>
	);
}
function IconChart() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[35px] w-[35px]">
			<rect x="3" y="12" width="4" height="9" rx="0.5" />
			<rect x="10" y="7" width="4" height="14" rx="0.5" />
			<rect x="17" y="3" width="4" height="18" rx="0.5" />
		</svg>
	);
}
function IconCalendar() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[35px] w-[35px]">
			<rect x="3" y="4" width="18" height="18" rx="2" />
			<path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
		</svg>
	);
}
function IconNodes() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[35px] w-[35px]">
			<circle cx="6" cy="18" r="2" />
			<circle cx="18" cy="18" r="2" />
			<circle cx="12" cy="6" r="2" />
			<path strokeLinecap="round" d="M12 8v4M9.5 15.5l-2 1.5M14.5 15.5l2 1.5" />
		</svg>
	);
}
function IconPerson() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-[35px] w-[35px]">
			<circle cx="12" cy="7" r="4" />
			<path strokeLinecap="round" d="M4 21v-1a8 8 0 0116 0v1" />
		</svg>
	);
}
function IconTarget() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
			<circle cx="12" cy="12" r="9" />
			<circle cx="12" cy="12" r="5" />
			<circle cx="12" cy="12" r="1.5" fill="currentColor" />
		</svg>
	);
}
function IconEye() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
			<path strokeLinecap="round" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
			<circle cx="12" cy="12" r="3" />
			<circle cx="12" cy="12" r="1" fill="currentColor" />
		</svg>
	);
}
function IconCpu() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-15 w-15">
			<rect x="7" y="7" width="10" height="10" rx="1" />
			<path strokeLinecap="round" d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
		</svg>
	);
}
function IconTeam() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-12 w-12">
			<circle cx="9" cy="7" r="3.5" />
			<circle cx="17" cy="7" r="3.5" />
			<path strokeLinecap="round" d="M2 22v-1a7 7 0 0114 0v1M14 22v-1a7 7 0 0110 0v1" />
		</svg>
	);
}
function IconBolt() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-15 w-15">
			<path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" />
		</svg>
	);
}

/* ─── Badge ─────────────────────────────────────────────────────────── */
function Badge({ label }: { label: string }) {
	return (
		<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-[7px] text-[11.5px] font-medium tracking-[0.01em] text-white/75 backdrop-blur-sm">
			<span className="h-[7px] w-[7px] rounded-full bg-[#2dddc6] shadow-[0_0_6px_rgba(45,221,198,0.85)]" />
			{label}
		</div>
	);
}

/* ─── Orbital Diagram ───────────────────────────────────────────────── */
// 5 icons evenly spread on the OUTER ring (R1)
const orbitItems: { icon: React.ReactNode; angle: number }[] = [
	{ icon: <IconPhone />,    angle: -128 },  // upper-left  (~10 o'clock)
	{ icon: <IconChart />,    angle:  -52 },  // upper-right (~1  o'clock)
	{ icon: <IconCalendar />, angle:   58 },  // lower-right (~4  o'clock)
	{ icon: <IconNodes />,    angle:  118 },  // lower-left  (~7  o'clock)
	{ icon: <IconPerson />,   angle:  176 },  // left        (~9  o'clock)
];

// 2 sparkle stars on Ring 2 (middle)
const r2StarAngles = [-90, 36];
// 2 sparkle stars on Ring 3 (inner)
const r3StarAngles = [150, -20];

function OrbitalDiagram() {
	return (
		<div className="w-full overflow-hidden h-[330px] sm:h-[450px] lg:h-[600px] flex justify-center">
			<div
				className="relative flex-shrink-0 select-none origin-top scale-[0.55] sm:scale-[0.75] lg:scale-100"
				style={{ width: S, height: S }}
		>
			{/* ── All rings, dots, spokes and sparkle in one SVG ── */}
			<svg
				viewBox={`0 0 ${S} ${S}`}
				className="pointer-events-none absolute inset-0 h-full w-full"
				aria-hidden="true"
			>
				{/* Teal radial glow via radialGradient */}
				<defs>
					<radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="transparent" />
						<stop offset="55%" stopColor="transparent" />
						<stop offset="100%" stopColor="transparent" />
					</radialGradient>
				</defs>
				<circle cx={CX} cy={CY} r={R1 + 40} fill="none" />

				{/* ── Ring 1 – outer (icons) ── */}
				<circle cx={CX} cy={CY} r={R1} fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />

				{/* ── Ring 2 – middle ── */}
				<circle cx={CX} cy={CY} r={R2} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />

				{/* ── Ring 3 – inner hub ring ── */}
				<circle cx={CX} cy={CY} r={R3} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

				{/* ── 2 sparkle stars on Ring 2 – counter-clockwise ── */}
				<g>
					<animateTransform attributeName="transform" type="rotate"
						from={`0 ${CX} ${CY}`} to={`-360 ${CX} ${CY}`}
						dur="18s" repeatCount="indefinite" />
					{r2StarAngles.map((angle, i) => {
						const { x, y } = pos(angle, R2);
						return (
							<path key={`r2star-${i}`} transform={`translate(${x - 7},${y - 7})`}
								d="M7 0 8.2 5.2 14 7 8.2 8.8 7 14 5.8 8.8 0 7 5.8 5.2z"
								fill="#2de4cf" filter="url(#glow)" />
						);
					})}
				</g>

				{/* ── 2 sparkle stars on Ring 3 – clockwise ── */}
				<g>
					<animateTransform attributeName="transform" type="rotate"
						from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`}
						dur="10s" repeatCount="indefinite" />
					{r3StarAngles.map((angle, i) => {
						const { x, y } = pos(angle, R3);
						return (
							<path key={`r3star-${i}`} transform={`translate(${x - 6},${y - 6})`}
								d="M6 0 7 4.5 12 6 7 7.5 6 12 5 7.5 0 6 5 4.5z"
								fill="#2de4cf" filter="url(#glow)" />
						);
					})}
				</g>
				<defs>
					<filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
						<feGaussianBlur stdDeviation="4" result="blur" />
						<feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
					</filter>
				</defs>

				{/* ── Sparkle star orbiting R1 outer edge ── */}
				{(() => {
					const { x, y } = pos(-90, R1);
					return (
						<g>
							<animateTransform attributeName="transform" type="rotate"
								from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`}
								dur={`${ORBIT_DURATION}s`} repeatCount="indefinite" />
							<path
								transform={`translate(${x - 7},${y - 7})`}
								d="M7 0 8.2 5.2 13 7 8.2 8.8 7 14 5.8 8.8 1 7 5.8 5.2z"
								fill="#2de4cf" filter="url(#glow)"
							/>
						</g>
					);
				})()}
			</svg>

			{/* ── Icon boxes on Ring 1 – CSS orbit animation ── */}
			{orbitItems.map(({ icon, angle }, i) => (
				<div
					key={`icon-${i}`}
					className="absolute flex items-center justify-center text-white/90"
					style={{
						width: 65,
						height: 65,
						left: CX - 22,
						top: CY - 22,
						transformOrigin: '22px 22px',
						animation: `orbit-icon-cw ${ORBIT_DURATION}s linear infinite`,
						animationDelay: `${orbitDelay(angle)}s`,
						background: "#000000",
						border: "1px solid rgba(255,255,255,0.30)",
						borderRadius: 12,
					}}
				>
					{icon}
				</div>
			))}

			{/* ── Center hub ── */}
			<div
				className="absolute flex flex-col items-center justify-center"
				style={{
					width: R3 * 2 - 5,
					height: R3 * 2 - 5,
					left: CX - (R3 - 5),
					top: CY - (R3 - 5),
				}}
			>
				<Image src="/logo.png" alt="Center Hub Image" width={R3 * 2 - 20} height={R3 * 2 - 20} />
			</div>
			</div>
		</div>
	);
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function AboutPage() {
	return (
		<main className=" bg-black text-white lg:px-30 px-4 sm:px-6">

			{/* ══ 1. HERO ══════════════════════════════════════════════════ */}
			<section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-20 pb-24 pt-16 sm:pb-32 sm:pt-24">
				{/* Teal radial from top */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10"
					style={{
						background:
							"radial-gradient(ellipse 90% 60% at 50% 0%, rgba(3,176,162,0.32) 0%, rgba(0,0,0,0.96) 68%)",
					}}
				/>
				{/* Top shimmer line */}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
				/>

				<div className="mx-auto flex flex-col items-center text-center">
					<Badge label="We Automate, You Focus" />

					<h1 className="mt-7 text-[2.05rem] font-medium leading-[1.10] tracking-[-0.03em] text-white sm:text-[3.7rem]">
						A Partner for Autonomous AI Systems
						{/* inline sparkle after AI */}
						<br />
						Making Operations Feel Lighter
						<span
							aria-hidden="true"
							className="ml-2 inline-flex align-middle"
							style={{ color: "#63f4e2", verticalAlign: "middle" }}
						>
							<svg viewBox="0 0 20 20" className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor">
								<path d="M10 1l2.2 6.3H19l-5.4 3.9 2.1 6.4L10 14l-5.7 3.6 2.1-6.4L1 7.3h6.8z" />
							</svg>
						</span>
					</h1>

					<p className="mx-auto mt-6 max-w-[560px] text-[13px] leading-[1.75] text-white/48 sm:text-[15px]">
						We are an autonomous AI systems company built to make business feel lighter.
						We are not here to sell another tool. We are here to deploy systems that run
						the work for you.
					</p>
				</div>
			</section>

			{/* ══ 2. OUR PHILOSOPHY ════════════════════════════════════════ */}
		<section className="relative overflow-hidden bg-black py-5 px-4 sm:px-6 lg:px-30">
			<div className="mx-auto flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
					{/* Text */}
					<div className="flex-1">
						<h2 className="text-[2.35rem] font-semibold leading-[1.1] tracking-[-0.024em] text-[#00C19C] sm:text-[2.9rem]">
							Our Philosophy
						</h2>
						<div className="mt-7 space-y-5 text-[14px] leading-[1.85] text-white/70 sm:text-[15px]">
							<p>
								When we chose the name for our company, we did not want something that
								only sounds modern. We wanted a name that carries meaning, and reflects
								how we see business life.
							</p>
							<p>
								Duha Nashrah takes inspiration from two chapters of the Qur&apos;an,
								Surah Ad-Duha and Surah Al-Nashrah. Their message is simple and
								timeless. After hardship comes ease. After darkness comes light. After
								burden comes relief.
							</p>
							<p>
								That is the feeling we want to bring to business owners. We build
								autonomous AI systems to reduce pressure, remove daily bottlenecks, and
								help you move forward with clarity.
							</p>
						</div>
					</div>

					{/* Orbital diagram */}
					<div className="w-full lg:flex-shrink-0 lg:max-w-[600px]">
						<OrbitalDiagram />
					</div>
				</div>
			</section>

			{/* ══ 3. MISSION & VISION ══════════════════════════════════════ */}
		<section className="relative overflow-hidden bg-black py-10 px-4 sm:px-6 lg:px-30">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 -z-10"
					style={{
						background:
							"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(8,155,142,0.18) 0%, transparent 68%)",
					}}
				/>

				<div className="flex flex-col items-center text-center">
					<Badge label="Autonomous Work, Limitless Leadership" />

					<h2 className="mt-7 text-[1.8rem] font-medium leading-[1.11] tracking-[-0.025em] text-white sm:text-[2.6rem] lg:text-[3.2rem]">
						Engineering Autonomous Operations,
						<br />
						Elevating Leaders
					</h2>
					<p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-[1.8] text-white/48 sm:text-[14px]">
						When daily operations run on their own, leaders get their time back. We build
						autonomous operations that remove the repeat work, so you can focus on
						decisions, direction, and growth. It is not only about speed. It is about
						giving you space to lead well.
					</p>
				</div>

				{/* Mission / Vision cards */}
				<div className="mt-12 grid gap-5 sm:grid-cols-2">
					{[
						{
							icon: "/target-icon.png",
							title: "Our Mission",
							body: "To Solve The Manpower Gap By Deploying An Autonomous Digital Workforce That Turns Business Pressure Into Steady, Reliable Execution",
						},
						{
							icon: "/vision-icon.png",
							title: "Our Vision",
							body: "To Help Entrepreneurs Grow Without Carrying Everything Alone, By Making Scalable Agentic AI Simple To Use And Ready To Deploy",
						},
					].map((card) => (
						<article
							key={card.title}
							className=" rounded-[18px] px-7 py-8"
							style={{
								background: "linear-gradient(180deg, rgba(13,107,97,0.20) 0%, #0a0a0a 35%, #0a0a0a 100%), linear-gradient(to left, rgba(27,168,154,0.15) 0%, transparent 40%)",
								border: "1px solid rgba(45,228,207,0.14)",
								boxShadow:
									"inset -20px 0 40px rgba(27,168,154,0.08), 0 8px 32px rgba(0,0,0,0.45)",
							}}
						>
							<div className="flex items-center gap-3">
								 <div
									className="flex h-25 w-25 flex-shrink-0 items-center justify-center rounded-full text-[#2de4cf]"
									
								>
									<Image src={card.icon} alt={`${card.title} Icon`} width={55} height={55} />
								</div> 
								<h3 className="text-[18px] font-semibold text-white">{card.title}</h3>
							</div>
							<p className="mt-5 text-[15px] leading-[1.8] text-white">
								{card.body}
							</p>
						</article>
					))}
				</div>
			</section>

			{/* ══ 4. WHAT MAKES US DIFFERENT ═══════════════════════════════ */}
		<section className="relative overflow-hidden px-4 py-16 sm:py-24 sm:px-6 lg:px-30 ">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 -z-10"
					style={{
						background:
							"radial-gradient(ellipse 55% 46% at 50% 50%, rgba(8,155,142,0.14) 0%, rgba(0,0,0,1) 68%)",
					}}
				/>

				<div className="mx-auto flex max-w-[860px] flex-col items-center text-center ">
					<Badge label="Intelligence That Drives Simplicity" />

					<h2 className="mt-7 text-[2.05rem] font-medium leading-[1.11] tracking-[-0.025em] text-white sm:text-[3.2rem]">
						What Makes Us
						<br />
						Different
					</h2>

					<p className="mx-auto mt-5 max-w-[460px] text-[13px] leading-[1.8] text-white/42 sm:text-[14px]">
						We take complicated business problems and turn them into clear systems that
						run day to day.
					</p>
				</div>

				{/* 3-column cards */}
				<div className="mx-auto mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
					{[
						{
							icon: <IconCpu />,
							title: "What We Are",
							body: "We Are A Premium Autonomous AI Systems Company. We Are Not A Software Shop. We Deploy An Autonomous Digital Workforce Through A High Touch, Consultative Service.",
						},
						{
							icon: <IconTeam />,
							title: "Who We Are",
							body: "We Are A Focused Team Of AI Strategists And Engineers, Inspired By One Promise: Ease After Hardship. We Exist To Replace Operational Pressure With Autonomous Clarity.",
						},
						{
							icon: <IconBolt />,
							title: "Why Us",
							body: "We Deliver A Turnkey System Tailored To Your Workflow And Operational Needs. From Setup To Ongoing Support, We Handle The Heavy Lifting So You Can Lead With Focus.",
						},
					].map((card) => (
						<article
							key={card.title}
							className="relative overflow-hidden rounded-[18px] px-6 py-8 "
							style={{
								background: "linear-gradient(180deg, rgba(13,107,97,0.20) 0%, #0a0a0a 35%, #0a0a0a 100%), linear-gradient(to left, rgba(27,168,154,0.15) 0%, transparent 40%)",
								border: "1px solid rgba(27,168,154,0.30)",
								boxShadow:
									"inset -20px 0 40px rgba(27,168,154,0.08), 0 12px 40px rgba(27,168,154,0.1)",
							}}
						>
							{/* Subtle teal top glow on card */}
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 "
								
							/>
							<div className="relative z-10 ">
								<div className="flex items-center gap-3">
									<div
										className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full text-white/70"
										style={{
											background: "rgba(30,80,75,0.30)",
											border: "1px solid rgba(45,228,207,0.28)",
										}}
									>
										{card.icon}
									</div>
									<h3 className="text-[16.5px] font-semibold text-white">
										{card.title}
									</h3>
								</div>
								<p className="mt-5 text-[16.5px] leading-[1.85] text-white/65 " >
									{card.body}
								</p>
								
							</div>
						</article>
					))}
				</div>
				
			</section>
			<FrequentlyQuestions />
		</main>
	);
}
