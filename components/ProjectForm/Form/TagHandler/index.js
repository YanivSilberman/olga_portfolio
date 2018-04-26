import React from 'react';
import PropTypes from 'prop-types';
import {
  TagHandlerContainer,
  InputContainer,
  TagInput,
  AutoComplete,
  AutoOption,
  CreateBtn
} from './styles';
import connect from './store';
import { getTagGql, createTagGql, deleteTagGql, updateTagGql } from './gqlTags';
import {
  getToolGql,
  createToolGql,
  deleteToolGql,
  updateToolGql
} from './gqlTools';

class TagHandler extends React.Component {
  state = {
    name: null,
    color: null,
    editMode: null
  };

  handleChange = name => this.setState({ name });
  colorChange = color => this.setState({ color });

  toggle = id => {
    let newTags;
    if (this.props.tags.indexOf(id) > -1) {
      newTags = this.props.tags.filter(i => i !== id);
    } else {
      newTags = this.props.tags.concat(id);
    }
    this.props.update(newTags);
  };

  delete = id => this.props.deleteTag({ tagId: id });

  edit = ({ id, name, color }) => {
    this.setState({ name, color, editMode: id });
  };

  create = () => {
    const { name, color, editMode } = this.state;

    if (name === null || name === '') {
      alert('tag name left blank');
      return false;
    }

    const arg = { name };
    let post;

    if (this.props.hasColor) {
      if (color === null || color === '') {
        alert('tag color left blank');
        return false;
      }
      arg.color = color;
    }

    if (editMode !== null) {
      arg.id = editMode;
      post = this.props.updateTag;
    } else {
      post = this.props.mutations.createTag;
    }

    post(arg).then(() => this.reset());
  };

  reset = () => this.setState({ name: '', color: '', editMode: null });

  render() {
    const { tags, all, hasColor } = this.props;
    const { name, color, editMode } = this.state;

    return (
      <TagHandlerContainer>
        <InputContainer>
          <TagInput
            type="text"
            onChange={e => this.handleChange(e.target.value)}
            value={name}
            placeholder="Name"
          />
          {hasColor && (
            <TagInput
              type="text"
              onChange={e => this.colorChange(e.target.value)}
              value={color}
              placeholder="#22194D or red"
            />
          )}
          <CreateBtn onClick={() => this.create()}>
            <i className="material-icons">{editMode ? 'edit' : 'add'}</i>
          </CreateBtn>
          <CreateBtn onClick={() => this.reset()}>
            <i className="material-icons">close</i>
          </CreateBtn>
        </InputContainer>

        {all && (
          <AutoComplete>
            {all.map(t => (
              <AutoOption
                key={t.id}
                color={t.color ? t.color : 'transparent'}
                selected={tags.indexOf(t.id) > -1}
              >
                <button onClick={() => this.toggle(t.id)}>{t.name}</button>
                <button onClick={() => this.delete(t.id)}>
                  <i className="material-icons">delete</i>
                </button>
                <button onClick={() => this.edit(t)}>
                  <i className="material-icons">edit</i>
                </button>
              </AutoOption>
            ))}
          </AutoComplete>
        )}
      </TagHandlerContainer>
    );
  }
}

TagHandler.propTypes = {
  update: PropTypes.func.isRequired,
  mutations: PropTypes.shape({
    createTag: PropTypes.func.isRequired
  }).isRequired,
  deleteTag: PropTypes.func.isRequired,
  updateTag: PropTypes.func.isRequired,
  hasColor: PropTypes.bool,
  tagType: PropTypes.string.isRequired,
  tags: PropTypes.array,
  all: PropTypes.array
};

TagHandler.defaultProps = {
  tags: [],
  all: null,
  hasColor: false
};

export const ColorTagHandler = connect(
  getTagGql,
  createTagGql,
  deleteTagGql,
  updateTagGql
)(TagHandler);
export const ToolHandler = connect(
  getToolGql,
  createToolGql,
  deleteToolGql,
  updateToolGql
)(TagHandler);
