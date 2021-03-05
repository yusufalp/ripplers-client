import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import history from '../../history';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={() => history.push('/')}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Delete Stream</h2>
        <p>Are you sure you want to delete the stream?</p>
        <button>Delete</button>
        <button>Cancel</button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;