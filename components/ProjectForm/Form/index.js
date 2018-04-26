import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectForm as StyledProjectForm,
  SubmitBtn,
  FormTitle,
  InputWrap,
  Label,
  FormControl,
  BtnNav,
  IconBtn
} from './styles';
import { Input, Textarea } from '../../Theme';
import ImageHandler from './ImageHandler';
import TypeHandler from './TypeHandler';
import GalleryHandler from './GalleryHandler';
import { ColorTagHandler, ToolHandler } from './TagHandler';
import connect from './store';
import { Router } from '../../../routes';
import { TAG, TOOL } from './TagHandler/store';

class ProjectForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let i;

    // VALIDATE REQUIRED
    const { title, image } = this.props.project;
    const arr = [title, image];
    /* eslint-disable */
    for (i of arr) {
      if (i === null || i === '') {
        // eslint-disable-next-line no-alert
        window.alert('Title and image are required');
        return false;
      }
    }

    // CLONE NON-NULL STATE
    const form = {};
    const { project, projectId } = this.props;
    let key;
    for (i of Object.keys(project)) {
      key = project[i];
      if (key !== null && key !== []) form[i] = key;
    }

    form.id = projectId;

    const { mutations: { createProject }, updateProject } = this.props;
    const post = projectId === null ? createProject : updateProject;

    post(form)
      .then(res => {
      console.log('gql res', res);
      Router.pushRoute('/');
    }).catch(err => {
      console.log('gql err', err);
      alert('submission error');
    });

    /* eslint-enable */
  };

  delete = () => {
    const { deleteProject, projectId } = this.props;
    deleteProject(projectId)
      .then(res => {
        console.log('gql res', res);
        Router.pushRoute('/');
      })
      .catch(err => {
        console.log('gql err', err);
        alert('delete error');
      });
  };

  render() {
    const { actions, projectId, project } = this.props;

    const {
      title,
      image,
      description,
      projectTypes,
      tags,
      tools,
      galleries
    } = project;

    const isNew = projectId === null;

    return (
      <StyledProjectForm>
        <BtnNav>
          <IconBtn onClick={() => Router.pushRoute('/')}>
            <i className="material-icons">home</i>
          </IconBtn>
          {!isNew && (
            <IconBtn onClick={() => this.delete()}>
              <i className="material-icons">delete</i>
            </IconBtn>
          )}
        </BtnNav>
        <FormTitle>{isNew ? 'Create' : 'Edit'} Project</FormTitle>
        <FormControl>
          <Label>Project Title</Label>
          <InputWrap>
            <Input
              type="text"
              value={title}
              placeholder="Title"
              onChange={e => actions.updateField({ title: e.target.value })}
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Project Description</Label>
          <InputWrap>
            <Textarea
              value={description}
              placeholder="Description"
              onChange={e =>
                actions.updateField({ description: e.target.value })
              }
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Project Cover Image</Label>
          <InputWrap>
            <ImageHandler
              onChange={img => actions.updateField({ image: img })}
              image={image}
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Select Project Types</Label>
          <InputWrap>
            <TypeHandler
              update={t => actions.updateField((projectTypes: t))}
              projectTypes={projectTypes}
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Create And / Or Select Tags</Label>
          <InputWrap>
            <ColorTagHandler
              update={t => actions.updateField({ tags: t })}
              tags={tags}
              tagType={TAG}
              hasColor
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Create And / Or Select Tools</Label>
          <InputWrap>
            <ToolHandler
              update={t => actions.updateField({ tools: t })}
              tags={tools}
              tagType={TOOL}
            />
          </InputWrap>
        </FormControl>
        <FormControl>
          <Label>Image Gallery</Label>
          <InputWrap>
            <GalleryHandler
              update={t => actions.updateField({ galleries: t })}
              galleries={galleries}
            />
          </InputWrap>
        </FormControl>
        <SubmitBtn onClick={e => this.handleSubmit(e)}>Submit</SubmitBtn>
      </StyledProjectForm>
    );
  }
}

ProjectForm.propTypes = {
  projectId: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    projectTypes: PropTypes.array.isRequired,
    galleries: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    tools: PropTypes.array.isRequired
  }).isRequired,
  mutations: PropTypes.shape({
    createProject: PropTypes.func.isRequired
  }).isRequired,
  updateProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    updateField: PropTypes.func.isRequired,
    resetCreate: PropTypes.func.isRequired
  }).isRequired
};

ProjectForm.defaultProps = {
  projectId: null
};

export default connect(ProjectForm);
