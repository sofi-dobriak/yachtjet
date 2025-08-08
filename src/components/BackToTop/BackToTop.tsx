import clsx from 'clsx';
import { IoIosArrowUp } from 'react-icons/io';
import s from './BackToTop.module.css';
import useScrollStore from '../../zustand/scroll';
import { useEffect } from 'react';

const BackToTop = () => {
  const { isScroll, setIsScroll } = useScrollStore();

  useEffect(() => {
    const toggleVisible = () => {
      setIsScroll(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [setIsScroll]);

  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type='button'
      className={clsx(s.backToTopButton, isScroll && s.visible)}
      onClick={handleScroll}
    >
      <IoIosArrowUp className={clsx(s.backToTopIcon)} />
    </button>
  );
};

export default BackToTop;
