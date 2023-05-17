import PropTypes from 'prop-types';
import React from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    pictureName: '',
  };

  handleInput = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('Please enter a search keyword');
      return;
    }

    this.props.onSubmitForm(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="pictureName"
            value={this.state.pictureName}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
