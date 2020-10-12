import React from "react"

function Header(props) {
    return (
        <button 
            className="btn edit-btn" 
            onClick={props.loginCallback}
        >
            Edit
        </button>
    )
}   

export default Header;