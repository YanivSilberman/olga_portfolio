import gql from 'graphql-tag';

export default gql`
  query allProjects($first: Int!, $skip: Int!, $activeId: ID) {
    allProjects(
      orderBy: createdAt_DESC
      first: $first
      skip: $skip
      filter: { projectTypes_every: { id: $activeId } }
    ) {
      id
      title
      image
      createdAt
    }
    _allProjectsMeta(filter: { projectTypes_every: { id: $activeId } }) {
      count
    }
  }
`;
