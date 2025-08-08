import clsx from 'clsx';
import s from './RentSection.module.css';
import RentForm from '../RentForm/RentForm';
import Container from '../Container/Container';
const RentSection = () => {
  return (
    <section id='rent'>
      <Container>
        <div className={clsx(s.rentFormContainer)}>
          <div className={clsx(s.rentTitleFormContainer)}>
            <h2 className={clsx(s.rentTitle)}>Rent a yacht now</h2>
            <RentForm />
          </div>
          <picture>
            <source
              media='(min-width:1440px)'
              type='image/webp'
              srcSet='/images/form/lg-form-img.webp 1x, /images/form/lg-form-img@2x.webp 2x'
            />
            <source
              media='(min-width:1440px)'
              type='image/png'
              srcSet='/images/form/lg-form-img.png 1x, /images/form/lg-form-img@2x.png 2x'
            />
            <source
              media='(min-width:1280px)'
              type='image/webp'
              srcSet='/images/form/xl-form-img.webp 1x, /images/form/xl-form-img@2x.webp 2x'
            />
            <source
              media='(min-width:1280px)'
              type='image/png'
              srcSet='/images/form/xl-form-img.png 1x, /images/form/xl-form-img@2x.png 2x'
            />
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet='/images/form/md-form-img.webp 1x, /images/form/md-form-img@2x.webp 2x'
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet='/images/form/md-form-img.png 1x, /images/form/md-form-img@2x.png 2x'
            />
            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet='/images/form/sm-form-img.webp 1x, /images/form/sm-form-img@2x.webp 2x'
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet='/images/form/sm-form-img.png 1x, /images/form/sm-form-img@2x.png 2x'
            />
            <img
              src='/images/form/sm-form-img.png'
              alt='A yacht on the waters of a night lake under a starry sky and mountains in the background'
              className={clsx(s.rentImage)}
              loading='lazy'
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default RentSection;
