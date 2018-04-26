import PropTypes from 'prop-types';
import connect from './store';
import {
  DetailsContainer,
  Title,
  BannerImg,
  Description,
  Tool,
  Tag,
  ListWrapper,
  GalleryContainer
} from './styles';
import Gallery from './Gallery';

const Details = ({ Project }) => {
  if (Project === null) return null;
  const { title, image, description, galleries, tools, tags } = Project;
  return (
    <DetailsContainer>
      <BannerImg alt="" src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {galleries.length > 0 && (
        <GalleryContainer>
          {galleries.map(img => <Gallery {...img} />)}
        </GalleryContainer>
      )}
      {tools.length > 0 && (
        <div>
          <h3>Tools</h3>
          <ListWrapper>
            {tools.map(tool => <Tool>{tool.name}</Tool>)}
          </ListWrapper>
        </div>
      )}
      {tags.length > 0 && (
        <div>
          <h3>Tags</h3>
          <ListWrapper>
            {tags.map(tag => <Tag color={tag.color}>{tag.name}</Tag>)}
          </ListWrapper>
        </div>
      )}
    </DetailsContainer>
  );
};

Details.propTypes = {
  modalId: PropTypes.string.isRequired,
  Project: PropTypes.object
};

Details.defaultProps = {
  Project: null
};

export default connect(Details);
