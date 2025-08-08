import clsx from 'clsx';
import Container from '../Container/Container';
import s from './ReviewsSection.module.css';
import useReviewsStore from '../../zustand/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewsSection = () => {
  const reviews = useReviewsStore(state => state.reviews);

  return (
    <section className={clsx('section')} id='reviews'>
      <Container>
        <h2 className={clsx(s.reviewSectionTitle)}>
          YachtJet take pride in providing the best possible service and experience to our customers
        </h2>
        <p className={clsx(s.reviewSectionDescription)}>
          Our customers have enjoyed unforgettable moments on our yachts. Don't just take our word
          for it - read on to find out what they have to say about their journey with us.
        </p>

        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          mousewheel={true}
          slidesPerGroup={1}
          modules={[Navigation, Mousewheel]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          wrapperTag='ul'
          className={clsx('custom-swiper')}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index + 1} tag='li' className={clsx(s.reviewsItem)}>
              <ReviewItem {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ReviewsSection;
