import React, { Component } from "react";
import axios from "axios";

export default class WarehouseDetails extends Component {
  state = {
    warehousesData: [],
    inventoriesData: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((res) => {
        let inventories = res.data;
        let warehouseId = this.props.match.params.id;
        console.log(res.data);
        let selectedLocation = inventories.filter(
          (inventory) => inventory.warehouseID === warehouseId
        );
        console.log(selectedLocation);
      })
      .catch((err) => {
        console.log("Cant receive inventories API ");
      });
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <p>THIS IS A PLACEHOLDER</p>
      </div>
    );
  }
}
