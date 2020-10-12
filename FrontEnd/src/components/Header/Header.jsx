import React from "react"
import EditButton from "./EditButton"
import ResetDatabaseButton from "./ResetDatabaseButton"

function Header(props) {
    return (
        <header>
            <div className="container">
                <a className="titulo" href="/">WebHub</a>
                <small className="text-muted">by JoaoMarioK</small>
                <EditButton loginCallback={props.loginCallback}/>
                <ResetDatabaseButton isLoggedIn={props.isLoggedIn} />
            </div>
        </header>
    )
}   

export default Header;