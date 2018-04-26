/* eslint-disable */
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'underscore';
import update from 'react-addons-update';
import { dispatchers } from './../redux';
import { createProjectGql, updateProjectGql, deleteProjectGql } from './gql';

const mapStateToProps = state => ({
  project: {
    title: state.create.title,
    description: state.create.description,
    image: state.create.image,
    projectTypes: state.create.projectTypes,
    galleries: state.create.galleries,
    tags: state.create.tags,
    tools: state.create.tools
  },
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  actions: {
    updateField: payload => dispatch(dispatchers.updateField(payload)),
    resetCreate: () => dispatch(dispatchers.resetCreate())
  }
});

export const withCreate = graphql(createProjectGql, {
  name: 'createGql',
  props: ({ createGql }) => ({
    mutations: {
      createProject: form =>
        createGql({
          variables: form,
          updateQueries: {
            allProjects: (previousResult, { mutationResult }) => {
              const newProject = mutationResult.data.createProject;
              return Object.assign({}, previousResult, {
                allProjects: [newProject, ...previousResult.allProjects]
              });
            }
          }
        })
    }
  })
});

export const withUpdate =
  graphql(updateProjectGql, {
    name: 'updateGql',
    props: ({ updateGql }) => ({
      updateProject: project =>
        updateGql({
          variables: project,
          updateQueries: {
            allProjects: (previousResult, { mutationResult }) => {
              const newProject = mutationResult.data.updateProject;
              return previousResult.allProjects.map(el => {
                if (el.id === newProject.id) {
                  return Object.assign({}, el, newProject);
                }
                return el;
              });
            }
          }
        })
    })
  });

export const withDelete =
  graphql(deleteProjectGql, {
    name: 'deleteGql',
    props: ({ deleteGql }) => ({
      deleteProject: projectId =>
        deleteGql({
          variables: { projectId },
          updateQueries: {
            allProjects: previousResult => {
              const all = previousResult.allProjects;
              const deleteIndex = _.findIndex(all, item => item.id === projectId);
              if (deleteIndex < 0) return previousResult;
              return update(previousResult, {
                allProjects: {
                  $splice: [[deleteIndex, 1]]
                }
              });
            }
          }
        })
    })
  });


export default comp =>
  connect(mapStateToProps, mapDispatchToProps)(
    compose(withCreate, withUpdate, withDelete)(comp)
  );
