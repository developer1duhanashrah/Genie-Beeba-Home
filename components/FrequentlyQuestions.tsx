const questions = [
	"What are autonomous AI systems?",
	"How is Duha Nashrah different from other AI tools?",
	"What kind of businesses do you work with?",
	"Are Duha Nashrah systems hard to use?",
];

function PlusIcon() {
	return (
		<svg viewBox="0 0 20 20" className="h-[18px] w-[18px] fill-none stroke-white/88 stroke-[1.6]" aria-hidden="true">
			<path d="M10 3.5V16.5" />
			<path d="M3.5 10H16.5" />
		</svg>
	);
	}

export default function FrequentlyQuestions() {
	return (
		<section className="relative px-4 sm:px-6 lg:px-20 lg:mx-10 pb-10 pt-8 sm:pb-14 sm:pt-10">
			<div
				aria-hidden="true"
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(42% 34% at 50% 32%, rgba(10, 57, 48, 0.3) 0%, rgba(4, 17, 14, 0.12) 46%, rgba(0, 0, 0, 0) 76%)",
				}}
			/>

			<div className="relative flex flex-col items-center text-center">
				<div className="inline-flex h-10 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[11px] font-medium text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
					<span className="h-2.5 w-2.5 rounded-full bg-[#17c9b0] shadow-[0_0_0_4px_rgba(23,201,176,0.12)]" />
					Learn More, Worry Less
				</div>

				<h2 className="mt-5 max-w-[360px] text-balance text-[33px] font-normal leading-[1.08] tracking-[-0.04em] text-white sm:text-[38px]">
					Frequently Asked
					<br />
					Questions
				</h2>
			</div>

			<div className="relative mt-9 flex  flex-col gap-[16px]">
				{questions.map((question) => (
					<button
						key={question}
						type="button"
						className="flex min-h-[56px] w-full items-center justify-between rounded-[15px] border border-white/10 bg-[#1f1f1f] px-[18px] py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_6px_14px_rgba(0,0,0,0.14)] transition-colors hover:bg-[#242424]"
					>
						<span className="pr-4 text-[13px] font-normal leading-none tracking-[-0.01em] text-white/88 sm:text-[14px]">
							{question}
						</span>
						<span className="shrink-0">
							<PlusIcon />
						</span>
					</button>
				))}
			</div>
		</section>
	);
}
