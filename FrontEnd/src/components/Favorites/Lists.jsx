import React from "react"
import List from "./List"
import NewLinkButton from "./NewLinkButton"

function Lists(props) {
    const data = props.data;
    const lists = [...(new Set(data.map( d => d.list )))];
    
    return (
        <div className="col-md-4 col-4">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {
                    lists.map((list, index) => {
                        const isFirst = (index === 0) ? true : false;
                        return (
                            <List 
                                key={index} 
                                list={list} 
                                isFirst={isFirst} 
                                isLoggedIn={props.isLoggedIn}
                                reloadHandler={props.reloadHandler}
                            />
                        );
                    })
                }
                {props.isLoggedIn && <NewLinkButton reloadHandler={props.reloadHandler} />}
            </div>
        </div>
    )
}   

export default Lists;