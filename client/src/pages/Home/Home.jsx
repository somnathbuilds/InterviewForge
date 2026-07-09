import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import WhyInterviewForge from "./WhyInterviewForge";
import DashboardPreview from "./DashboardPreview";
import RoadmapSection from "./RoadmapSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <WhyInterviewForge />
      <RoadmapSection />
    </>
  );
}

export default Home;