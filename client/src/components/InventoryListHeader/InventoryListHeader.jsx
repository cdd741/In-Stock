import './InventoryListHeader.scss'
import React from 'react'
import searchIcon from '../../assets/icons/search-24px.svg'
import Button from '../Button/Button'
function InventoryListHeader() {
    return (
        <div className='inventory__container'>
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
            <Button
            type='text'
            className="header__button">
                + Add new Item
            </Button>
        </div>
    )
}

export default InventoryListHeader
