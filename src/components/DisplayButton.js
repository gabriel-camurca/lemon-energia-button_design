import React from 'react'

import "../styles/DisplayButton.css"

function DisplayButton(props) {
  return (
    <div className="button-container">
        <button 
            className="button"
            disabled={props.disabled}
        >
            {props.buttonText}
        </button>
        <p className="button-description">{props.description}</p>
    </div>
  )
}

export default DisplayButton