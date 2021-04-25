import React, { Component } from "react";
import axios from "axios";
import InventoryListHeader from "../components/InventoryListHeader/InventoryListHeader";
import InventoryTable from "../components/InventoryTable/InventoryTable";

const url = "http://localhost:8080/inventories";

export default class Inventories extends Component {
  state = {
    inventory: [],
    searchTerm: "",
  };

  handleOnClickSearch = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  };

  getInventoryArr = () => {
    axios.get(url).then((res) => {
      this.setState({
        inventory: res.data,
      });
    });
  };

  componentDidMount() {
    this.getInventoryArr();
  }

  render() {
    return (
      <div className="container">
        <InventoryListHeader handleOnClickSearch={this.handleOnClickSearch} />
        <InventoryTable
          inventory={this.state.inventory}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}
