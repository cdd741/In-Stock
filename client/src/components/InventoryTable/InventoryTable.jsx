import React from 'react'
import './InventoryTable.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit2-24px.svg'

function InventoryTable({inventory}) {
    const inventoryList = inventory.map((item) =>{
        return (
            <tr className='table__row'>
                <div className='table__divider--mobile'>
                    <th className='table__header--mobile'>INVENTORY ITEM</th>
                    <td className='table__data'>{item.itemName}</td>
                </div>
                <div className='table__divider--mobile'>
                    <th className='table__header--mobile'>STATUS</th>
                    <td className='table__data'>{item.status}</td>
                </div>
                <div className='table__divider--mobile'>
                    <th className='table__header--mobile'>CATEGORY</th>
                    <td className='table__data'>{item.category}</td>
                </div>
                <div className='table__divider--mobile'>
                    <th className='table__header--mobile'>QTY</th>
                    <td className='table__data'>{item.quantity}</td>
                </div>
                <div className='table__divider--mobile'>
                    <th className='table__header--mobile'>WAREHOUSE</th>
                    <td className='table__data'>{item.warehouseName}</td>
                </div>
                <div className='table__icons'>
                    <img src={deleteIcon}/>
                    <img src={editIcon}/>

                </div>
            </tr>
        )
    })
    return (
        <table className='table__container'>
            <tbody className='table__body'>
                {/* <tr>
                    <th className='table__header--mobile'>TEST</th>
                    <td className='table__data'>{inventoryList}</td>
                </tr> */}
                {inventoryList}
            </tbody>
        </table>
    )
}

export default InventoryTable
