import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MobileMenu from './components/MobileMenu/MobileMenu';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import YachtsSection from './components/YachtsSection/YachtsSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <YachtsSection />
      <AdvantagesSection />
      <ReviewsSection />
      <MobileMenu />
    </>
  );
}

export default App;
