import clsx from 'clsx';
import s from './MobileMenu.module.css';
import { UseMobileMenu } from '../zustand/mobileMenu';

const MobileMenu = () => {
  const { isOpen, closeMobileMenu } = UseMobileMenu();

  return (
    <div className={clsx(s.mobileBackdrop, isOpen && s.visible)}>
      <div className={clsx(s.mobileMenu)}>
        <ul className={clsx(s.mobileMenuLinkList)}>
          <li className={clsx(s.mobileMenuItem)}>
            <a href='#about' className={clsx(s.mobileMenuLink)} onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className={clsx(s.mobileMenuItem)}>
            <a href='#yachts' className={clsx(s.mobileMenuLink)} onClick={closeMobileMenu}>
              Yachts
            </a>
          </li>
          <li className={clsx(s.mobileMenuItem)}>
            <a href='#reviews' className={clsx(s.mobileMenuLink)} onClick={closeMobileMenu}>
              Reviews
            </a>
          </li>
        </ul>

        <ul className={clsx(s.mobileMenuSocialList)}>
          <li>
            <a
              href='http://inst'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
            >
              <svg width={24} height={24} className={clsx(s.mobileMenuSocialIcon)}>
                <use href='/images/icons.svg#icon-inst'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='http://youtube'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
            >
              <svg width={24} height={24} className={clsx(s.mobileMenuSocialIcon)}>
                <use href='/images/icons.svg#icon-youtube'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='http://fb'
              target='_blank'
              className={clsx(s.mobileMenuSocialLink)}
              onClick={closeMobileMenu}
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
