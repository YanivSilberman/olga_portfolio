import React from 'react';
import PropTypes from 'prop-types';
import { GalleryContainer, GalleryRow, RemoveBtn, AddBtn } from './styles';
import ImageHandler from '../ImageHandler';

class GalleryHandler extends React.Component {
  update = (image, index) => {
    const gal = this.props.galleries;
    gal[index] = { image };
    this.props.update(gal);
  };

  add = () => {
    const newArr = this.props.galleries.concat({ image: '' });
    this.props.update(newArr);
  };

  remove = index => {
    const gal = this.props.galleries;
    const newArr = [...gal.slice(0, index), ...gal.slice(index + 1)];
    this.props.update(newArr);
  };

  render() {
    const { galleries } = this.props;
    return (
      <GalleryContainer>
        {galleries.length > 0 &&
          galleries.map((x, index) => (
            <GalleryRow>
              <ImageHandler
                onChange={img => this.update(img, index)}
                image={x.image}
              />
              <RemoveBtn onClick={() => this.remove(index)}>
                <i className="material-icons">close</i>
              </RemoveBtn>
            </GalleryRow>
          ))}
        <AddBtn onClick={() => this.add()}>
          <i className="material-icons">add</i>
        </AddBtn>
      </GalleryContainer>
    );
  }
}

GalleryHandler.propTypes = {
  galleries: PropTypes.array,
  update: PropTypes.func.isRequired
};

GalleryHandler.defaultProps = {
  galleries: []
};

export default GalleryHandler;
