import clsx from 'clsx';
import s from './BurgerButton.module.css';
import { UseMobileMenu } from '../../zustand/mobileMenu';

const BurgerButton = () => {
  const { isOpen, openMobileMenu, closeMobileMenu } = UseMobileMenu();

  const toggleMenu = () => {
    return isOpen ? closeMobileMenu() : openMobileMenu();
  };

  return (
    <button
      type='button'
      className={clsx(s.menuButton)}
      aria-label='Button for open and close mobile menu'
      onClick={toggleMenu}
    >
      <svg width={24} height={24} className={clsx(s.burgerIcon, isOpen && s.hidden)}>
        <use href='/images/icons.svg#icon-burger'></use>
      </svg>
      <svg width={24} height={24} className={clsx(s.closeIcon, isOpen && s.visible)}>
        <use href='/images/icons.svg#icon-close'></use>
      </svg>
    </button>
  );
};

export default BurgerButton;
