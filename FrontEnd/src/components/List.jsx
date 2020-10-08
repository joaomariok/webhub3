import React from "react"

function List(props) {
    var isFirst = (props.isFirst) ? " active" : "";
    return (
        <a className={"nav-link" + isFirst} id={"v-pills-" + props.list + "-tab"} data-toggle="pill" href={"#v-pills-" + props.list} role="tab" aria-controls={"v-pills-" + props.list} aria-selected="true">{props.list}</a>
    )
}   

export default List;