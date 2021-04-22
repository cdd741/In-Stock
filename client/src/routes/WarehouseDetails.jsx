import React, { Component } from "react";
import axios from "axios";
import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";

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
          console.log(this.state.warehousesData)
    })
  }

  render() {
    return (
      <div>
        <SecondLevelWrap inventoriesData={this.state.inventoriesData} id={true} warehouseData = {this.state.warehousesData} />
      </div>
    );
  }
}
