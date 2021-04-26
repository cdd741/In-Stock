import React from 'react'
import './InventoryDetailsData.scss'

function InventoryDetailsData({idInventory}) {
    return (
        <div className='inventory-data__container'>
                <div className ='inventory-data__tablet-divider'>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>ITEM DESCRIPTION:</p>                    
                        <p className='inventory__data'>{idInventory.description}</p>
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>CATEGORY:</p> 
                        <p className='inventory__data'>{idInventory.category}</p>                
                    </div>
                </div>
                <div className ='inventory-data__tablet-divider'>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>STATUS:</p> 
                        {idInventory.status === "In Stock" ? (
                        <div className="inStock inventory__data">{idInventory.status}</div>
                        ) : (
                        <div className="outStock inventory__data">{idInventory.status}</div>
                        )}                
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>QUANTITY:</p> 
                        <p className='inventory__data'>{idInventory.quantity}</p>                
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>WAREHOUSE:</p> 
                        <p className='inventory__data'>{idInventory.warehouseName}</p>                
                    </div>
                </div>
        </div>
    )
}

export default InventoryDetailsData
