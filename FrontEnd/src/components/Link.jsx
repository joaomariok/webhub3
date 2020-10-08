import React from "react"

function Link(props) {
    return (
        <li className="list-group-item">
            <img 
                src={props.icon}
                className="item-ico"
            />
            <a
                className="item-txt"
                href={props.link}
                target="_blank"
            >
                {props.name}
            </a>
        </li>
    )
}   

export default Link;