import clsx from 'clsx';
import s from './ReviewItem.module.css';
import type { ReviewsData } from '../../zustand/reviews';

const ReviewItem = ({ name, review, images }: ReviewsData) => {
  const { normal, retina } = images;

  return (
    <>
      <picture>
        <source
          media='(min-width:320px)'
          type='image/webp'
          srcSet={`${normal.webp} 1x, ${retina.webp} 2x`}
        />
        <source
          media='(min-width:320px)'
          type='image/png'
          srcSet={`${normal.png} 1x, ${retina.png} 2x`}
        />
        <img
          src={normal.png}
          alt={`An reviewer ${name}'s avatar`}
          loading='lazy'
          className={clsx(s.reviewerImage)}
        />
      </picture>
      <h3 className={clsx(s.reviewerName)}>{name}</h3>
      <p className={clsx(s.reviewerText)}>{review}</p>
    </>
  );
};

export default ReviewItem;
