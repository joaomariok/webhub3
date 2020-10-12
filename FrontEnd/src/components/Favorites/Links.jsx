import React from "react"
import LinkGroup from "./LinkGroup"

function Links(props) {
    const data = props.data;
    const lists = [...(new Set(data.map( d => d.list )))];
    
    const linksReturn = lists.map((linkGroup, index) => {
        const dataGroups = data.filter((d) => {
            return d.list === linkGroup;
        });
        const isFirst = (index === 0) ? true : false;
        return (
            <LinkGroup 
                key={index} 
                linkGroup={dataGroups} 
                listName={linkGroup} 
                isFirst={isFirst} 
                isLoggedIn={props.isLoggedIn} 
                reloadHandler={props.reloadHandler}
            />
        );
    })

    return (
        <div className="col-md-8 col-8">
          <div className="tab-content" id="v-pills-tabContent">
            {linksReturn}
          </div>
        </div>
    )
}   

export default Links;