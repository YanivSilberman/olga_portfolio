/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { ModalContainer, Overlay, Close, Edit } from './styles';
import Details from '../Details';
import { Router } from '../../../routes';
import connect from './store';

class Modal extends React.Component {

  render(){
    const { modalId, closeModal, authenticated } = this.props;
    return (
      <Overdrive id={modalId}>
        <Overlay>
          <Close onClick={()=>closeModal()} className="material-icons">
            close
          </Close>
          {!authenticated && (
            <Edit
              onClick={()=>Router.pushRoute(`/edit/${modalId}`)}
              className="material-icons"
            >
              edit
            </Edit>
          )}
          <ModalContainer>
            <Details modalId={modalId} />
          </ModalContainer>
        </Overlay>
      </Overdrive>
    )
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default connect(Modal);
