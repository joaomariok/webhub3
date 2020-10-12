import React from "react"
import axios from "axios";
import InputItem from "./InputItem"


class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: '',
            name: '',
            link: '',
            icon: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        var nam = event.target.name;
        var val = event.target.value;
        this.setState({
            [nam]: val
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault();

        const newLink = {
            list: this.state.list,
            name: this.state.name,
            link: this.state.link,
            icon: this.state.icon
        };

        console.log(newLink);

        await axios.post(`/api/link`, newLink)
            .then(res => {
                console.log(res);
                console.log(res.data);
        })

        alert(`List: ${this.state.list}\nName: ${this.state.name}\nLink: ${this.state.link}\nIcon: ${this.state.icon}`);

        this.props.reloadHandler();
    }
    
    render () {
        return (
            <div className="form-div">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Adicionar novo link</legend>
                        <InputItem
                            id="listId"
                            label="Lista"
                            name="list"
                            handleChange={this.handleChange}
                        />
                        <InputItem
                            id="nameId"
                            label="Nome"
                            name="name"
                            handleChange={this.handleChange}
                        />
                        <InputItem
                            id="linkId"
                            label="Link"
                            name="link"
                            handleChange={this.handleChange}
                        />
                        <InputItem
                            id="iconId"
                            label="Ícone"
                            name="icon"
                            handleChange={this.handleChange}
                        />
                    </fieldset>
                    <button 
                        type="submit" 
                        className="btn send-form-button"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}   

export default LinkForm;