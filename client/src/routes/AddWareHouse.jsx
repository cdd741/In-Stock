import React, { Component } from "react";
import axios from "axios";

import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

export default class AddWarehouse extends Component {
  state = { showErr: false };

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

  handleOnSubmit = (e, info) => {
    e.preventDefault();
    if (
      !info.warehouseName ||
      !info.streetAddress ||
      !info.city ||
      !info.country ||
      !info.contactName ||
      !info.position ||
      !info.phoneNumber ||
      !info.email
    ) {
      alert("You need to fill out all the required field!");
      return;
    }
    return (
      // submit to the backend using api call
      axios
        .post("http://localhost:8080/warehouse/add", info)
        .then((res) => {
          alert(
            "New warehouse added, going back to home page.😊\nNew Warehouse Detail:\nres"
          );
          // set url to home page
          this.props.history.push("/");
        })
        .catch((err) =>
          console.log("ERROR from POST request in AddWarehous", err)
        )
    );
  };

  render() {
    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title="Add Warehouse"
          onClickBack={this.handleBackClick}
          edit={false}
        >
          <WarehouseForm
            showErr={this.state.showErr}
            type={"Add"}
            onSubmit={this.handleOnSubmit}
            onCancel={this.handleOnCancel}
          />
        </SecondLevelWrap>
      </div>
    );
  }
}
