import React, { Component } from "react"
import Links from "./Links"
import Lists from "./Lists"

//import defaultData from "../default.json";
 
class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultData: []
        };
    }
    
    componentDidMount() {
        fetch("http://localhost:3333")
        .then(res => res.json())
        .then((data) => {
            this.setState({ defaultData: data })
        })
        .catch(console.log)
    }

    render() {
        //console.log(this.state.defaultData.length);
        return (
            <div id="lists" className="content">
                <div className="container-sm">
                    <div className="row">
                        <Lists defaultData={this.state.defaultData} />
                        <Links defaultData={this.state.defaultData} />
                    </div>
                </div>  
            </div>
        );
    }
}   

export default Favorites;