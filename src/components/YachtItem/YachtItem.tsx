import clsx from 'clsx';
import s from './YachtItem.module.css';
import type { YachtsData } from '../../zustand/yachts';

const YachtItem = ({
  name,
  category,
  length,
  shipyard,
  built,
  guests,
  price,
  images,
}: YachtsData) => {
  const { normal, retina } = images;
  return (
    <>
      <picture>
        <source
          media='(min-width:320px)'
          type='image/webp'
          srcSet={`${normal.webp} 1x, ${retina.webp} 2x`}
        />
        <source
          media='(min-width:320px)'
          type='image/png'
          srcSet={`${normal.png} 1x, ${retina.png} 2x`}
        />
        <img
          src={normal.png}
          alt='Yacht on the water'
          className={clsx(s.yachtsImage)}
          loading='lazy'
        />
      </picture>

      <div className={clsx(s.yachtsItemTitleContainer)}>
        <h3 className={clsx(s.yachtsItemTitle)}>{name}</h3>
        <p className={clsx(s.yachtsItemLabel)}>{category}</p>
      </div>

      <ul className={clsx(s.yachtsItemDescriptionList)}>
        <li className={clsx(s.yachtsItemDescriptionItemSubTitle)}>
          <p>LENGTH</p>
          <p>BUILDER</p>
          <p>BUILT</p>
          <p>GUESTS</p>
          <p>PRICE</p>
        </li>
        <li className={clsx(s.yachtsItemDescriptionItemValues)}>
          <p>{length}</p>
          <p>{shipyard}</p>
          <p>{built}</p>
          <p>{guests}</p>
          <p>{price}</p>
        </li>
      </ul>
    </>
  );
};

export default YachtItem;
