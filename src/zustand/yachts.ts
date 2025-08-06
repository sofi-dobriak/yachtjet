import { create } from 'zustand';
import yachtsData from '../../public/data/yachts.json';

interface NormalImage {
  png: string;
  webp: string;
}

type RetinaImage = NormalImage;

interface ImageData {
  normal: NormalImage;
  retina: RetinaImage;
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
