import React from "react"

const ModalDialog = props => {
  const { name, description, image } = props.modal
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={props.close}>
          &times;
        </button>
        <div className="modal-grid-container">
          <div className="modal-grid-item-left">
            <span className="modal-title">{name}</span>
            <p className="modal-text">{description}</p>
          </div>
          <div className="modal-grid-item-right">
            <img src={image} alt={name} className="modal-image"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDialog
