import React from 'react'
import PropTypes from 'prop-types'
import arrowRight from "../assets/arrow-right.svg"
import check from "../assets/check.svg"
import refresh from "../assets/refresh.svg"
import "../styles/Button.css"

function Button(props) {

    // color set as "primary" by default
    let color = props?.color ? props.color : "primary"

    // button without icon by default
    let iconDisplay = props?.icon ? "display-icon" : ""
    
    let loading = props?.isLoading

    // disabled set as false by default; if loading, disabled has no effects by requirements
    let disabled = (loading === true) ? false : (props?.disabled ?? false)

    // Decides which icon is to be loaded, if any
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

    // Render content for the loading animation
    function dotsRender(){
        return(
            <div data-testid='loading' className={`dots-container ${color}-dots`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    // Render actual button content
    function buttonContent(){
        return(
            <>
                <div data-testid='children'>{(props?.children ?? "")}</div>
                {setIcon() ?? ""}
            </>
        )
    }

    return (
        <button
            className={`${color} ${iconDisplay}`}
            disabled={disabled}
            onClick={props?.onClick}
            value={props?.value}
        >
            {
                // Either renders animation content or button content
                !loading ? buttonContent() : dotsRender()
            }
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string, // primary or secondary
    icon: PropTypes.string, // arrow-right, check, refresh
    onClick: PropTypes.func, // general function
    children: PropTypes.node, // button text
    disabled: PropTypes.bool, // default false
    loading: PropTypes.bool, // default false

    value: PropTypes.any // user may want to attribute value to button
}

export default Button
