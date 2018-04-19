import { graphql } from 'react-apollo';
import allProjectsGql from './allProjectsGql';

const POSTS_PER_PAGE = 10;

const withData = graphql(allProjectsGql, {
  options: () => ({
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  }),
  props: ({ data }) => ({
    data,
    loadMoreProjects: () =>
      data.fetchMore({
        variables: {
          skip: data.allProjects.length
        },
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
      })
  })
});

export default comp => withData(comp);
