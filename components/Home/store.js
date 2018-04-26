import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import allProjectsGql from './allProjectsGql';

const POSTS_PER_PAGE = 9;

const mapStateToProps = state => ({
  activeProjectType: state.nav.activeProjectType
});

const gqlOptions = () => ({
  variables: {
    skip: 0,
    first: POSTS_PER_PAGE
  }
});

const loadMore = (data, activeId) => {
  const skip = data.allProjects.length;
  let vars = { skip };
  vars = activeId !== 'ALL' ? { skip, activeId } : { skip };
  return data.fetchMore({
    variables: vars,
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allProjects: [
          ...previousResult.allProjects,
          ...fetchMoreResult.allProjects
        ]
      });
    }
  });
};

const loadActive = (data, activeId) => {
  let vars = { skip: 0 };
  vars = activeId !== 'ALL' ? { skip: 0, activeId } : { skip: 0 };
  return data.fetchMore({
    variables: vars,
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        allProjects: [...fetchMoreResult.allProjects]
      });
    }
  });
};

const mapDataToProps = ({ data, data: { loading, allProjects } }) => {
  if (loading || !allProjects) return null;
  return {
    data,
    loadMoreProjects: activeId => loadMore(data, activeId),
    loadActiveType: activeId => loadActive(data, activeId)
  };
};

export default comp =>
  connect(mapStateToProps)(
    graphql(allProjectsGql, { options: gqlOptions, props: mapDataToProps })(
      comp
    )
  );
