import React from "react"
import axios from "axios";


function RemoveListButton(props) {
    const removeLink = async () => {
        await axios.delete(`/api/lists/${props.listName}`)
        .then(res => {
            console.log(res.data)
        });

        props.reloadHandler();
    };

    return (
        <button 
            type="submit" 
            className="edit-mode-btn delete-btn btn-danger btn btn-sm ui icon button"
            onClick={removeLink}
        >
            X
        </button>
    )
}   

export default RemoveListButton;