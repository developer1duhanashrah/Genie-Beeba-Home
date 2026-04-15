"use client";

import { useState } from "react";

type Testimonial = {
	name: string;
	role: string;
	text: string;
};

const allTestimonials: Testimonial[] = [
	{
		name: "Sarah Mitchell",
		role: "CEO, TechLaunch Dubai",
		text: "Reliable, responsive, and professional — three words that define our experience. Their solutions saved us countless hours and helped us scale efficiently.",
	},
	{
		name: "James Okafor",
		role: "Founder, GrowthEdge",
		text: "The AI voice agent handles our inbound calls flawlessly. Leads are qualified and booked into our calendar without any manual effort from our team.",
	},
	{
		name: "Layla Hassan",
		role: "Marketing Director, Bloom Media",
		text: "Beeba transformed our content workflow. What used to take days now runs automatically with a consistent brand voice across all our platforms.",
	},
	{
		name: "Carlos Romero",
		role: "Operations Manager, SupplyNest",
		text: "The integration with our CRM was seamless. We went from missing follow-ups to capturing every single opportunity. Highly recommended.",
	},
	{
		name: "Priya Nair",
		role: "Head of Growth, FinScale",
		text: "Genie handles after-hours calls better than most of our human agents. Our customer satisfaction scores have improved significantly since deployment.",
	},
	{
		name: "Ahmed Al-Rashid",
		role: "COO, LogiFlow UAE",
		text: "The setup process was surprisingly smooth. The team built around our workflow and the system has been running without issues for six months now.",
	},
	{
		name: "Emily Chen",
		role: "E-commerce Lead, Sparkly",
		text: "Our abandoned cart recovery rate tripled after deploying the automation. The follow-up sequences feel human and personal, not robotic.",
	},
	{
		name: "Daniel Ferreira",
		role: "Real Estate Broker, PrimeKey",
		text: "Every missed call used to mean a missed deal. Now Genie captures the lead, qualifies them, and books a viewing — while I am still asleep.",
	},
	{
		name: "Nadia Volkov",
		role: "Clinic Manager, VitaHealth",
		text: "Appointment scheduling used to consume two hours of our front desk every day. That time is now fully reclaimed thanks to this system.",
	},
	{
		name: "Tariq Mahmood",
		role: "Director, EduReach",
		text: "The analytics and visibility are what really sold us. We know exactly what the system is doing, what converted, and where to improve.",
	},
	{
		name: "Sofia Andersen",
		role: "Brand Strategist, Vivid Co.",
		text: "Beeba is like having a senior strategist and content team rolled into one autonomous agent. Our social presence has never been stronger.",
	},
	{
		name: "Mark Thompson",
		role: "CEO, BuildRight Contracting",
		text: "We were skeptical at first, but the ROI was visible within the first month. Less chasing, fewer missed tasks, more focus on growing the business.",
	},
	{
		name: "Amara Diallo",
		role: "Sales Lead, NexaTrade",
		text: "Lead qualification used to be a bottleneck. Now prospects arrive at our calls already engaged and informed. Our close rate has improved meaningfully.",
	},
	{
		name: "Yuki Tanaka",
		role: "Product Manager, Elevate SaaS",
		text: "The system fits so naturally into our existing tools that the team barely noticed the transition. It just quietly makes everything work better.",
	},
	{
		name: "Omar Bassi",
		role: "Founder, Bassi Consulting",
		text: "What impressed me most was the ongoing support. They didn't disappear after launch — they are genuinely invested in making the system work for us.",
	},
	{
		name: "Rachel Kim",
		role: "Head of Operations, DelivR",
		text: "We deployed Genie across three markets simultaneously. The multilingual handling exceeded our expectations and the setup was incredibly smooth.",
	},
];

const WINDOW_SIZE = 8;
const STEP = 4;

function Avatar() {
	return (
		<div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#d9c68a]/45 bg-[radial-gradient(circle_at_50%_30%,#d7d3ab_0%,#909264_38%,#43482e_68%,#1b2118_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
			<div className="absolute left-1/2 top-[7px] h-[24px] w-[24px] -translate-x-1/2 rounded-full bg-[#d8b792]" />
			<div className="absolute left-1/2 top-[4px] h-[15px] w-[26px] -translate-x-1/2 rounded-[999px] bg-[#8f6d41]" />
			<div className="absolute left-1/2 top-[14px] h-[18px] w-[30px] -translate-x-1/2 rounded-[999px] bg-[#9b7e52] opacity-95" />
			<div className="absolute bottom-[-2px] left-1/2 h-[18px] w-[32px] -translate-x-1/2 rounded-t-[16px] bg-[#5f8463]" />
			<div className="absolute left-[13px] top-[18px] h-[2.5px] w-[2.5px] rounded-full bg-[#35231c]" />
			<div className="absolute right-[13px] top-[18px] h-[2.5px] w-[2.5px] rounded-full bg-[#35231c]" />
		</div>
	);
}

function Stars() {
	return (
		<div className="mt-1 flex gap-[2px] text-[#ffb800]">
			{Array.from({ length: 5 }, (_, index) => (
				<svg key={index} viewBox="0 0 20 20" className="h-[10px] w-[10px] fill-current" aria-hidden="true">
					<path d="M10 1.6 12.35 6.36l5.25.76-3.8 3.7.9 5.22L10 13.57l-4.7 2.47.9-5.22-3.8-3.7 5.25-.76L10 1.6Z" />
				</svg>
			))}
		</div>
	);
}

function TestimonialCard({ item }: { item: Testimonial }) {
	return (
		<article className="rounded-[15px] border border-white/10 bg-[linear-gradient(180deg,rgba(40,46,47,0.94)_0%,rgba(29,32,32,0.96)_100%)] px-4 pb-4 pt-3 shadow-[0_8px_24px_rgba(0,0,0,0.26)]">
			<div className="flex items-start gap-3">
				<Avatar />
				<div className="min-w-0">
					<h3 className="truncate text-[14px] font-semibold leading-none tracking-[-0.01em] text-[#f8f0c4]">{item.name}</h3>
					<p className="mt-0.5 truncate text-[10px] text-white/45">{item.role}</p>
					<Stars />
				</div>
			</div>
			<p className="mt-3 text-[9px] leading-[1.38] tracking-[0.005em] text-white/76">{item.text}</p>
		</article>
	);
}

export default function FeedBack() {
	const [start, setStart] = useState(0);
	const [animKey, setAnimKey] = useState(0);
	const [dir, setDir] = useState<"next" | "prev">("next");

	const total = allTestimonials.length;
	const canNext = start + STEP < total;
	const canPrev = start > 0;
	const visible = allTestimonials.slice(start, start + WINDOW_SIZE);

	function goNext() {
		if (!canNext) return;
		setDir("next");
		setStart((s) => Math.min(s + STEP, total - 1));
		setAnimKey((k) => k + 1);
	}

	function goPrev() {
		if (!canPrev) return;
		setDir("prev");
		setStart((s) => s - STEP);
		setAnimKey((k) => k + 1);
	}

	return (
		<section className="relative overflow-hidden bg-black pb-14 pt-8 sm:pb-18 sm:pt-10">
			<div
				aria-hidden="true"
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(48% 42% at 50% 40%, rgba(9, 55, 47, 0.42) 0%, rgba(5, 22, 18, 0.22) 42%, rgba(0, 0, 0, 0) 72%)",
				}}
			/>

			<div className="relative mx-auto flex flex-col items-center px-4 text-center">
				<div className="inline-flex h-10 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[11px] font-medium text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
					<span className="h-2.5 w-2.5 rounded-full bg-[#17c9b0] shadow-[0_0_0_4px_rgba(23,201,176,0.12)]" />
					Trusted by Our Clients
				</div>

				<h2 className="mt-6 max-w-[360px] text-balance text-[33px] font-normal leading-[1.1] tracking-[-0.04em] text-white sm:text-[38px]">
					What Clients Say
					<br />
					About Our Work
				</h2>
			</div>

			<div className="relative mt-10 px-4 sm:px-6 lg:px-20 lg:mx-10">
				<div
					key={animKey}
					className={dir === "next" ? "animate-feedback-up" : "animate-feedback-down"}
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
						{visible.map((item, i) => (
							<TestimonialCard key={`${start}-${i}`} item={item} />
						))}
					</div>
				</div>

				{/* Navigation */}
				<div className="mt-8 flex items-center justify-center gap-4">
					<button
						type="button"
						onClick={goPrev}
						disabled={!canPrev}
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.10] disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Previous"
					>
						<svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[2]" aria-hidden="true">
							<path d="M13 5L8 10L13 15" />
						</svg>
					</button>

					<span className="text-[11px] text-white/40">
						{Math.floor(start / STEP) + 1} / {Math.ceil(total / STEP)}
					</span>

					<button
						type="button"
						onClick={goNext}
						disabled={!canNext}
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.10] disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Next"
					>
						<svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[2]" aria-hidden="true">
							<path d="M7 5L12 10L7 15" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
