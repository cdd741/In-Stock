import axios from "axios";
import React, { Component } from "react";

import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

export default class EditWarehouse extends Component {
  handleBackClick = (e) => {
    e.preventDefault();
    // setting url to the previous page
    this.props.history.goBack();
  };

  handleOnCancel = (e) => {
    e.preventDefault();
    alert("Adding warehouse canceled, going back to previous page.😊");
    // setting url to the previous page
    this.props.history.goBack();
  };

  handleOnSubmit = (e, data) => {
    e.preventDefault();
    if (
      !data.warehouseName ||
      !data.streetAddress ||
      !data.city ||
      !data.country ||
      !data.contactName ||
      !data.position ||
      !data.phoneNumber ||
      !data.email
    ) {
      alert("You need to fill out all the required field!");
      return;
    }
    return (
      // submit to the backend using api call
      axios
        .post("http://localhost:8080/warehouse/add", data)
        .then((res) => {
          alert(
            "Warehouse changed, going back to home page.😊\nNew Warehouse Detail:\nres"
          );
          // set url to home page
          this.props.history.push("/");
        })
        .catch((err) =>
          console.log("ERROR from POST request in EditWarehous", err)
        )
    );
  };

  render() {
    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title="Edit Warehouse"
          onClickBack={this.handleBackClick}
          edit={false}
        >
          <WarehouseForm
            type={"edit"}
            data={this.props.data}
            onSubmit={this.handleOnSubmit}
            onCancel={this.handleOnCancel}
          />
        </SecondLevelWrap>
      </div>
    );
  }
}
