import React from "react"
import List from "./List"

function Lists(props) {
    var defaultData = props.defaultData;
    var lists = [];
    for (let index in defaultData) {
        var list = defaultData[index].list;
        if (!lists.includes(list)) {
            lists.push(list);
        }
    }
    
    var listsReturn = lists.map((list, index) => {
        var isFirst = (index === 0) ? true : false;
        return (
            <List key={index} list={list} isFirst={isFirst}/>
        )
    })
    return (
        <div className="col-md-3 col-4">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {listsReturn}
            </div>
        </div>
    )
}   

export default Lists;