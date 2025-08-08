import { useMediaQuery } from 'react-responsive';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import AdvantagesSection from './components/AdvantagesSection/AdvantagesSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import MobileMenu from './components/MobileMenu/MobileMenu';
import RentSection from './components/RentSection/RentSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import YachtsSection from './components/YachtsSection/YachtsSection';
import Modal from './components/Modal/Modal';

function App() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutUsSection />
        <YachtsSection />
        <AdvantagesSection />
        <RentSection />
        <ReviewsSection />
      </main>
      <Footer />

      {!isDesktop && <MobileMenu />}
      <Modal />
    </>
  );
}

export default App;
