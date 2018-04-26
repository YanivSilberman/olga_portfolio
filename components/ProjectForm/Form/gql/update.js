import gql from 'graphql-tag';

const funcParam = `
  $title: String!,
  $description: String,
  $image: String!,
  $projectTypesIds: [ID!],
  $galleries: [ProjectgalleriesGallery!],
  $tags: [ID!],
  $tools: [ID!],
  $id: ID!
`;

const gqlParam = `
  title: $title
  description: $description
  image: $image
  projectTypesIds: $projectTypesIds
  galleries: $galleries
  tagsIds: $tags
  toolsIds: $tools
  id: $id
`;

export default gql`
  mutation updateProject(${funcParam}) {
    updateProject(${gqlParam}) {
      id
    }
  }
`;
