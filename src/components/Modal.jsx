import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevents closing on inner click
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
