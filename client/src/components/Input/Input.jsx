import React, { Component } from "react";
import "./Input.scss";
import errIcon from "../../assets/icons/error-24px.svg";

//
// Usage: <Input onChange={required} label='required' value='not required'/>
//
// onSubmit example:
// **** you should put this in your form not Input component ****
// handleOnSubmit = (e) => {
//   e.preventDefault();
//   if (this.state.email === "") {
//     alert("email field required!");
//   } else {
//     // do the api call
//   }
// };
//
// onChange example:
// handleOnChange = (e) => {
//   this.setState({ [e.target.name]: e.target.value });
// };
//
// **** keep in mind ****
// set your STATE NAME as your LABEL NAME so you can setState like the example
//
// state = {
//   email: "",
// };
//
// **** styling ****
// all you need for styling will just be responsive width
// for the whole container use yourClassName
// for the textarea use yourClassName__textarea

export default class Input extends Component {
  state = {
    invalidInput: false,
    value: this.props.value,
  };

  handleOnChange = (e) => {
    e.preventDefault();
    this.props.onChange(e);
    this.setState({ value: e.target.value });
  };

  hendleOnfocusout = (e) => {
    if (this.state.invalidInput !== !e.target.value) {
      this.setState({ invalidInput: !e.target.value });
      console.log(this);
    }
  };

  renderErrMessage = () => {
    return (
      <div className="input__err-container">
        <img
          className="input__err-icon"
          src={errIcon}
          alt="invalid input icon"
        />
        <h3 className="input__err-message">This field is required</h3>
      </div>
    );
  };

  render() {
    const textareaClass = this.state.invalidInput
      ? `input__textarea ${this.props.className}__textarea input__textarea--err-border`
      : `input__textarea ${this.props.className}__textarea`;
    return (
      <div className={`input ${this.props.className}`}>
        <label htmlFor={this.props.label} className="input__label">
          <h3 className="input__label-text">{this.props.label}</h3>
          <input
            name={this.props.label}
            id={this.props.label}
            placeholder={this.props.label}
            value={this.state.value}
            onChange={this.handleOnChange}
            onBlur={this.hendleOnfocusout}
            className={textareaClass}
          ></input>
          {this.state.invalidInput && this.renderErrMessage()}
        </label>
      </div>
    );
  }
}
