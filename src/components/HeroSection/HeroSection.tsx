import clsx from 'clsx';
import s from './HeroSection.module.css';
import Container from '../Container/Container';

const HeroSection = () => {
  return (
    <section className={clsx('section', s.heroSection)}>
      <Container>
        <h1 className={clsx(s.heroTitle)}>Explore the High Seas with Our Luxury Yacht Rentals</h1>
        <p className={clsx(s.heroDescription)}>
          Experience the freedom and luxury of yachting on the open seas. Choose from our
          top-of-the-line yachts and embark on an unforgettable journey surrounded by breathtaking
          views and state-of-the-art amenities.
        </p>
        <a
          href='#rent'
          className={clsx(s.heroLink)}
          aria-label='Link to the section with the yacht rental form'
        >
          Yacht rental
        </a>
      </Container>
    </section>
  );
};

export default HeroSection;
