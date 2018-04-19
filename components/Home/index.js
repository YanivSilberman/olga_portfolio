/* eslint-disable */
import PropTypes from 'prop-types';
import Card from './Card';
import ProgressBar from '../ProgressBar';
import connect from './store';
import { HomeContainer, ShowMore } from './styles';

type Props = {
  data: {
    allProjects: Array,
    _allProjectsMeta: { count: number },
    loading: boolean
  },
  loadMoreProjects: () => void
};

const Home = ({ data, loadMoreProjects }: Props) => {
  if (data.allProjects && data.allProjects.length) {
    const areMorePosts = data.allProjects.length < data._allProjectsMeta.count;
    return (
      <HomeContainer>
        {data.allProjects &&
          data.allProjects.map(i => <Card key={i.id} {...i} />)}
        {areMorePosts ? (
          <ShowMore onClick={() => loadMoreProjects()}>
            {data.loading ? 'Loading...' : 'Show More'}
          </ShowMore>
        ) : (
          ''
        )}
      </HomeContainer>
    );
  }
  return <ProgressBar />;
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
  loadMoreProjects: PropTypes.func.isRequired
};

export default connect(Home);
