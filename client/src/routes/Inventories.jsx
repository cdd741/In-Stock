import React, { Component } from 'react'
import axios from 'axios'
import InventoryListHeader from '../components/InventoryListHeader/InventoryListHeader'
import InventoryTable from '../components/InventoryTable/InventoryTable'
import DeleteModal from "../components/DeleteModal/DeleteModal";

const url = "http://localhost:8080/inventories";

export default class Inventories extends Component {
    state= {
        inventory: [],
        popUpValue: false,
        isItInventory: true,
        selectedItem:'',
        searchTerm:''
    }

  handleOnClickSearch = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  };

    componentDidMount(){
        this.getInventoryArr()
    }
    onClickDel = (id) => {
        axios
          .delete(`http://localhost:8080/inventories/${id}`)
          .then((res) => {
            // updating the Warehouse Array state by taking out the selected inventory id object
            this.setState({
              warehousesData: this.state.inventory.filter(
                (inventoryID) => inventoryID.id !== id
              ),
            });
          })
          .catch((err) => {
            console.log("Inventory Item deletion has failed");
          });
        this.setState({
          popUpValue: !this.state.popUpValue,
        });
      };
      togglePopUp=(inventoryId, inventoryItem) =>{
          this.setState({
            delInventoryId: inventoryId,
            selectedItem: inventoryItem,
            popUpValue:!this.state.popUpValue,
          })
      }

    render() {
        return (
            <div className='main-container-wrapper'>
                <div className='container'>
                <InventoryListHeader handleOnClickSearch={this.handleOnClickSearch} />
                <InventoryTable 
                    inventory={this.state.inventory}
                    searchTerm={this.state.searchTerm}
                    togglePopUp={this.togglePopUp}
                />
                </div>
                {this.state.popUpValue && (
                    <DeleteModal
                        deletingItem={this.state.selectedItem}
                        onClickDel={this.onClickDel}
                        isItInventory={this.state.isItInventory}
                        togglePopUp={this.togglePopUp}
                        inventoryId={this.state.delInventoryId}
                    />
                )}
            </div>
        )
    }
}
