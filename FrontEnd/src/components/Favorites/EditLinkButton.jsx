import React from "react"
import Popup from "reactjs-popup"
import EditLinkForm from "./EditLinkForm";


function EditLinkButton(props) {
    return (
        <Popup
            trigger={
                <button 
                    type="button" 
                    className="edit-mode-btn edit-link-btn btn btn-sm" >
                    E
                </button>
            }
            modal
        >
            <EditLinkForm 
                id={props.id}
                reloadHandler={props.reloadHandler}
                icon={props.icon} 
                link={props.link} 
                name={props.name} 
                list={props.list}
            />
        </Popup>
    )
}   

export default EditLinkButton;