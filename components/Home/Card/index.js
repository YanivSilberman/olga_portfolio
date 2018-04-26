import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { CardContainer, Img, CardInner } from './styles';

const Card = ({ id, title, image, onClick, modalId }) => (
  <Overdrive id={id}>
    <CardContainer>
      {modalId !== id && (
        <CardInner>
          <Img alt={title} src={image} onClick={() => onClick(id)} />
        </CardInner>
      )}
    </CardContainer>
  </Overdrive>
);

Card.propTypes = {
  modalId: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

Card.defaultProps = {
  modalId: null
};

export default Card;
