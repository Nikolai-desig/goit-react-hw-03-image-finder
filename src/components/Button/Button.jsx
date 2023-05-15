import PropTypes from 'prop-types';
import React from 'react';
import css from './Button.module.css';

export function Button({ showLoadMoreButton, pictures, handleLoadMore }) {
  if (pictures.length !== 0) {
    showLoadMoreButton = true;
  }

  return (
    <>
      {showLoadMoreButton ? (
        <button type="button" className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      ) : null}
    </>
  );
}

Button.propTypes = {
  showLoadMoreButton: PropTypes.bool.isRequired,
  pictures: PropTypes.array.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
