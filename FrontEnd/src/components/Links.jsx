import React from "react"
import LinkGroup from "./LinkGroup"

function Links(props) {
    var defaultData = props.defaultData;
    var lists = [];
    for (let index in defaultData) {
        var list = defaultData[index].list;
        if (!lists.includes(list)) {
            lists.push(list);
        }
    }
    
    var linksReturn = lists.map((linkGroup, index) => {
        var dataGroups = defaultData.filter((d) => {
            return d.list === linkGroup;
        })
        var isFirst = (index === 0) ? true : false;
        return (
            <LinkGroup key={index} linkGroup={dataGroups} listName={linkGroup} isFirst={isFirst} />
        )
    })

    return (
        <div className="col-md-9 col-8">
          <div className="tab-content" id="v-pills-tabContent">
            {linksReturn}
          </div>
        </div>
    )
}   

export default Links;