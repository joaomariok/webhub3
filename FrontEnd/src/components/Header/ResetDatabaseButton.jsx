import React from "react"
import axios from "axios";


function ResetDatabaseButton(props) {
    const resetDB = async () => {
        await axios.delete(`/api/reset`)
        .then(res => {
            console.log(res.data)
        });

        window.location.reload();
    };

    return (
            props.isLoggedIn &&
            <button 
                type="submit" 
                className="btn reset-btn"
                onClick={resetDB}
            >
                Reset
            </button>
    )
}   

export default ResetDatabaseButton;