import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onDismiss}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {props.actions}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;