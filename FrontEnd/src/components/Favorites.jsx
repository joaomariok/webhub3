import React from "react"
import Links from "./Links"
import Lists from "./Lists"

import defaultData from "../default.json";
 
function Favorites() {
    return (
        <div id="lists">
            <div className="container-sm">
                <div className="row">
                    <Lists defaultData={defaultData} />
                    <Links defaultData={defaultData} />
                </div>
            </div>
        </div>
    )
}   

export default Favorites;