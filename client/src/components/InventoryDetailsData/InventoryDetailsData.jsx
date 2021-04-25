import React from 'react'
import './InventoryDetailsData.scss'

function InventoryDetailsData({idInventory}) {
    return (
        <div className='inventory-data__container'>
                <div className ='inventory-data__tablet-divider'>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>ITEM DESCRIPTION:</p>                    
                        <p>{idInventory.description}</p>
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>CATEGORY:</p> 
                        <p>{idInventory.category}</p>                
                    </div>
                </div>
                <div className ='inventory-data__tablet-divider'>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>STATUS:</p> 
                        <p>{idInventory.status}</p>                
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>QUANTITY:</p> 
                        <p>{idInventory.quantity}</p>                
                    </div>
                    <div className='inventory-data__divider'>
                        <p className='inventory-data__header'>WAREHOUSE:</p> 
                        <p>{idInventory.warehouseName}</p>                
                    </div>
                </div>
        </div>
    )
}

export default InventoryDetailsData
