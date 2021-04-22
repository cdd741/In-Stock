import React, {Component} from "react";
import "./App.scss";
import Warehouses from "./routes/Warehouses";
import Inventories from "./routes/Inventories";
import WarehouseDetails from "./routes/WarehouseDetails";
import InventoriesDetails from "./routes/InventoriesDetails";
import EditInventory from "./routes/EditInventory";
import EditWarehouse from "./routes/EditWarehouse";
import AddInventory from "./routes/AddInventory";
import AddWarehouse from "./routes/AddWareHouse.jsx";
import Header from './common/Header/Header'
import DeleteModal from './components/DeleteModal/DeleteModal'

import {Switch, Route,Redirect} from 'react-router-dom'

class  App extends Component {
  state = {
    isWarehouse: true
  };
  handleOnToggle = (isWarehouse) =>{
    this.setState({isWarehouse: isWarehouse})
    console.log(this.state.isWarehouse)
  }
  render(){
    return (
      <>
        <Header toggle={this.handleOnToggle} isWarehouse={this.state.isWarehouse}/>
        <Switch>
          <Redirect from="/" exact to="/warehouses" />
          <Route path="/warehouses" exact component={Warehouses} />
          <Route path="/warehouses/add" exact component={AddWarehouse} />
          <Route path="/warehouses/edit" exact component={EditWarehouse} />
          <Route
            path="/warehouses/:id"
            render={(props) => {
              return <WarehouseDetails {...props} />;
            }}
          />
          <Route path="/inventories" exact component={Inventories} />
          <Route path="/inventories/add" exact component={AddInventory} />
          <Route path="/inventories/edit/:id" exact component={EditInventory} />
          <Route
            path="inventories/:id"
            render={(props) => {
              return <InventoriesDetails {...props} />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;

