import React from "react"
import Link from "./Link"

function LinkGroup(props) {
    const data = props.linkGroup;
    const isFirst = (props.isFirst) ? " active" : "";
    const linkGroupReturn = data.map((link, index) => {
        return (
            <Link 
                key={link.id}
                id={link.id}
                icon={link.icon} 
                link={link.link} 
                name={link.name} 
                list={link.list}
                isLoggedIn={props.isLoggedIn}
                reloadHandler={props.reloadHandler}
            />
        )
    });
    return (
        <div 
            className={"tab-pane fade show" + isFirst} 
            id={"v-pills-" + props.listName} 
            role="tabpanel" 
            aria-labelledby={"v-pills-" + props.listName + "-tab"}
        >
            <ul className="list-group list-group-flush">
                {linkGroupReturn}
            </ul>
        </div>
    )
}   

export default LinkGroup;