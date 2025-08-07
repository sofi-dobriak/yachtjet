import clsx from 'clsx';
import s from './MobileMenu.module.css';
import { UseMobileMenu } from '../../zustand/mobileMenu';
import { useEffect } from 'react';

const MobileMenu = () => {
  const { isOpen, closeMobileMenu } = UseMobileMenu();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [closeMobileMenu]);

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  };

  return (
    <div className={clsx(s.mobileBackdrop, isOpen && s.visible)} onClick={handleBackDropClick}>
      <div className={clsx(s.mobileMenu)}>
        <ul className={clsx(s.mobileMenuLinkList)}>
          <li className={clsx(s.mobileMenuItem)}>
            <a
              href='#about'
              className={clsx(s.mobileMenuLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the about section'
            >
              About
            </a>
          </li>
          <li className={clsx(s.mobileMenuItem)}>
            <a
              href='#yachts'
              className={clsx(s.mobileMenuLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the gallery with yachts section'
            >
              Yachts
            </a>
          </li>
          <li className={clsx(s.mobileMenuItem)}>
            <a
              href='#reviews'
              className={clsx(s.mobileMenuLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the section with reviews from customers'
            >
              Reviews
            </a>
          </li>
        </ul>

        <ul className={clsx(s.mobileMenuSocialList)}>
          <li>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the instagram'
            >
              <svg width={24} height={24} className={clsx(s.mobileMenuSocialIcon)}>
                <use href='/images/icons.svg#icon-inst'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the youtube'
            >
              <svg width={24} height={24} className={clsx(s.mobileMenuSocialIcon)}>
                <use href='/images/icons.svg#icon-youtube'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
              aria-label='Link to the facebook'
            >
              <svg width={24} height={24} className={clsx(s.mobileMenuSocialIcon)}>
                <use href='/images/icons.svg#icon-fb'></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
