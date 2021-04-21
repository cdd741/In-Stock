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
    <div className='App'>
    <Switch>
      <Redirect from='/' exact to ='/warehouses'/>
      <Route    path='/warehouses' exact component = {Warehouses}/>
      <Route    path='/warehouses/add' exact component = {AddWarehouse}/>
      <Route    path='/warehouses/edit' exact component = {EditWarehouse}/>
      <Route    path='/warehouses/:id'
                render={props=>{
                  return <WarehouseDetails {...props}/>
                }}/>
      <Route    path='/inventories' exact component = {Inventories}/>
      <Route    path='/inventories/add' exact component = {AddInventory}/>
      <Route    path='/inventories/edit' exact component = {EditInventory}/>
      <Route    path='inventories/:id'
                render={props=>{
                  return <InventoriesDetails {...props}/>
                }}/>
    </Switch>

    </div>
  );
}

export default App;
