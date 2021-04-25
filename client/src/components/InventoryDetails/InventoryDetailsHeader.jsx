import React from 'react'
import editIcon from '../../assets/icons/edit-24px.svg'

function InventoryDetailsHeader({idInventory}) {
    
    return (
        <div>
            <h2>{idInventory.itemName} </h2>
            <button>
                <img src={editIcon}/></button>
        </div>
    )
}

export default InventoryDetailsHeader
