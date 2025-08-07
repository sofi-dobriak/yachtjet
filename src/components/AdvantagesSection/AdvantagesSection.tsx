import clsx from 'clsx';
import s from './AdvantagesSection.module.css';
import Container from '../Container/Container';

const AdvantagesSection = () => {
  return (
    <section className={clsx('section')}>
      <Container>
        <h2 className={clsx('visually-hidden')}>Advantages Section</h2>
        <div className={clsx(s.advantagesListImageContainer)}>
          <ol className={clsx(s.advantagesList)}>
            <li className={clsx(s.advantagesItem)}>
              <p className={clsx(s.advantagesItemNumber)}>01</p>
              <p className={clsx(s.advantagesItemText)}>
                Swimming and water sports: try your hand at water skiing
              </p>
            </li>
            <li className={clsx(s.advantagesItem)}>
              <p className={clsx(s.advantagesItemNumber)}>02</p>
              <p className={clsx(s.advantagesItemText)}>Fishing: try to catch your own dinner</p>
            </li>
            <li className={clsx(s.advantagesItem)}>
              <p className={clsx(s.advantagesItemNumber)}>03</p>
              <p className={clsx(s.advantagesItemText)}>
                Sightseeing tours: take a shore or island tour, enjoy the views and sunsets from the
                water
              </p>
            </li>
            <li className={clsx(s.advantagesItem)}>
              <p className={clsx(s.advantagesItemNumber)}>04</p>
              <p className={clsx(s.advantagesItemText)}>
                Rest and relaxation: read a book or listen to music while enjoying the outdoor
                atmosphere.
              </p>
            </li>
          </ol>

          <picture>
            <source
              media='(min-width:1440px)'
              type='image/webp'
              srcSet='/images/advantages/lg-adv-img.webp 1x, /images/advantages/lg-adv-img@2x.webp 2x'
            />
            <source
              media='(min-width:1440px)'
              type='image/png'
              srcSet='/images/advantages/lg-adv-img.png 1x, /images/advantages/lg-adv-img@2x.png 2x'
            />
            <source
              media='(min-width:1280px)'
              type='image/webp'
              srcSet='/images/advantages/xl-adv-img.webp 1x, /images/advantages/xl-adv-img@2x.webp 2x'
            />
            <source
              media='(min-width:1280px)'
              type='image/png'
              srcSet='/images/advantages/xl-adv-img.png 1x, /images/advantages/xl-adv-img@2x.png 2x'
            />
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet='/images/advantages/md-adv-img.webp 1x, /images/advantages/md-adv-img@2x.webp 2x'
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet='/images/advantages/md-adv-img.png 1x, /images/advantages/md-adv-img@2x.png 2x'
            />
            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet='/images/advantages/sm-adv-img.webp 1x, /images/advantages/sm-adv-img@2x.webp 2x'
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet='/images/advantages/sm-adv-img.png 1x, /images/advantages/sm-adv-img@2x.png 2x'
            />
            <img
              src='/images/advantages/sm-adv-img.png'
              alt='A yacht deck'
              className={clsx(s.advantagesImage)}
              loading='lazy'
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
