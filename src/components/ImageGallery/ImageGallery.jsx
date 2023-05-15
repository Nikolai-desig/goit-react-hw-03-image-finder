import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ pictures, onClick }) {
  const handleItemClick = picture => {
    onClick(picture);
  };

  return (
    <ul className={css.imageGallery}>
      {pictures.map(picture => (
        <li key={picture.id}>
          <ImageGalleryItem picture={picture} onClick={handleItemClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

