import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getPictures } from 'services/api';

export default class App extends React.Component {
  state = {
    pictureName: '',
    pictures: [],
    showLoadMoreButton: false,
    page: 1,
    isLoading: false,
    selectedPicture: null,
    isModalOpen: false,
  };

  handleFormSubmit = async pictureName => {
    this.setState({ isLoading: true });
    const pictures = await getPictures(pictureName, 1);
    this.setState({
      pictures: pictures.hits,
      pictureName,
      page: 1,
      isLoading: false,
    });
  };

  handleLoadMore = async () => {
    this.setState({ isLoading: true });
    const { pictureName, pictures, page } = this.state;
    const nextPage = page + 1;
    const newPictures = await getPictures(pictureName, nextPage);
    this.setState({
      pictures: [...pictures, ...newPictures.hits],
      page: nextPage,
      showLoadMoreButton:
        newPictures.total > pictures.length + newPictures.hits.length,
      isLoading: false,
    });
  };

  handleOpenModal = picture => {
    this.setState({ selectedPicture: picture, isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedPicture: null, isModalOpen: false });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery
          pictures={this.state.pictures}
          onClick={this.handleOpenModal}
        />
        {this.state.isModalOpen && (
          <Modal
            onClick={this.handleCloseModal}
            selectedPicture={this.state.selectedPicture}
          />
        )}
        {this.state.isLoading && <Loader />}
        <Button
          showLoadMoreButton={this.state.showLoadMoreButton}
          pictures={this.state.pictures}
          handleLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}
