import React, { Component } from "react";
import "./Input.scss";
import errIcon from "../../assets/Icons/error-24px.svg";

export default class Input extends Component {
  state = {
    invalidInput: false,
    value: this.props.value,
  };

  handleOnChange = (e) => {
    e.preventDefault();
    this.props.onChange(e);
    console.log(this);
    this.setState({ value: e.target.value });
  };

  hendleOnfocusout = (e) => {
    console.log(this);
    if (this.state.invalidInput !== !e.target.value) {
      this.setState({ invalidInput: !e.target.value });
      console.log(this);
    }
  };

  renderErrMessage = () => {
    return (
      <div>
        <img src={errIcon} alt="invalid input icon" />
        <h3>This field is required</h3>
      </div>
    );
  };

  render() {
    return (
      <div className="input">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <textarea
          name={this.props.label}
          id={this.props.label}
          placeholder={this.props.label}
          value={this.state.value}
          onChange={this.handleOnChange}
          onBlur={this.hendleOnfocusout}
        ></textarea>
        {this.state.invalidInput && this.renderErrMessage()}
      </div>
    );
  }
}
