import gql from 'graphql-tag';

export default gql`
  query allProjects($first: Int!, $skip: Int!) {
    allProjects(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      image
      createdAt
    }
    _allProjectsMeta {
      count
    }
  }
`;
