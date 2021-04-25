import axios from "axios";
import React, { Component } from "react";
import Footer from "../common/Footer/Footer";

import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

export default class EditWarehouse extends Component {
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

  handleOnSubmit = (e, data) => {
    e.preventDefault();
    this.setState({ showErr: true });
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
        .put(
          `http://localhost:8080/warehouses/${this.props.match.params.id}`,
          data
        )
        .then((res) => {
          alert(
            `Warehouse changed, going back to home page.😊\nNew Warehouse Detail:\n${{
              ...res,
            }}`
          );
          // set url to home page
          this.props.history.push("/");
        })
        .catch((err) =>
          console.log("ERROR from POST request in EditWarehous", err)
        )
    );
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouses/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log("ERROR occured from GET request in EditWarehouse", err);
      });
  }

  render() {
    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title="Edit Warehouse"
          onClickBack={this.handleBackClick}
          edit={false}
        >
          <WarehouseForm
            showErr={this.state.showErr}
            type={"edit"}
            data={this.state.data}
            onSubmit={this.handleOnSubmit}
            onCancel={this.handleOnCancel}
          />
        </SecondLevelWrap>
        <Footer />
      </div>
    );
  }
}
