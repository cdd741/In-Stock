import React, { Component } from "react";
import axios from "axios";
import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehousesInventories from "../components/WarehousesInventories.jsx/WarehousesInventories";

export default class WarehouseDetails extends Component {
  state = {
    inventoriesData: [],
    warehousesData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((res) => {
        let inventories = res.data;
        let warehouseId = this.props.match.params.id;
        console.log(res.data);
        this.setState({
          inventoriesData: inventories.filter(
            (inventory) => inventory.warehouseID === warehouseId
          ),
        });
        console.log(this.state.inventoriesData);
      })
      .catch((err) => {
        console.log("Cant receive inventories API ");
      });
    axios.get('http://localhost:8080/warehouses')
    .then(res => {
        let warehouses = res.data;
        let warehouseId = this.props.match.params.id;
        this.setState({
            warehousesData: warehouses.filter(
              (warehouse) => warehouse.id === warehouseId
            ),
          });
    })
  }

  render() {
    return (
      <div>
        <SecondLevelWrap  />
        <WarehousesInventories inventoriesData={this.state.inventoriesData} warehouseData = {this.state.warehousesData} />
      </div>
    );
  }
}
