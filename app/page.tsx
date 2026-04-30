import Header from "@/components/Header";
import LoginNavbar from "@/components/LoginNavbar";
import MediaCard from "@/components/MediaCard";
import Genie from "@/components/Genie";
import Beeba from "@/components/Beeba";
import Bookings from "@/components/Bookings";
import Cards from "@/components/Cards";
import FeedBack from "@/components/FeedBack";
import Footer from "@/components/Footer";
import FrequentlyQuestions from "@/components/FrequentlyQuestions";
import MettingForm from "@/components/MettingForm";
import Operations from "@/components/Operations";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white drag-none">
      <div className="">
      
        <Header />
        
        <MediaCard />
        <Genie />
        <Beeba />
        <Cards />
        
        <RoadMap />
        <Operations />
        <Bookings />
        <FeedBack />
         <FrequentlyQuestions />
        <MettingForm />
      
      </div>
    </div>
  );
}
