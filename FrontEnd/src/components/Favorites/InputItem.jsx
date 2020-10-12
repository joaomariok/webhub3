import React from "react"

function InputItem(props) {
    return (
        <div className="form-group row">
            <label 
                className="col-sm-2 col-form-label" 
                htmlFor={props.id}
            >
                {props.label}
            </label>
            <div className="col-sm-10">
                <input 
                    id={props.id}
                    type="text"
                    name={props.name}
                    autoComplete="off"
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}   

export default InputItem;