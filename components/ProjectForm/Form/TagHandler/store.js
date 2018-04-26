import { graphql, compose } from 'react-apollo';
import update from 'react-addons-update';
import _ from 'underscore';

export const TOOL = 'TOOL';
export const TAG = 'TAG';

export const withData = gql =>
  graphql(gql, {
    name: 'getGql',
    props: ({ getGql, ownProps: { tagType } }) => {
      if (getGql.loading) return null;
      const all = tagType === TOOL ? getGql.allTools : getGql.allTags;
      return { all };
    }
  });

export const withCreate = gql =>
  graphql(gql, {
    name: 'createGql',
    props: ({ createGql, ownProps: { tagType } }) => ({
      mutations: {
        createTag: tag =>
          createGql({
            variables: tag,
            updateQueries: {
              allTags: (previousResult, { mutationResult }) => {
                if (tagType === TOOL) return null;
                const newProject = mutationResult.data.createTag;
                return Object.assign({}, previousResult, {
                  allTags: [newProject, ...previousResult.allTags]
                });
              },
              allTools: (previousResult, { mutationResult }) => {
                if (tagType === TAG) return null;
                const newProject = mutationResult.data.createTool;
                return Object.assign({}, previousResult, {
                  allTools: [newProject, ...previousResult.allTools]
                });
              }
            }
          })
      }
    })
  });

export const withUpdate = gql =>
  graphql(gql, {
    name: 'updateGql',
    props: ({ updateGql, ownProps: { tagType } }) => ({
      updateTag: tag =>
        updateGql({
          variables: tag,
          updateQueries: {
            allTags: (previousResult, { mutationResult }) => {
              if (tagType === TOOL) return null;
              const newTag = mutationResult.data.updateTag;
              return previousResult.allTags.map(el => {
                if (el.id === newTag.id) {
                  return Object.assign({}, el, newTag);
                }
                return el;
              });
            },
            allTools: (previousResult, { mutationResult }) => {
              if (tagType === TAG) return null;
              const newTool = mutationResult.data.updateTool;
              return previousResult.allTools.map(el => {
                if (el.id === newTool.id) {
                  return Object.assign({}, el, newTool);
                }
                return el;
              });
            }
          }
        })
    })
  });

export const withDelete = gql =>
  graphql(gql, {
    name: 'deleteGql',
    props: ({ deleteGql, ownProps: { tagType } }) => ({
      deleteTag: ({ tagId }) =>
        deleteGql({
          variables: { tagId },
          updateQueries: {
            allTags: previousResult => {
              if (tagType === TOOL) return null;
              const all = previousResult.allTags;
              const deleteIndex = _.findIndex(all, item => item.id === tagId);
              if (deleteIndex < 0) return previousResult;
              return update(previousResult, {
                allTags: {
                  $splice: [[deleteIndex, 1]]
                }
              });
            },
            allTools: previousResult => {
              if (tagType === TAG) return null;
              const all = previousResult.allTools;
              const deleteIndex = _.findIndex(all, item => item.id === tagId);
              if (deleteIndex < 0) return previousResult;
              return update(previousResult, {
                allTools: {
                  $splice: [[deleteIndex, 1]]
                }
              });
            }
          }
        })
    })
  });

export default (getGql, createGql, deleteGql, updateGql) => comp =>
  compose(
    withData(getGql),
    withCreate(createGql),
    withDelete(deleteGql),
    withUpdate(updateGql)
  )(comp);
