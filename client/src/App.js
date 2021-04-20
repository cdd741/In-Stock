import React from 'react'
import './App.scss';
import Warehouses from './routes/Warehouses'
import Inventories from './routes/Inventories'
import WarehouseDetails from './routes/WarehouseDetails'
import InventoriesDetails from './routes/InventoriesDetails'
import EditInventory from './routes/EditInventory'
import EditWarehouse from './routes/EditWarehouse'
import AddInventory from './routes/AddInventory'
import AddWarehouse from './routes/AddWareHouse.jsx'

import {Switch, Route,} from 'react-router-dom'

function App() {
  return (
    <>
    <Switch>
      <Route  path='/' exact component = {Warehouses}/>
      <Route  path='/warehouse/add' exact component = {AddWarehouse}/>
      <Route  path='/warehouse/edit' exact component = {EditWarehouse}/>
      <Route  path='/warehouse/:id'
              render={props=>{
                return <WarehouseDetails {...props}/>
              }}/>
      <Route  path='/inventories' exact component = {Inventories}/>
      <Route path='/inventory/add' exact component = {AddInventory}/>
      <Route path='/inventory/edit' exact component = {EditInventory}/>
      <Route  path='inventories/:id'
              render={props=>{
                return <InventoriesDetails {...props}/>
              }}/>
    </Switch>

    </>
  );
}

export default App;
