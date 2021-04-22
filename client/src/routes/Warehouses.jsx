import React, { Component } from "react";
import FirstLevelWrap from "../components/FirstLevelWrap/FirstLevelWrap";
import axios from "axios";

export default class Warehouses extends Component {
  state = {
    warehousesData: [],
  };

  componentDidMount() {
    console.log("did mount");
    axios
      .get("http://localhost:8080/warehouses")
      .then((res) => {
        this.setState({
          warehousesData: res.data,
        });
      })
      .catch((err) => {
        console.log("Warehouse API failed");
      });
  }

  render() {
    return (
      <div>
        <FirstLevelWrap warehouseData={this.state.warehousesData} />
      </div>
    );
  }
}
