import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <ul className={clsx(s.navMenuLinkList)}>
        <li className={clsx(s.navMenuItem)}>
          <a href='#about' className={clsx(s.navMenuLink)} aria-label='Link to the about section'>
            About
          </a>
        </li>
        <li className={clsx(s.navMenuItem)}>
          <a
            href='#yachts'
            className={clsx(s.navMenuLink)}
            aria-label='Link to the gallery with yachts section'
          >
            Yachts
          </a>
        </li>
        <li className={clsx(s.navMenuItem)}>
          <a
            href='#reviews'
            className={clsx(s.navMenuLink)}
            aria-label='Link to the section with reviews from customers'
          >
            Reviews
          </a>
        </li>
      </ul>

      <ul className={clsx(s.navMenuSocialList)}>
        <li>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            className={clsx(s.navMenuSocialLink)}
            aria-label='Link to the instagram'
          >
            <svg width={24} height={24} className={clsx(s.navMenuSocialIcon)}>
              <use href='/images/icons.svg#icon-inst'></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/'
            target='_blank'
            className={clsx(s.navMenuSocialLink)}
            aria-label='Link to the youtube'
          >
            <svg width={24} height={24} className={clsx(s.navMenuSocialIcon)}>
              <use href='/images/icons.svg#icon-youtube'></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            className={clsx(s.navMenuSocialLink)}
            aria-label='Link to the facebook'
          >
            <svg width={24} height={24} className={clsx(s.navMenuSocialIcon)}>
              <use href='/images/icons.svg#icon-fb'></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
