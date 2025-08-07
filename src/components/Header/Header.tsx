import clsx from 'clsx';
import s from './Header.module.css';
import BurgerButton from '../BurgerButton/BurgerButton';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <div className={clsx(s.header)}>
        <a className={clsx(s.logo)} href='/index.html'>
          yachtjet
        </a>
        {isMobile ? <BurgerButton /> : <Navigation />}
      </div>
    </Container>
  );
};

export default Header;
