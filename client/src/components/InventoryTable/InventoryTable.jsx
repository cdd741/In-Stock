import React from 'react'
import './InventoryTable.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit2-24px.svg'
import{Link} from 'react-router-dom';
import sortIcon from '../../assets/icons/sort-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'

function InventoryTable({inventory, togglePopUp}) {
    const inventoryListTabletDesktop = inventory.map((item)=>{
        return(
            <tr className='table__row'>
                <td className='table__data'>
                    <Link to={`/inventories/${item.id}`} className='table__edit'>
                        {item.itemName}
                        <img className='table__Icon'src={chevron} alt='chevron'/>
                    </Link>
                </td>
                <td className='table__data '>
                    {
                    item.status==='In Stock'?
                        (<div className='inStock'>
                        {item.status}    
                        </div>)
                    :
                        (<div className='outStock'>
                        {item.status}    
                        </div>)
                    }
                </td>
                <td className='table__data'>{item.category}</td>
                <td className='table__data'>{item.quantity}</td>
                <td className='table__data'>{item.warehouseName}</td>
                <td className='table__data'>
                    <img 
                        src={deleteIcon} 
                        alt='deleteIcon'
                        id={item.id}
                        onClick={()=>{
                            togglePopUp(item.id, item.itemName)
                        }}
                
                        />        
                    <Link to={`/inventories/edit/${item.id}`}>
                        <img src={editIcon} alt='editIcon'/>
                    </Link>
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
                    <img src={deleteIcon} alt='deleteIcon'/>
                    <Link to={`/inventories/edit/${item.id}`}>
                    <img src={editIcon} alt='editIcon'/>
                    </Link>
                </li>
            </ul>
        )
    })
    return (
        <div className='list__container'>
                {inventoryListMobile}
                <table className='inventory__table'>
                    <tr className='table__row'>
                        <th className='table__header'>INVENTORY ITEM<img className='table__Icon' src={sortIcon} alt='sortIcon'/></th>
                        <th className='table__header'>STATUS<img className='table__Icon' src={sortIcon} alt='sortIcon'/></th>
                        <th className='table__header'>CATEGORY<img className='table__Icon' src={sortIcon} alt='sortIcon'/></th>
                        <th className='table__header'>QTY<img className='table__Icon' src={sortIcon} alt='sortIcon'/></th>
                        <th className='table__header'>WAREHOUSE<img className='table__Icon' src={sortIcon} alt='sortIcon'/></th>
                        <th className='table__header'>ACTION</th>
                    </tr>
                    {inventoryListTabletDesktop}
                </table> 
        </div>
        
    )
}

export default InventoryTable
