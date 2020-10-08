import React from "react"
import Link from "./Link"

function LinkGroup(props) {
    var data = props.linkGroup;
    var isFirst = (props.isFirst) ? " active" : "";
    var linkGroupReturn = data.map((link, index) => {
        return (
            <Link key={index} icon={link.icon} link={link.link} name={link.name} />
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