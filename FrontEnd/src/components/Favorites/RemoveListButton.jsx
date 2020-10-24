import React from "react"
import axios from "axios";


function RemoveListButton(props) {
    const removeList = async () => {
        if (!window.confirm(`Deseja deletar lista "${props.listName}"?`)) return;

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
            onClick={removeList}
        >
            X
        </button>
    )
}   

export default RemoveListButton;