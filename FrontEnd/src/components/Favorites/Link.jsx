import React from "react"
import RemoveLinkButton from "./RemoveLinkButton"
import EditLinkButton from "./EditLinkButton"

function Link(props) {
    const getFavicon = (fUrl) => {
        const getDomain = (url) => { return url.match(/:\/\/(.[^/]+)/)[1] };

        return `https://api.faviconkit.com/${getDomain(fUrl)}/192`
    };

    return (
        <li className="list-group-item">
            {
                props.icon !== "" ?
                <img 
                    src={props.icon}
                    alt="link icon"
                    className="item-ico"
                /> :
                <img 
                    src={getFavicon(props.link)}
                    alt="link icon"
                    className="item-ico"
                />
            }
            <a
                className="item-txt"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.name}
            </a>
            {
                props.isLoggedIn &&
                <RemoveLinkButton 
                    id={props.id}
                    reloadHandler={props.reloadHandler}
                />
            }
            {
                props.isLoggedIn &&
                <EditLinkButton 
                    id={props.id}
                    reloadHandler={props.reloadHandler}
                    icon={props.icon} 
                    link={props.link} 
                    name={props.name} 
                    list={props.list}
                />
            }
        </li>
    )
}   

export default Link;