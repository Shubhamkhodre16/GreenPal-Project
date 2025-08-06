import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VendorSection from './components/VenderSection';
import TopRatedSection from './components/TopRatedSection';
import FaqSection from './components/FaqSection';
import HowItWorksSection from './components/HowItWorksSection';
import PickMowingFrequency from './components/PickMowingFrequency';
import InstantQuoteCard from './components/InstantQuoteCard';
import LawnServiceSteps from './components/LawnServiceSteps';
import LeaderboardCard from './components/LeaderboardCard';
import Leaderboard from './components/LeaderBoard';
import RankInfoCard from './components/RankInfoCard';
import RecentLawns from './components/RecentLawns';
import GreenPalWorks from './components/GreenPalWorks';
import AboutColumbiaSection from './components/AboutColumbiaSection';


function App() {
  return (
    <div className="App">
       <HomePage />
       <VendorSection/>
       
       <FaqSection/>
       <TopRatedSection/>
       <HowItWorksSection/>
       <PickMowingFrequency/>
       <InstantQuoteCard/>
       {/* <LawnServiceSteps/> */}
       <Leaderboard/>
       <RecentLawns/>
       <GreenPalWorks/>
       <AboutColumbiaSection/>
       <RankInfoCard/>
    </div>
  );
}

export default App;
