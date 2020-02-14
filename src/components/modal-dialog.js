import React from "react"

const ModalDialog = props => {
  const { name, description, image, techDetails } = props.modal
  console.log(props)
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
          {techDetails && 
          <div className="modal-grid-item-right">
            <span className="modal-subtitle">Tecnologias y principales librerias</span>
            <ul className="modal-text">
              {techDetails.map((tech, idx) => (
                <li className="modal-text-list" key={idx}>{tech}</li>
              ))} 
            </ul>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ModalDialog
