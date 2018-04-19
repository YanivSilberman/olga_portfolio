import PropTypes from 'prop-types';
import { CardContainer, Img } from './styles';

const Card = ({ title, image }) => (
  <CardContainer>
    <Img alt={title} src={image} />
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card;
