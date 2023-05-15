import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ picture, onClick }) {
  const handleClick = () => {
    onClick(picture);
  };

  return (
    <div className={css.imageGalleryItem} onClick={handleClick}>
      <img
        src={picture.webformatURL}
        alt={picture.tags}
        className={css.imageGalleryItemImage}
      />
    </div>
  );
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

