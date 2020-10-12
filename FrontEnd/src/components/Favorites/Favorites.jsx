import React, { Component } from "react"
import Links from "./Links"
import Lists from "./Lists"

//import defaultData from "../default.json";
 
class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    updateState = async () => {
        this.componentDidMount();
    }
    
    async componentDidMount() {
        this.callApi()
        .then((data) => {
            this.setState({ data: data })
        })
        .catch(console.log)
    }

    callApi = async () => {
        const response = await fetch('/api');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render() {
        //console.log(this.state.data.length);
        return (
            <div id="lists" className="content">
                <div className="container-sm">
                    <div className="row">
                        <Lists 
                            reloadHandler={this.updateState}
                            data={this.state.data} 
                            isLoggedIn={this.props.isLoggedIn} 
                        />
                        <Links 
                            reloadHandler={this.updateState}
                            data={this.state.data} 
                            isLoggedIn={this.props.isLoggedIn} 
                        />
                    </div>
                </div>  
            </div>
        );
    }
}   

export default Favorites;