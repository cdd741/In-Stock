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
  };

  onClickDel = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/inventories/${id}`).then((res) => {
      console.log(res);
    })
    .catch(err => {
      console.log("Inventory failed to delete")
    })
    this.setState({
      popUpValue: !this.state.popUpValue,
    });
  };

  togglePopUp = (inventoryId) => {
    this.setState({
      delInventoryId: inventoryId,
      popUpValue: !this.state.popUpValue,
    });
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
        <SecondLevelWrap
          title={this.state.warehousesData[0]}
          edit={true}
          children={
            <>
              <WarehousesInventories
                inventoriesData={this.state.inventoriesData}
                warehouseData={this.state.warehousesData}
                togglePopUp={this.togglePopUp}
              />
              {this.state.popUpValue && (
                <DeleteModal
                  togglePopUp={this.togglePopUp}
                  onClickDel={this.onClickDel}
                  inventoryId={this.state.delInventoryId}
                />
              )}
            </>
          }
        />
    );
  }
}
