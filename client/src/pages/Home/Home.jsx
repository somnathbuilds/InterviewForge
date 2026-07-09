import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import WhyInterviewForge from "./WhyInterviewForge";
import DashboardPreview from "./DashboardPreview";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <WhyInterviewForge />
    </>
  );
}

export default Home;