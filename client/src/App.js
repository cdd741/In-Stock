import React from 'react'
import './App.scss';
import Warehouses from './routes/Warehouses'
import Inventories from './routes/Inventories'
import WarehouseDetails from './routes/WarehouseDetails'
import InventoriesDetails from './routes/InventoriesDetails'
import EditAddInventory from './routes/EditAddInventories'
import EditAddWarehouse from './routes/EditAddWarehouse'

import {Switch, Route,} from 'react-router-dom'

function App() {
  return (
    <>
    <Switch>
      <Route  path='/' exact component = {Warehouses}/>
      <Route  path='/:id'
              render={props=>{
                return <WarehouseDetails {...props}/>
              }}/>
      <Route  path='/inventories' exact component = {Inventories}/>
      <Route  path='inventories/:id'
              render={props=>{
                return <InventoriesDetails {...props}/>
              }}/>
      <Route path='/warehouseinfo' exact component = {EditAddWarehouse}/>
      <Route path='/inventoryinfo' exact component = {EditAddInventory}/>
    </Switch>

    </>
  );
}

export default App;
