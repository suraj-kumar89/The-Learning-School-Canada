import Bottomestrip from "@/SharedComponent/BottomStrip";
import FAQ from "@/SharedComponent/FAQs";
import FinalCTA from "@/SharedComponent/FinalCTA";
import Header from "@/SharedComponent/Header";
import Hero from "@/SharedComponent/Hero";
import Journey from "@/SharedComponent/Journey";
import TeachingStyle from "@/SharedComponent/Teachingstyle";
import Testimonials from "@/SharedComponent/Testimonials";
import TrialSection from "@/SharedComponent/Trail";
import Tutors from "@/SharedComponent/Tutor";
import WhoIsThisFor from "@/SharedComponent/WhoisThis";
import WhyTEF from "@/SharedComponent/WhyTEF";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <WhyTEF/>
      <Tutors/>
      <TrialSection/>
      <Testimonials/>
      <Journey/>
      <WhoIsThisFor/>
      <TeachingStyle/>
      <FinalCTA/>
      <FAQ/>
      <Bottomestrip/>
    </main>
  );
}
