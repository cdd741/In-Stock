import React, { Component } from "react";
import "./WarehouseForm.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default class WarehouseForm extends Component {
  state = {
    warehouseName: this.props.data ? this.props.data.warehouseName : "",
    streetAddress: this.props.data ? this.props.data.streetAddress : "",
    city: this.props.data ? this.props.data.city : "",
    country: this.props.data ? this.props.data.country : "",
    contactName: this.props.data ? this.props.data.contactName : "",
    position: this.props.data ? this.props.data.position : "",
    phoneNumber: this.props.data ? this.props.data.phoneNumber : "",
    email: this.props.data ? this.props.data.email : "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = (e) => {
    this.props.onSubmit(e, this.state);
  };

  handleOnCancel = (e) => {
    this.props.onCancel(e);
  };

  render() {
    return (
      <form className="warehouse-form">
        <div className="warehouse-form__input-wrapper">
          <div className="warehouse-form__details warehouse-form__details--warehouse">
            <h2 className="warehouse-form__title">Warehouse Details</h2>
            <Input
              onChange={this.handleOnChange}
              label="Warehouse Name"
              name="warehouseName"
              id="warehouseName"
              placeholder="Warehouse Name"
              value={this.state.warehouseName}
              className="input input--warehouseName"
            />
            <Input
              onChange={this.handleOnChange}
              label="Street Address"
              name="streetAddress"
              id="streetAddress"
              placeholder="Street Address"
              value={this.state.streetAddress}
              className="input input--streetAddress"
            />
            <Input
              onChange={this.handleOnChange}
              label="City"
              name="city"
              id="city"
              placeholder="City"
              value={this.state.city}
              className="input input--city"
            />
            <Input
              onChange={this.handleOnChange}
              label="Country"
              name="country"
              id="country"
              placeholder="Country"
              value={this.state.country}
              className="input input--country"
            />
          </div>
          <div className="warehouse-form__details warehouse-form__details--contact">
            <h2 className="warehouse-form__title">Contact Details</h2>
            <Input
              onChange={this.handleOnChange}
              label="ContactName"
              name="contactName"
              id="contactName"
              placeholder="ContactName"
              value={this.state.contactName}
              className="input input--contactName"
            />
            <Input
              onChange={this.handleOnChange}
              label="Position"
              name="position"
              id="position"
              placeholder="Position"
              value={this.state.position}
              className="input input--position"
            />
            <Input
              onChange={this.handleOnChange}
              label="PhoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="PhoneNumber"
              value={this.state.phoneNumber}
              className="input input--phoneNumber"
            />
            <Input
              onChange={this.handleOnChange}
              label="Email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              className="input input--email"
            />
          </div>
        </div>
        <div className="warehouse-form__buttons">
          <Button
            className="warehouse-form__button warehouse-form__button--cancel"
            onClick={this.handleOnCancel}
            type="cancel"
          >
            Cancel
          </Button>
          <Button
            className="warehouse-form__button warehouse-form__button--submit"
            onSubmit={this.handleOnSubmit}
          >
            {this.props.type === "edit" ? "Save" : "+ Add Warehouse"}
          </Button>
        </div>
      </form>
    );
  }
}
