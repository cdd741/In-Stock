import React, { Component } from "react";
import FirstLevelWrap from "../components/FirstLevelWrap/FirstLevelWrap";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import axios from "axios";

export default class Warehouses extends Component {
  state = {
    warehousesData: [],
    popUpValue: false,
    isItInventory: false,
    selectedWarehouse: "",
  };

  onClickDel = (id) => {
    axios
      .delete(`http://localhost:8080/warehouses/${id}`)
      .then((res) => {
        // updating the Warehouse Array state by taking out the selected inventory id object
        this.setState({
          warehousesData: this.state.warehousesData.filter(
            (warehouse) => warehouse.id !== id
          ),
        });
      })
      .catch((err) => {
        console.log("Warehouse deletion has failed");
      });
    this.setState({
      popUpValue: !this.state.popUpValue,
    });
  };

  togglePopUp = (warehouseId, warehouseName) => {
    this.setState({
      delInventoryId: warehouseId,
      selectedWarehouse: warehouseName,
      popUpValue: !this.state.popUpValue,
    });
  };
  componentDidMount() {
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
        <FirstLevelWrap
          warehouseData={this.state.warehousesData}
          togglePopUp={this.togglePopUp}
        />
        {this.state.popUpValue && (
          <DeleteModal
            deletingItem={this.state.selectedWarehouse}
            isItInventory={this.state.isItInventory}
            togglePopUp={this.togglePopUp}
            onClickDel={this.onClickDel}
            inventoryId={this.state.delInventoryId} 
          />
        )}
        
      </div>
    );
  }
}
