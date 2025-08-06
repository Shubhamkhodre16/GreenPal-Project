import React from "react";
import HomePage from "../components/HomePage";
import VendorSection from "../components/VenderSection";
import FaqSection from "../components/FaqSection";
import TopRatedSection from "../components/TopRatedSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PickMowingFrequency from "../components/PickMowingFrequency";
import InstantQuoteCard from "../components/InstantQuoteCard";
import Leaderboard from "../components/LeaderBoard";
import RecentLawns from "../components/RecentLawns";
import GreenPalWorks from "../components/GreenPalWorks";
import AboutColumbiaSection from "../components/AboutColumbiaSection";
import RankInfoCard from "../components/RankInfoCard";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";
import LawnService from "../components/LawnService";
// import LawnServiceSteps from "../components/LawnServiceSteps";

const MainHomePage = () => {
  return (
    <div>
      <HomePage />
      <VendorSection />
      <FaqSection />
      <TopRatedSection />
      <HowItWorksSection />
      <PickMowingFrequency />
      <InstantQuoteCard />
      {/* <LawnServiceSteps/> */}
      <Leaderboard />
      <RecentLawns />
      <GreenPalWorks />
      <AboutColumbiaSection />
      <ReviewSection/>
      <RankInfoCard />
      <LawnService/>
      <Footer/>
    </div>
  );
};

export default MainHomePage;
