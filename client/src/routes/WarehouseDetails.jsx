import React, { Component } from "react";
import axios from "axios";
import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehousesInventories from "../components/WarehousesInventories.jsx/WarehousesInventories";
import DeleteModal from "../components/DeleteModal/DeleteModal";

export default class WarehouseDetails extends Component {
  state = {
    inventoriesData: [],
    warehousesData: [],
    popUpValue: false,
    delInventoryId: "",
    isItInventory: true,
    selectedInventory: ""
  };

  onClickDel = (id) => {
    axios
      .delete(`http://localhost:8080/inventories/${id}`)
      .then((res) => {
        // updating the Inventory Array state by taking out the selected inventory id object 
        this.setState({
          inventoriesData: this.state.inventoriesData.filter(
            (inventory) => inventory.id !== id
          ),
        });
      })
      .catch((err) => {
        console.log("Inventory failed to delete");
      });
    this.setState({
      popUpValue: !this.state.popUpValue,
    });
  };

  togglePopUp = (inventoryId, inventoryItem) => {
    this.setState({
      delInventoryId: inventoryId,
      selectedInventory: inventoryItem,
      popUpValue: !this.state.popUpValue,
    });
  };

  handleBackClick = (e) => {
    e.preventDefault();
    // setting url to the previous page
    this.props.history.goBack();
  };

  componentDidMount() {
    //getting the warehouse inventory list according to the warehouse:id
    axios
      .get("http://localhost:8080/inventories")
      .then((res) => {
        let inventories = res.data;
        let warehouseId = this.props.match.params.id;
        this.setState({
          inventoriesData: inventories.filter(
            (inventory) => inventory.warehouseID === warehouseId
          ),
        });
      })
      .catch((err) => {
        console.log("Cant receive inventories API ");
      });
    axios
      .get("http://localhost:8080/warehouses")
      //getting the warehouse location/contact information according to the warehouse:id
      .then((res) => {
        let warehouses = res.data;
        let warehouseId = this.props.match.params.id;
        this.setState({
          warehousesData: warehouses.filter(
            (warehouse) => warehouse.id === warehouseId
          ),
        });
      });
  }

  render() {
    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title={this.state.warehousesData[0]}
          onClickBack={this.handleBackClick}
          edit={true}
        >
          <WarehousesInventories
            inventoriesData={this.state.inventoriesData}
            warehouseData={this.state.warehousesData}
            togglePopUp={this.togglePopUp}
          />
          {this.state.popUpValue && (
            <DeleteModal
              deletingItem={this.state.selectedInventory}
              isItInventory={this.state.isItInventory}
              togglePopUp={this.togglePopUp}
              onClickDel={this.onClickDel}
              inventoryId={this.state.delInventoryId}
            />
          )}
        </SecondLevelWrap>
      </div>
    );
  }
}
