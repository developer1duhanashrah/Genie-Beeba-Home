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
			className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[rgba(11, 43, 39, 0.4)] text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors hover:bg-[rgba(30,80,75,0.6)] sm:h-13 sm:w-13 lg:h-15 lg:w-15 drag-none"
		>
			{children}
		</a>
	);
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-[13px] sm:text-[15px] font-semibold uppercase tracking-[-0.01em] text-white mb-2">{title}</h3>
			<div className="flex flex-col gap-3 sm:gap-8 text-[13px] sm:text-[15px] text-white/86">
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
		<footer className="md:px-25 bg-black">
			<div className=" relative bg-[#050D0B] pt-8 pb-3 sm:pb-2">
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
							className="h-auto w-[132px] sm:w-[150px] lg:w-[160px] drag-none"
						/>
					</div>
					<div className="px-5">
                       <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
						<div>
                           <p className="mt-1 text-[13px] sm:text-[14px] leading-[1.45] text-white/90 lg:leading-[2]">
							DuhaNashrah (DNAI) Is An AI Automation Agency<br />
							Inspired By The Principle Of Light After Darkness.<br />
							We Provide Clarity And Relief To Businesses In Dubai
						</p>
						</div>
					     <div className=" flex justify-between gap-1 lg:gap-25 lg:pr-5">
	                    <FooterColumn title="COMPANY" links={companyLinks} />
				     	<FooterColumn title="AI EMPLOYEES" links={employeeLinks} />
				    	<FooterColumn title="SUPPORT" links={supportLinks} />
					   </div>
					</div>
					
					
				{/* <div className="my-6 flex justify-center">
					<div
						className="w-full max-w-full h-[2px] rounded"
						style={{
							background: 'linear-gradient(90deg, rgba(238, 231, 231, 0) 0%, rgba(0,193,156,0.95) 50%, rgba(0,0,0,0) 100%)',
							boxShadow: '0 6px 18px rgba(233, 236, 236, 0.12)',
						}}
					/>
				</div> */}
				<div className="my-6 flex justify-center">
					<div
						className="w-full max-w-full h-[2px] rounded"
						style={{
							background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.95) 50%, rgba(0,0,0,0) 100%)',
							boxShadow: '0 6px 18px rgba(255,255,255,0.08)',
						}}
					/>
				</div>
				 </div>
				</div>


				<div className="grid gap-8 pb-1 pt-8 sm:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.55fr_1fr] px-5">
					<div>
						{/* <h3 className="text-[28px] sm:text-[32px] lg:text-[22px] font-bold tracking-[-0.01em] text-white mb-2">Community</h3>
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
						</a> */}
					</div> 
					<div className="flex flex-col items-start gap-4">
						<div>
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[22px] font-bold tracking-[-0.01em] text-white mb-3">Follow us on</h3>
						</div>
						
						<div className=" flex gap-4 md:gap-6 lg:gap-8 drag-none justify-between items-start ">
							<div className="flex rounded-full border bg-[#2f3c38] border-white/15 text-white items-center">
								 <svg
                                       width={28} className="m-4 text-center"
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g clipPath="url(#clip0_596_188)">
      <path
        d="M14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14C28 6.26808 21.7319 0 14 0Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_596_188">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
							</div>
							<div className="flex rounded-full border bg-[#2f3c38] border-white/15 text-white items-center">
								 <svg
                                       width={28} className="m-4 text-center"
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g clipPath="url(#clip0_596_188)">
     <path
      d="M27.7211 8.24922C27.7211 8.24922 27.4477 6.31875 26.6055 5.47109C25.5391 4.35547 24.3469 4.35 23.8 4.28437C19.8844 4 14.0055 4 14.0055 4H13.9945C13.9945 4 8.11562 4 4.2 4.28437C3.65313 4.35 2.46094 4.35547 1.39453 5.47109C0.552344 6.31875 0.284375 8.24922 0.284375 8.24922C0.284375 8.24922 0 10.5188 0 12.7828V14.9047C0 17.1687 0.278906 19.4383 0.278906 19.4383C0.278906 19.4383 0.552344 21.3688 1.38906 22.2164C2.45547 23.332 3.85547 23.2938 4.47891 23.4141C6.72109 23.6273 14 23.693 14 23.693C14 23.693 19.8844 23.682 23.8 23.4031C24.3469 23.3375 25.5391 23.332 26.6055 22.2164C27.4477 21.3688 27.7211 19.4383 27.7211 19.4383C27.7211 19.4383 28 17.1742 28 14.9047V12.7828C28 10.5188 27.7211 8.24922 27.7211 8.24922ZM11.107 17.4805V9.61094L18.6703 13.5594L11.107 17.4805Z"
      fill="white"
    />
    </g>
    <defs>
      <clipPath id="clip0_596_188">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
							</div>
							<div className="flex rounded-full border bg-[#2f3c38] border-white/15 text-white items-center">
								 <svg
                                       width={28} className="m-4 text-center"
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g clipPath="url(#clip0_596_188)">
       <path
        d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_596_188">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
							</div>
							<div className="flex rounded-full border bg-[#2f3c38] border-white/15 text-white items-center">
								 <svg className="m-4 text-center"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g clipPath="url(#clip0_596_197)">
      <path
        d="M14 2.52109C17.7406 2.52109 18.1836 2.5375 19.6547 2.60312C21.0219 2.66328 21.7602 2.89297 22.2523 3.08438C22.9031 3.33594 23.3734 3.64219 23.8602 4.12891C24.3523 4.62109 24.6531 5.08594 24.9047 5.73672C25.0961 6.22891 25.3258 6.97266 25.3859 8.33437C25.4516 9.81094 25.468 10.2539 25.468 13.9891C25.468 17.7297 25.4516 18.1727 25.3859 19.6438C25.3258 21.0109 25.0961 21.7492 24.9047 22.2414C24.6531 22.8922 24.3469 23.3625 23.8602 23.8492C23.368 24.3414 22.9031 24.6422 22.2523 24.8938C21.7602 25.0852 21.0164 25.3148 19.6547 25.375C18.1781 25.4406 17.7352 25.457 14 25.457C10.2594 25.457 9.81641 25.4406 8.34531 25.375C6.97813 25.3148 6.23984 25.0852 5.74766 24.8938C5.09688 24.6422 4.62656 24.3359 4.13984 23.8492C3.64766 23.357 3.34687 22.8922 3.09531 22.2414C2.90391 21.7492 2.67422 21.0055 2.61406 19.6438C2.54844 18.1672 2.53203 17.7242 2.53203 13.9891C2.53203 10.2484 2.54844 9.80547 2.61406 8.33437C2.67422 6.96719 2.90391 6.22891 3.09531 5.73672C3.34687 5.08594 3.65313 4.61562 4.13984 4.12891C4.63203 3.63672 5.09688 3.33594 5.74766 3.08438C6.23984 2.89297 6.98359 2.66328 8.34531 2.60312C9.81641 2.5375 10.2594 2.52109 14 2.52109ZM14 0C10.1992 0 9.72344 0.0164062 8.23047 0.0820312C6.74297 0.147656 5.72031 0.388281 4.83437 0.732812C3.91016 1.09375 3.12813 1.56953 2.35156 2.35156C1.56953 3.12812 1.09375 3.91016 0.732812 4.82891C0.388281 5.72031 0.147656 6.7375 0.0820313 8.225C0.0164063 9.72344 0 10.1992 0 14C0 17.8008 0.0164063 18.2766 0.0820313 19.7695C0.147656 21.257 0.388281 22.2797 0.732812 23.1656C1.09375 24.0898 1.56953 24.8719 2.35156 25.6484C3.12813 26.425 3.91016 26.9062 4.82891 27.2617C5.72031 27.6062 6.7375 27.8469 8.225 27.9125C9.71797 27.9781 10.1937 27.9945 13.9945 27.9945C17.7953 27.9945 18.2711 27.9781 19.7641 27.9125C21.2516 27.8469 22.2742 27.6062 23.1602 27.2617C24.0789 26.9062 24.8609 26.425 25.6375 25.6484C26.4141 24.8719 26.8953 24.0898 27.2508 23.1711C27.5953 22.2797 27.8359 21.2625 27.9016 19.775C27.9672 18.282 27.9836 17.8062 27.9836 14.0055C27.9836 10.2047 27.9672 9.72891 27.9016 8.23594C27.8359 6.74844 27.5953 5.72578 27.2508 4.83984C26.9062 3.91016 26.4305 3.12812 25.6484 2.35156C24.8719 1.575 24.0898 1.09375 23.1711 0.738281C22.2797 0.39375 21.2625 0.153125 19.775 0.0875C18.2766 0.0164063 17.8008 0 14 0Z"
        fill="white"
      />
      <path
        d="M14 6.80859C10.0297 6.80859 6.80859 10.0297 6.80859 14C6.80859 17.9703 10.0297 21.1914 14 21.1914C17.9703 21.1914 21.1914 17.9703 21.1914 14C21.1914 10.0297 17.9703 6.80859 14 6.80859ZM14 18.6648C11.4242 18.6648 9.33516 16.5758 9.33516 14C9.33516 11.4242 11.4242 9.33516 14 9.33516C16.5758 9.33516 18.6648 11.4242 18.6648 14C18.6648 16.5758 16.5758 18.6648 14 18.6648Z"
        fill="white"
      />
      <path
        d="M23.1547 6.52412C23.1547 7.45381 22.4 8.20303 21.4758 8.20303C20.5461 8.20303 19.7969 7.44834 19.7969 6.52412C19.7969 5.59443 20.5516 4.84521 21.4758 4.84521C22.4 4.84521 23.1547 5.5999 23.1547 6.52412Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_596_197">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
							</div>
							<div className="flex rounded-full border bg-[#2f3c38] border-white/15 text-white items-center">
								 <svg
                                       width={28} className="m-4 text-center"
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <g clipPath="url(#clip0_596_188)">
       <path
      d="M19.9186 0H15.1998V19.0724C15.1998 21.3449 13.3849 23.2116 11.1263 23.2116C8.86771 23.2116 7.05279 21.3449 7.05279 19.0724C7.05279 16.8406 8.82738 15.0145 11.0053 14.9333V10.1449C6.20582 10.2261 2.33398 14.1623 2.33398 19.0724C2.33398 24.0232 6.28648 28 11.1666 28C16.0467 28 19.9992 23.9826 19.9992 19.0724V9.29273C21.7738 10.5913 23.9517 11.3623 26.2507 11.4029V6.61449C22.7015 6.49276 19.9186 3.57101 19.9186 0Z"
      fill="white"
    />
    </g>
    <defs>
      <clipPath id="clip0_596_188">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
							</div>
							
							
							
							
						</div>
					</div>
				</div>

				 <div className="mt-10 flex flex-col gap-3 text-[10px]  text-gray-600 sm:flex-row sm:items-end sm:justify-between px-5">
					<p>Copyright © 2026 DNAI / Powered by NIKU SOLUTION PVT LTD</p>
					{/* <div className="flex flex-wrap gap-1.5 sm:gap-2 text-white/70 sm:justify-end">
						{policyLinks.map((link, index) => ( 
							
							<div key={link.label} className="flex items-center gap-1">
								<Link href={link.href} className="transition-colors hover:text-w">
									{link.label}
								</Link>
								{index < policyLinks.length - 1 ? <span className="text-white/40">/</span> : null}
							</div>
						))}
					</div> */}
				</div> 
			</div>
			</div>
			
		</footer>
	);
}
