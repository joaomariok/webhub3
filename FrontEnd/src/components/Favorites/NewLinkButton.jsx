import React from "react"
import Popup from "reactjs-popup"
import LinkForm from "./LinkForm"

function NewLinkButton(props) {
    return (
        <Popup
        trigger={
            <button 
                type="button" 
                className="edit-mode-btn add-link-btn btn btn-sm" >
                Add link
            </button>
        }
        modal
        >
            <LinkForm reloadHandler={props.reloadHandler} />
        </Popup>
    )
}   

export default NewLinkButton;