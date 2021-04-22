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
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleOnCancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <form className="warehouse-form">
        <div className="warehouse-form__details warehouse-form__details--warehouse">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <Input
            onChange={this.handleOnChange}
            label="Warehouse Name"
            name="warehouseName"
            id="warehouseName"
            placeholder="Warehouse Name"
            value={this.state.warehouseName}
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="Street Address"
            name="streetAddress"
            id="streetAddress"
            placeholder="Street Address"
            value={this.state.streetAddress}
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="City"
            name="city"
            id="city"
            placeholder="City"
            value={this.state.city}
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="Country"
            name="country"
            id="country"
            placeholder="Country"
            value={this.state.country}
            className="input"
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
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="Position"
            name="position"
            id="position"
            placeholder="Position"
            value={this.state.position}
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="PhoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="PhoneNumber"
            value={this.state.phoneNumber}
            className="input"
          />
          <Input
            onChange={this.handleOnChange}
            label="Email"
            name="email"
            id="email"
            placeholder="Email"
            value={this.state.email}
            className="input"
          />
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
            + Add Warehouse
          </Button>
        </div>
      </form>
    );
  }
}
