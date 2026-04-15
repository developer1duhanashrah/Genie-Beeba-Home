import Image from "next/image";
import Link from "next/link";

const companyLinks = [{ label: "About Us", href: "/about-us" }];
const employeeLinks = [
	{ label: "Beeba", href: "/beeba" },
	{ label: "Genie", href: "/genie" },
];
const supportLinks = [
	{ label: "Contact Us", href: "/contact-us" },
	{ label: "FAQs", href: "/#faqs" },
];
const policyLinks = [
	{ label: "Privacy Policy", href: "#" },
	{ label: "Term of Service", href: "#" },
	{ label: "Data Deletion Policy", href: "#" },
];

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<a
			href="#"
			aria-label={label}
			className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.18] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors hover:bg-white/[0.24]"
		>
			{children}
		</a>
	);
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
	return (
		<div>
			<h3 className="text-[11px] sm:text-[15px] font-semibold uppercase tracking-[-0.01em] text-white">{title}</h3>
			<div className="mt-3 sm:mt-5 flex flex-col gap-3 sm:gap-5 text-[12px] sm:text-[15px] text-white/86">
				{links.map((link) => (
					<Link key={link.label} href={link.href} className="leading-none transition-colors hover:text-white">
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="relative bg-black  pb-5 pt-2 sm:pb-2 sm:pt-2">
			<div
				aria-hidden="true"
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(60% 68% at 50% 76%, rgba(14, 70, 57, 0.46) 0%, rgba(7, 30, 26, 0.38) 34%, rgba(2, 10, 8, 0.72) 58%, rgba(0, 0, 0, 1) 100%)",
				}}
			/>
<div className="relative rounded-[2px] px-4 sm:px-6 lg:px-20 pb-3 pt-2 text-white lg:mx-10">
			<div className="grid gap-8 pt-1 grid-cols-1 md:grid-cols-[1.55fr_0.95fr_0.95fr_0.9fr]">
				<div>
					<Image
						src="/logo.png"
						alt="DNAi Duha Nashrah"
						width={260}
						height={128}
						className="w-[120px] sm:w-[144px]"
					/>
					<p className="mt-5 sm:mt-8 max-w-[316px] text-[11px] sm:text-[12px] leading-[1.35] text-white/82">
						DuhaNashrah (DNAI) Is An AI Automation Agency
						<br />
						Inspired By The Principle Of Light After Darkness.
						<br />
						We Provide Clarity And Relief To Businesses In Dubai.
					</p>
				</div>

				{/* On mobile: 3-col sub-grid in one row. On md+: children flow into parent grid */}
				<div className="grid grid-cols-3 gap-4 md:contents">
					<FooterColumn title="Company" links={companyLinks} />
					<FooterColumn title="AI Employees" links={employeeLinks} />
					<FooterColumn title="Support" links={supportLinks} />
				</div>
				</div>

				<div className="mt-9 h-px w-full bg-white/30" />

				<div className="grid gap-8 pb-1 pt-8 sm:grid-cols-[1.55fr_1fr]">
					<div>
						<h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">Community</h3>
						<p className="mt-4 text-[11px] leading-[1.28] text-white/74">
							Join Our Facebook Community to learn how to{" "}
							use all of our tools faster and better
						</p>
						<a
							href="#"
							className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-[#00C19C] px-4 text-[10px] font-medium text-white shadow-[0_10px_22px_rgba(9,140,122,0.24)] transition-colors hover:bg-[#19d3bb]"
						>
							Join Facebook Group
							<svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2]" aria-hidden="true">
								<path d="M4 10H16" />
								<path d="M11 5L16 10L11 15" />
							</svg>
						</a>
					</div>

					<div>
						<h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">Follow us on</h3>
						<div className="mt-4 flex flex-wrap gap-3">
							<SocialIcon label="Facebook">
								<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
									<path d="M13.5 21v-7.2h2.4l.36-2.8H13.5V9.21c0-.81.22-1.36 1.38-1.36H16.5V5.34c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v1.74H7.8v2.8h2.4V21h3.3Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="YouTube">
								<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
									<path d="M21.6 8.5a2.92 2.92 0 0 0-2.05-2.07C17.74 6 12 6 12 6s-5.74 0-7.55.43A2.92 2.92 0 0 0 2.4 8.5 30.3 30.3 0 0 0 2 12a30.3 30.3 0 0 0 .4 3.5 2.92 2.92 0 0 0 2.05 2.07C6.26 18 12 18 12 18s5.74 0 7.55-.43a2.92 2.92 0 0 0 2.05-2.07A30.3 30.3 0 0 0 22 12a30.3 30.3 0 0 0-.4-3.5ZM10 14.85v-5.7L15 12l-5 2.85Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="LinkedIn">
								<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
									<path d="M6.52 8.3a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.9 19.5h3.23V9.64H4.9V19.5Zm5.03 0h3.22v-5.5c0-1.45.28-2.86 2.08-2.86 1.78 0 1.8 1.67 1.8 2.95v5.41h3.23v-6.06c0-2.98-.64-5.27-4.12-5.27-1.67 0-2.79.92-3.25 1.78h-.04V9.64H9.93c.04.88 0 9.86 0 9.86Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="Instagram">
								<svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
									<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
									<circle cx="12" cy="12" r="4.2" />
									<circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
								</svg>
							</SocialIcon>
							<SocialIcon label="TikTok">
								<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
									<path d="M14.3 4c.55 1.57 1.5 2.6 3.1 3.34V10a8.1 8.1 0 0 1-3.02-.88v5.25c0 2.98-2.22 5.13-5.16 5.13A4.96 4.96 0 0 1 4.2 14.6a4.98 4.98 0 0 1 7.06-4.54v2.84a2.38 2.38 0 0 0-1.27-.39c-1.2 0-2 .86-2 2.04 0 1.25.89 2.08 2.03 2.08 1.38 0 2.1-.97 2.1-2.4V4h2.18Z" />
								</svg>
							</SocialIcon>
						</div>
					</div>
				</div>

				<div className="mt-7 flex flex-col gap-3 text-[9px] text-white/42 sm:flex-row sm:items-end sm:justify-between">
					<p>Copyright © 2026 DNAI | Powered by NIKU SOLUTION PTE LTD.</p>
					<div className="flex flex-wrap gap-1 text-white/46 sm:justify-end">
						{policyLinks.map((link, index) => (
							<div key={link.label} className="flex items-center gap-1">
								<Link href={link.href} className="transition-colors hover:text-white/70">
									{link.label}
								</Link>
								{index < policyLinks.length - 1 ? <span>|</span> : null}
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
