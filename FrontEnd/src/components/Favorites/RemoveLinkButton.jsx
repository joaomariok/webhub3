import React from "react"
import axios from "axios";


function RemoveLinkButton(props) {
    const removeLink = async () => {
        await axios.delete(`/api/link/${props.id}`)
        .then(res => {
            console.log(res.data)
        });

        props.reloadHandler();
    };
    
    return (
        <button 
            type="submit" 
            className="edit-mode-btn delete-btn btn-outline-danger btn btn-sm"
            onClick={removeLink}
        >
            X
        </button>
    )
}   

export default RemoveLinkButton;