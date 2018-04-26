import gql from 'graphql-tag';

export default gql`
  query allTags {
    allTags {
      id
      name
      color
    }
  }
`;
