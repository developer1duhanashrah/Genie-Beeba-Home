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
			className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[rgba(11, 43, 39, 0.4)] text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors hover:bg-[rgba(30,80,75,0.6)] sm:h-13 sm:w-13 lg:h-15 lg:w-15"
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
							We Provide Clarity And Relief To Businesses In Dubai
						</p>
						</div>
					     <div className=" flex justify-between gap-1 lg:gap-20">
	                    <FooterColumn title="COMPANY" links={companyLinks} />
				     	<FooterColumn title="AI EMPLOYEES" links={employeeLinks} />
				    	<FooterColumn title="SUPPORT" links={supportLinks} />
					   </div>
					</div>
					
					
				   
				<div className="border-b border-white px-5 mt-5 mb-5"></div>
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
						<h3 className="text-[28px] sm:text-[32px] lg:text-[22px] font-bold tracking-[-0.01em] text-white mb-3">Follow us on</h3>
						<div className="flex justify-start gap-4 md:gap-6 lg:gap-8">
							<Image
								src="/framfb.png"
								alt="Social Media Icons"
								width={30}
								height={40}
								className="h-auto w-[40px] md:w-[60px]"
							/>
							<Image
								src="/framyt.png"
								alt="Social Media Icons"
								width={30}
								height={40}
								className="h-auto w-[40px] md:w-[60px]"
							/>
							<Image
								src="/framli.png"
								alt="Social Media Icons"
								width={30}
								height={40}
								className="h-auto w-[40px] md:w-[60px]"
							/>
							<Image
								src="/framin.png"
								alt="Social Media Icons"
								width={30}
								height={40}
								className="h-auto w-[40px] md:w-[60px]"
							/>
							<Image
								src="/framtk.png"
								alt="Social Media Icons"
								width={30}
								height={40}
								className="h-auto w-[40px] md:w-[60px]"
							/>
						</div>
					</div>
				</div>

				 <div className="mt-10 flex flex-col gap-3 text-[12px] sm:text-[13px] text-white/60 sm:flex-row sm:items-end sm:justify-between px-5">
					<p>Copyright © 2026 DNAI / Powered by NIKU SOLUTION PTE LTD</p>
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
