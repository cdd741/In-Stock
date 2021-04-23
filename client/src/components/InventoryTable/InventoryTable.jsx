import React from 'react'
import './InventoryTable.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit2-24px.svg'

function InventoryTable({inventory}) {
    const inventoryListTabletDesktop = inventory.map((item)=>{
        return(
            <tr className='table__row'>
                <td className='table__data'>{item.itemName}</td>
                <td className='table__data'>{item.status}</td>
                <td className='table__data'>{item.category}</td>
                <td className='table__data'>{item.quantity}</td>
                <td className='table__data'>{item.warehouseName}</td>
                <td className='table__data'>
                    <img src={deleteIcon}/>
                    <img src={editIcon}/>
                </td>
            </tr>
        )
    })
    const inventoryListMobile = inventory.map((item) =>{
        return (
            <ul className='mobile__list'>
                <li className='list__divider'>
                    <h2 className='list__header'>INVENTORY ITEM</h2>
                    <p className='list__data'>{item.itemName}</p>
                </li>
                <li className='list__divider'>
                    <h2 className='list__header'>STATUS</h2>
                    <p className='list__data'>{item.status}</p>
                </li>
                <li className='list__divider'>
                    <h2 className='list__header'>CATEGORY</h2>
                    <p className='list__data'>{item.category}</p>
                </li>
                <li className='list__divider'>
                    <h2 className='list__header'>QTY</h2>
                    <p className='list__data'>{item.quantity}</p>
                </li>
                <li className='list__divider'>
                    <h2 className='list__header'>WAREHOUSE</h2>
                    <p className='list__data'>{item.warehouseName}</p>
                </li>
                <li className='list__icons'>
                    <img src={deleteIcon}/>
                    <img src={editIcon}/>
                </li>
            </ul>
        )
    })
    return (
        <div class='list__container'>
                {inventoryListMobile}
                <table className='inventory__table'>
                    <tr className='table__row'>
                        <th className='table__header'>INVENTORY ITEM</th>
                        <th className='table__header'>STATUS</th>
                        <th className='table__header'>CATEGORY</th>
                        <th className='table__header'>QTY</th>
                        <th className='table__header'>WAREHOUSE</th>
                        <th className='table__header'>ACTION</th>
                    </tr>
                    {inventoryListTabletDesktop}
                </table> 
        </div>
        
    )
}

export default InventoryTable
