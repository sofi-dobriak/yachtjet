import clsx from 'clsx';
import s from './YachtsSection.module.css';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useReviewsStore from '../zustand/yachts';
import YachtItem from '../YachtItem/YachtItem';

const YachtsSection = () => {
  const yachts = useReviewsStore(state => state.yachts);

  return (
    <section className={clsx('section')} id='yachts'>
      <Container>
        <h2 className={clsx(s.yachtsTitle)}>
          Choose your dream yacht and sail away into the sunset
        </h2>
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3, spaceBetween: 26 },
            1440: { slidesPerView: 3, spaceBetween: 32 },
          }}
          wrapperTag='ul'
          className={clsx('custom-swiper', s.yachtsList)}
        >
          {yachts.map((yacht, index) => (
            <SwiperSlide key={index + 1} tag='li' className={clsx(s.yachtsItem)}>
              <YachtItem {...yacht} />
            </SwiperSlide>
          ))}
        </Swiper>
        <a href='#rent' className={clsx(s.yachtsLink)}>
          Yacht rental
        </a>
      </Container>
    </section>
  );
};

export default YachtsSection;
