import LoginNavbar from "@/components/LoginNavbar";
import GenieHeader from "@/components/BeebaHeader";
import SocialMediaIcons from "@/components/SocialMediaIcon";
import BeebaBusiness from "@/components/BeebaBusness";
import BeebaBrand from "@/components/BeebaBrand";
import BeebaWorkflow from "@/components/BeebaWorkflow";
import FrequentlyQuestions from "@/components/FrequentlyQuestions";
import BeebaMarketing from "@/components/BeebaMarketing";

export const metadata = {
	title: "Beeba – Autonomous Social Media AI",
	description:
		"Meet Beeba, your autonomous social media AI agent managing Facebook, Instagram, TikTok and LinkedIn.",
};

export default function BeebaPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			
			<GenieHeader />
			<SocialMediaIcons />
			<BeebaBusiness />
			<BeebaMarketing />
			<BeebaBrand />
			<BeebaWorkflow />
			<FrequentlyQuestions />
		</div>
	);
}
