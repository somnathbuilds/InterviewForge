import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import WhyInterviewForge from "./WhyInterviewForge";
import DashboardPreview from "./DashboardPreview";
import RoadmapSection from "./RoadmapSection";
import AIMentorSection from "./AIMentorSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <WhyInterviewForge />
      <RoadmapSection />
      <AIMentorSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default Home;