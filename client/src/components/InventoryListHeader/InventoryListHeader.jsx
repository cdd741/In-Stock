import './InventoryListHeader.scss'
import React from 'react'
import searchIcon from '../../assets/icons/search-24px.svg'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'
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
                <img src={searchIcon} alt=''/>
            </div>
            <Link className='inventory-header__link'to='/inventories/add'>
                <Button
                type={"submit"}
                className='header__button'
                children={"+ Add New Item"}
                onClick={()=>{}}>
                </Button>
            </Link>
        </div>
    )
}

export default InventoryListHeader
