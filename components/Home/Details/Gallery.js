import PropTypes from 'prop-types';
import { GalleryImgContainer, GalleryImg } from './styles';

const Gallery = ({ image }) => (
  <GalleryImgContainer>
    <GalleryImg alt="" src={image} />
  </GalleryImgContainer>
);

Gallery.propTypes = {
  image: PropTypes.string.isRequired
};

export default Gallery;
