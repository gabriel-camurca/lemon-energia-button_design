import React from 'react'
import Button from './Button'

import "../styles/DisplayButton.css"

function DisplayButton(props) {
  return (
    <div className="button-container">
        <Button
          color={props.color}
          disabled={props.disabled}
          icon={props?.icon}
          value="ok"
          onClick={props?.onClick}
          isLoading={props?.isLoading}
        >
          {props.buttonText}
        </Button>
        <p className="button-description">{props.description}</p>
    </div>
  )
}

export default DisplayButton