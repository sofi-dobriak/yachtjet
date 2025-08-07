import clsx from 'clsx';
import s from './YachtsSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import useReviewsStore from '../../zustand/yachts';
import YachtItem from '../YachtItem/YachtItem';
import Container from '../Container/Container';
import { Navigation, Mousewheel } from 'swiper/modules';

const YachtsSection = () => {
  const yachts = useReviewsStore(state => state.yachts);

  return (
    <section className={clsx('section')} id='yachts'>
      <Container>
        <h2 className={clsx(s.yachtsTitle)}>
          Choose your dream yacht and sail away into the sunset
        </h2>
        <div className={clsx(s.swiperContainer)}>
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            mousewheel={true}
            modules={[Navigation, Mousewheel]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
              1440: { slidesPerView: 3 },
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
        </div>
        <a
          href='#rent'
          className={clsx(s.yachtsLink)}
          aria-label='Link to the section with the yacht rental form'
        >
          Yacht rental
        </a>
      </Container>
    </section>
  );
};

export default YachtsSection;
