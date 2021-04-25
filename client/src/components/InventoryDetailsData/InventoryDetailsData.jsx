import React from 'react'

function InventoryDetailsData({idInventory}) {
    return (
        <div>
                <div>
                    <h2>ITEM DESCRIPTION</h2>                    
                    <p>{idInventory.description}</p>
                </div>
                <div>
                    <h2>CATEGORY:</h2> 
                    <p>{idInventory.category}</p>                
                </div>
                <div>
                    <h2>STATUS:</h2> 
                    <p>{idInventory.status}</p>                
                </div>
                <div>
                    <h2>QUANTITY:</h2> 
                    <p>{idInventory.quantity}</p>                
                </div>
                <div>
                    <h2>WAREHOUSE:</h2> 
                    <p>{idInventory.warehouseName}</p>                
                </div>
        </div>
    )
}

export default InventoryDetailsData
