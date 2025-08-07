import { create } from 'zustand';
import reviewsData from '../data/reviews.json';

interface Image {
  png: string;
  webp: string;
}

interface ImageData {
  normal: Image;
  retina: Image;
}

export interface ReviewsData {
  name: string;
  review: string;
  images: ImageData;
}

interface ReviewsStore {
  reviews: ReviewsData[];
}

const useReviewsStore = create<ReviewsStore>(() => ({
  reviews: reviewsData,
}));

export default useReviewsStore;
