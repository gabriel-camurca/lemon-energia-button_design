import React from 'react'
import PropTypes from 'prop-types'
import arrowRight from "../arrow-right.svg"
import check from "../check.svg"
import refresh from "../refresh.svg"
import "../styles/Button.css"

function Button(props) {

    let color = props?.color ? props.color : "primary"
    let iconDisplay = props?.icon ? "display-icon" : ""
    
    let loading = (props?.isLoading === true) ? "display-loading" : ""
    let disabled = (props?.isLoading === true) ? false : (props?.disabled ?? false)

    let textColor = (color === "primary") ? "dots-primary" : "dots-secondary"

    function setIcon(){
        let icon = props?.icon;
        switch (icon) {
            case "arrow-right":
                return (<img src={arrowRight} alt="arrow right"></img>)
            case "check":
                return (<img src={check} alt="check"></img>)
                case "refresh":
                    return (<img width="15rem" className="refresh-icon" src={refresh} alt="refresh"></img>)
            default:
                return undefined
        }
    }

    function dotsRender(){
        return(
            <div aria-label='loading' className={`dots-container ${textColor}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    function buttonContent(){
        return(
            <>
                <div aria-label='children'>{(props?.children ?? "")}</div>
                {setIcon() ?? ""}
            </>
        )
    }

    return (
        <button
            className={`${color} ${iconDisplay} ${loading}`}
            disabled={disabled} // a little verbose, but explicit as for the requirements
            onClick={props?.onClick}
            value={props?.value}
        >
            {
                !loading ? buttonContent() : dotsRender()
            }
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string, // primary or secondary
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node, // button text
    disabled: PropTypes.bool,
    loading: PropTypes.bool,

    value: PropTypes.any
}

export default Button