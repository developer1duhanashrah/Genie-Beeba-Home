import CAptureEveryOpertunity from "@/components/GenieComponents/CAptureEveryOpertunity";
import TurnMissedCalls from "@/components/GenieComponents/TurnMissedCalls";
import  EveryUnAnsweredCall  from "@/components/GenieComponents/EveryUnAnsweredCall";
import SeeHowGenie from "@/components/GenieComponents/SeeHowGenie";
import HowGenieTransforms from "@/components/GenieComponents/HowGenieTransforms";
import FromCallToAppointment from "@/components/GenieComponents/FromCallToAppointment";
import HowGenieIsDeployed from "@/components/GenieComponents/HowGenieIsDeployed";
import RealResults from "@/components/GenieComponents/RealResults";
import ReadyToDeploy from "@/components/GenieComponents/ReadyToDeploy";
import GenieFAQ from "@/components/GenieComponents/GenieFAQ";
import FrequentlyQuestions from "@/components/FrequentlyQuestions";
import GeniePricing from "@/components/GenieComponents/GeniePricing";


export const metadata = {
	title: "Beeba – Autonomous Social Media AI",
	description:
		"Meet Beeba, your autonomous social media AI agent managing Facebook, Instagram, TikTok and LinkedIn.",
};

export default function BeebaPage() {
	return (
		<div className=" bg-black text-white">
			<TurnMissedCalls/>
            <GeniePricing />
           <CAptureEveryOpertunity/>
           <EveryUnAnsweredCall/>
        {/* <AgenticAiVoice /> replaced with component Capture EVery opertunity starting today */} 
          <SeeHowGenie/>
          <HowGenieTransforms />
          <FromCallToAppointment/>
          <HowGenieIsDeployed/>
          <RealResults/>
          <ReadyToDeploy/>
          <FrequentlyQuestions/>
			
		</div>
	);
}
