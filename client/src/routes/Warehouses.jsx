import React, { Component } from "react";
import FirstLevelWrap from "../components/FirstLevelWrap/FirstLevelWrap";
import warehouseData from "../data/warehouses.json";

export default class Warehouses extends Component {
  state = {
    warehouseData: warehouseData,
  };

  render() {
    return (
      <div>
        <FirstLevelWrap warehouseData={warehouseData} />
      </div>
    );
  }
}
