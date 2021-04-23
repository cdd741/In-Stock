import './InventoryListHeader.scss'
import React from 'react'
import searchIcon from '../../assets/icons/search-24px.svg'
function InventoryListHeader({getInventoryArr}) {
    return (
        <div className= 'container'>
            <h2 className='inventory__header'>Inventory</h2>
            <div className='search__div'>
                <input
                className='search__bar'
                type='search'
                name='search'
                placeholder='Search...'
                />
                <img src={searchIcon}/>
            </div>
        </div>
    )
}

export default InventoryListHeader
