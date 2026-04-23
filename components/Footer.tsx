import Image from "next/image";
import Link from "next/link";

const companyLinks = [{ label: "About US", href: "/about-us" }];
const employeeLinks = [
	{ label: "Beeba", href: "/beeba" },
	{ label: "Genie", href: "/genie" },
];
const supportLinks = [
	{ label: "Contact Us", href: "/contact-us" },
	{ label: "FAQS", href: "/#faqs" },
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
			className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.10] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors hover:bg-white/[0.18] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
		>
			{children}
		</a>
	);
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
	return (
		<div>
			<h3 className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-[-0.01em] text-white mb-2">{title}</h3>
			<div className="flex flex-col gap-3 sm:gap-5 text-[13px] sm:text-[15px] text-white/86">
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
		<footer className="relative bg-[#050D0B] pt-8 pb-3 sm:pb-2 ">
			<div
				aria-hidden="true"
				className="absolute inset-0"
				style={{
				 	background:
				 		"radial-gradient(60% 68% at 50% 76%, rgba(14, 70, 57, 0.46) 0%, rgba(7, 30, 26, 0.38) 34%, rgba(2, 10, 8, 0.72) 58%, rgba(0, 0, 0, 1) 100%)",
			 }}
			/>
			<div className="relative rounded-[2px] pb-1 pt-2 text-white lg:px-25">
				<div className=" ">
					<div className="px-5 pb-5">
						<Image
							src="/logo.png"
							alt="DNAi Duha Nashrah"
							width={160}
							height={228}
							className="h-auto w-[132px] sm:w-[150px] lg:w-[160px]"
						/>
					</div>
					<div className="px-5">
                       <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
						<div>
                           <p className="mt-1 max-w-[450px] text-[13px] sm:text-[14px] leading-[1.45] text-white/90 lg:max-w-[316px] lg:leading-[1.35]">
							DuhaNashrah (DNAI) Is An AI Automation Agency<br />
							Inspired By The Principle Of Light After Darkness.<br />
							We Provide Clarity And Relief To Businesses In Dubai.
						</p>
						</div>
					     <div className="grid grid-cols-2 gap-x-10 gap-y-7 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-20">
	                    <FooterColumn title="COMPANY" links={companyLinks} />
				     	<FooterColumn title="AI EMPLOYEES" links={employeeLinks} />
				    	<FooterColumn title="SUPPORT" links={supportLinks} />
					   </div>
					</div>
					
					<div className="mt-10 h-px w-full bg-white/20 px-5" />
				    </div>
				</div>

				

				<div className="grid gap-8 pb-1 pt-8 sm:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.55fr_1fr] px-5">
					<div>
						<h3 className="text-[28px] sm:text-[32px] lg:text-[22px] font-bold tracking-[-0.01em] text-white mb-2">Community</h3>
						<p className="text-[14px] sm:text-[15px] lg:text-[15px] leading-[1.35] lg:leading-[1.28] text-white/80 mb-3">
							Join Our Facebook Community to learn how to<br />
							use all of our tools faster and better
						</p>
						<a
							href="#"
							className="mt-2 inline-flex h-11 sm:h-12 items-center gap-2 rounded-full bg-[#00C19C] px-5 sm:px-6 text-[13px] sm:text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(9,140,122,0.24)] transition-colors hover:bg-[#19d3bb]"
						>
							Join Facebook Group
							<svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[2]" aria-hidden="true">
								<path d="M4 10H16" />
								<path d="M11 5L16 10L11 15" />
							</svg>
						</a>
					</div>
					<div>
						<h3 className="text-[28px] sm:text-[32px] lg:text-[22px] font-bold tracking-[-0.01em] text-white mb-2">Follow us on</h3>
						<div className="mt-2 flex flex-wrap gap-4">
							<SocialIcon label="Facebook">
								<svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 fill-current" aria-hidden="true">
									<path d="M13.5 21v-7.2h2.4l.36-2.8H13.5V9.21c0-.81.22-1.36 1.38-1.36H16.5V5.34c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v1.74H7.8v2.8h2.4V21h3.3Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="YouTube">
								<svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 fill-current" aria-hidden="true">
									<path d="M21.6 8.5a2.92 2.92 0 0 0-2.05-2.07C17.74 6 12 6 12 6s-5.74 0-7.55.43A2.92 2.92 0 0 0 2.4 8.5 30.3 30.3 0 0 0 2 12a30.3 30.3 0 0 0 .4 3.5 2.92 2.92 0 0 0 2.05 2.07C6.26 18 12 18 12 18s5.74 0 7.55-.43a2.92 2.92 0 0 0 2.05-2.07A30.3 30.3 0 0 0 22 12a30.3 30.3 0 0 0-.4-3.5ZM10 14.85v-5.7L15 12l-5 2.85Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="LinkedIn">
								<svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 fill-current" aria-hidden="true">
									<path d="M6.52 8.3a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.9 19.5h3.23V9.64H4.9V19.5Zm5.03 0h3.22v-5.5c0-1.45.28-2.86 2.08-2.86 1.78 0 1.8 1.67 1.8 2.95v5.41h3.23v-6.06c0-2.98-.64-5.27-4.12-5.27-1.67 0-2.79.92-3.25 1.78h-.04V9.64H9.93c.04.88 0 9.86 0 9.86Z" />
								</svg>
							</SocialIcon>
							<SocialIcon label="Instagram">
								<svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
									<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
									<circle cx="12" cy="12" r="4.2" />
									<circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
								</svg>
							</SocialIcon>
							<SocialIcon label="TikTok">
								<svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 fill-current" aria-hidden="true">
									<path d="M14.3 4c.55 1.57 1.5 2.6 3.1 3.34V10a8.1 8.1 0 0 1-3.02-.88v5.25c0 2.98-2.22 5.13-5.16 5.13A4.96 4.96 0 0 1 4.2 14.6a4.98 4.98 0 0 1 7.06-4.54v2.84a2.38 2.38 0 0 0-1.27-.39c-1.2 0-2 .86-2 2.04 0 1.25.89 2.08 2.03 2.08 1.38 0 2.1-.97 2.1-2.4V4h2.18Z" />
								</svg>
							</SocialIcon>
						</div>
					</div>
				</div>

				 <div className="mt-10 flex flex-col gap-3 text-[12px] sm:text-[13px] text-white/60 sm:flex-row sm:items-end sm:justify-between px-5">
					<p>Copyright © 2026 DNAI / Powered by NIKU SOLUTION PTE LTD.</p>
					<div className="flex flex-wrap gap-1.5 sm:gap-2 text-white/70 sm:justify-end">
						{policyLinks.map((link, index) => (
							<div key={link.label} className="flex items-center gap-1">
								<Link href={link.href} className="transition-colors hover:text-white/90">
									{link.label}
								</Link>
								{index < policyLinks.length - 1 ? <span className="text-white/40">/</span> : null}
							</div>
						))}
					</div>
				</div> 
			</div>
		</footer>
	);
}
