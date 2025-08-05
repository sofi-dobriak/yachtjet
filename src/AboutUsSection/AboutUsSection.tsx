import clsx from 'clsx';
import s from './AboutUsSection.module.css';
import Container from '../Container/Container';

const AboutUsSection = () => {
  return (
    <section className={clsx('section')} id='about'>
      <Container>
        <div className={clsx(s.aboutTextContainer)}>
          <h2 className={clsx(s.aboutTitle)}>
            YachtJet fleet is here to take you on the ultimate adventure
          </h2>
          <div className={clsx(s.descriptionContainer)}>
            <p className={clsx(s.aboutDescription)}>
              From spacious decks to state-of-the-art technology, our yachts are designed to provide
              the perfect blend of luxury and functionality.
            </p>
            <p className={clsx(s.aboutSecondaryText)}>
              Take a look at our selection below and choose the yacht that matches your needs and
              preferences. No matter which yacht you choose, our experienced crew will ensure that
              your journey is smooth and enjoyable. Book now and get ready for an unforgettable
              adventure on the high seas.
            </p>
          </div>
        </div>
        <picture>
          <source
            media='(min-width:1440px)'
            type='image/webp'
            srcSet='/images/about/xl-about-img.webp 1x, /images/about/xl-about-img@2x.webp 2x'
          />
          <source
            media='(min-width:1440px)'
            type='image/png'
            srcSet='/images/about/xl-about-img.png 1x, /images/about/xl-about-img@2x.png 2x'
          />
          <source
            media='(min-width:1280px)'
            type='image/webp'
            srcSet='/images/about/lg-about-img.webp 1x, /images/about/lg-about-img@2x.webp 2x'
          />
          <source
            media='(min-width:1280px)'
            type='image/png'
            srcSet='/images/about/lg-about-img.png 1x, /images/about/lg-about-img@2x.png 2x'
          />
          <source
            media='(min-width:767px)'
            type='image/webp'
            srcSet='/images/about/md-about-img.webp 1x, /images/about/md-about-img@2x.webp 2x'
          />
          <source
            media='(min-width:767px)'
            type='image/png'
            srcSet='/images/about/md-about-img.png 1x, /images/about/md-about-img@2x.png 2x'
          />
          <source
            media='(max-width:767px)'
            type='image/webp'
            srcSet='/images/about/sm-about-img.webp 1x, /images/about/sm-about-img@2x.webp 2x'
          />
          <source
            media='(max-width:767px)'
            type='image/png'
            srcSet='/images/about/sm-about-img.png 1x, /images/about/sm-about-img@2x.png 2x'
          />
          <img
            src='/images/about/sm-about-img.png'
            alt='A yacht at sea, with mountains and a starry sky in the background'
            className={clsx(s.aboutImage)}
          />
        </picture>
      </Container>
    </section>
  );
};

export default AboutUsSection;
