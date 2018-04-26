/* eslint-disable */
import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Card from './Card';
import ProgressBar from '../ProgressBar';
import connect from './store';
import { HomeContainer, ShowMore } from './styles';

const DetailsModal = dynamic(
  import('./Modal'), { loading: () => <div /> }
);

class Home extends React.Component {

  state = {
    modalId: null
  };

  componentWillReceiveProps(nextProps){
    const { activeProjectType, loadActiveType } = this.props;
    const newA = nextProps.activeProjectType;
    if (newA !== null && newA !== activeProjectType) {
      loadActiveType(newA);
    }
  };

  open = modalId => this.setState({ modalId });
  close = () => this.setState({ modalId: null });

  render() {
    const { modalId } = this.state;
    const { data, loadMoreProjects, loadActiveType, projects, activeProjectType } = this.props;
    const { allProjects, _allProjectsMeta } = data;

    if (allProjects && allProjects.length) {
      const areMorePosts = allProjects.length < _allProjectsMeta.count;
      return (
        <HomeContainer>
          {modalId && <DetailsModal modalId={modalId} closeModal={this.close} />}
          {allProjects.map(i =>
            <Card key={i.id} {...i} onClick={this.open} modalId={modalId} />
          )}
          {areMorePosts ? (
            <ShowMore onClick={() => loadMoreProjects(activeProjectType)}>
              {data.loading ? 'Loading...' : 'Show More'}
            </ShowMore>
          ) : (
            ''
          )}
        </HomeContainer>
      );
    }
    return <ProgressBar />;
  }
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
  loadMoreProjects: PropTypes.func.isRequired,
  loadActiveType: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  activeProjectType: PropTypes.string.isRequired
};

export default connect(Home);
