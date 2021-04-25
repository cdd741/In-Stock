import React, { Component } from "react";
import axios from "axios";
import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import InventoryDetailsData from "../components/InventoryDetailsData/InventoryDetailsData";
const url = "http://localhost:8080/inventories";

export default class InventoriesDetails extends Component {
  state = {
    idInventory: {},
  };
  handleBackClick = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };
  getInventoryIdArr = () => {
    axios.get(url).then((res) => {
      let inventories = res.data;
      let urlID = this.props.match.params.id;
      this.setState({
        idInventory: inventories.find((item) => {
          return item.id === urlID;
        }),
      });
    });
  };

  componentDidMount() {
    this.getInventoryIdArr();
  }
  render() {
    return (
      <div className="main-container-wrapper">
        {/* <InventoryDetailsHeader idInventory={this.state.idInventory}/> */}
        <SecondLevelWrap
          title={this.state.idInventory.itemName}
          onClickBack={this.handleBackClick}
          onClickEdit={() => {}}
          edit={`/inventories/edit/${this.props.match.params.id}`}
        >
          <InventoryDetailsData idInventory={this.state.idInventory} />
        </SecondLevelWrap>
      </div>
    );
  }
}
