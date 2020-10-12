import React from "react"
import RemoveListButton from "./RemoveListButton"

function List(props) {
    return (
        
            <a 
                className={"nav-link" + (props.isFirst ? " active" : "")} 
                id={"v-pills-" + props.list + "-tab"} 
                data-toggle="pill" 
                href={"#v-pills-" + props.list} 
                role="tab" 
                aria-controls={"v-pills-" + props.list} 
                aria-selected="true"
            >
                {props.list}
                {
                    props.isLoggedIn &&
                    <RemoveListButton 
                        listName={props.list}
                        reloadHandler={props.reloadHandler} 
                    />
                }
            </a>
        
    )
}   

export default List;