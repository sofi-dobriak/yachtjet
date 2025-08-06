import { create } from 'zustand';
import yachtsData from '../data/yachts.json';

interface Image {
  png: string;
  webp: string;
}

interface ImageData {
  normal: Image;
  retina: Image;
}

export interface YachtsData {
  name: string;
  category: string;
  length: string;
  shipyard: string;
  built: number;
  guests: string;
  price: string;
  images: ImageData;
}

interface YachtsStore {
  yachts: YachtsData[];
}

const useReviewsStore = create<YachtsStore>(() => ({
  yachts: yachtsData,
}));

export default useReviewsStore;
