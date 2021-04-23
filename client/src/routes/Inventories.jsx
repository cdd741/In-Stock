import React, { Component } from 'react'
import axios from 'axios'
import InventoryListHeader from '../components/InventoryListHeader/InventoryListHeader'
import InventoryTable from '../components/InventoryTable/InventoryTable'

const url='http://localhost:8080/inventories';

export default class Inventories extends Component {
    state= {
        inventory: []
    }

    getInventoryArr = ()=>{
        axios.get(url)
        .then(res=>{
            this.setState({
                inventory:res.data
            })
        })
    }

    componentDidMount(){
        this.getInventoryArr()
    }

    render() {
        return (
            <div className='container'>
                <InventoryListHeader />
                <InventoryTable inventory={this.state.inventory}/>
            </div>
        )
    }
}
