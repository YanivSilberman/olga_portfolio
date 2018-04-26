import gql from 'graphql-tag';

export default gql`
  query allProjectTypes {
    allProjectTypes {
      id
      name
    }
    _allProjectTypesMeta {
      count
    }
  }
`;
