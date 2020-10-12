import React from "react"
import axios from "axios"
import InputItem from "./InputItem"

class EditLinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            name: this.props.name,
            link: this.props.link,
            icon: this.props.icon,
            originalLink: {
                id: this.props.id,
                list: this.props.list,
                name: this.props.name,
                link: this.props.link,
                icon: this.props.icon
            }
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

        const id = this.state.originalLink.id;

        const editedLink = {
            list: (this.state.list === "" ? this.state.originalLink.list : this.state.list),
            name: (this.state.name === "" ? this.state.originalLink.name : this.state.name),
            link: (this.state.link === "" ? this.state.originalLink.link : this.state.link),
            icon: this.state.icon
        };

        await axios.put(`/api/link/${id}`, editedLink)
            .then(res => {
                console.log(res);
                console.log(res.data);
        })

        alert(`List: ${editedLink.list}\nName: ${editedLink.name}\nLink: ${editedLink.link}\nIcon: ${editedLink.icon}`);

        this.props.reloadHandler();
    }

    render() {
        return (
            <div className="form-div">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Editar link</legend>
                        <InputItem
                            id="listId"
                            label="Lista"
                            name="list"
                            handleChange={this.handleChange}
                            placeholder={this.state.list}
                        />
                        <InputItem
                            id="nameId"
                            label="Nome"
                            name="name"
                            handleChange={this.handleChange}
                            placeholder={this.state.name}
                        />
                        <InputItem
                            id="linkId"
                            label="Link"
                            name="link"
                            handleChange={this.handleChange}
                            placeholder={this.state.link}
                        />
                        <InputItem
                            id="iconId"
                            label="Ícone"
                            name="icon"
                            handleChange={this.handleChange}
                            placeholder={this.state.icon}
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

export default EditLinkForm;