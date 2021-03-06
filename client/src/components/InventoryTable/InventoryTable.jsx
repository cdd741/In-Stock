import React, { useState } from "react";
import "./InventoryTable.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit2-24px.svg";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

function InventoryTable({ inventory, togglePopUp, searchTerm }) {
  const [sortOrder, setSortOrder] = useState(false);
  const [sortType, setSortType] = useState("");

  const handleOnClickSort = (type, e) => {
    e.preventDefault();
    const order = sortType === type ? !sortOrder : false;
    setSortOrder(order);
    setSortType(type);
  };

  const searchList = (inventoryList) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (!searchTerm) {
      return [...inventoryList];
    }
    return inventoryList.filter((inventoryInfo) => {
      for (let i in inventoryInfo) {
        if (typeof inventoryInfo[i] === "object") {
          for (let j in inventoryInfo[i]) {
            if (
              String(inventoryInfo[i][j])
                .toLowerCase()
                .includes(lowerCaseSearchTerm)
            )
              return true;
          }
        } else {
          if (
            String(inventoryInfo[i]).toLowerCase().includes(lowerCaseSearchTerm)
          )
            return true;
        }
      }
      return false;
    });
  };

  const sortList = (invenotryList) => {
    let sortedList = [];
    switch (sortType) {
      case "itemName":
        sortedList = [...invenotryList].sort((inventory1, inventory2) =>
          inventory1.itemName.localeCompare(inventory2.itemName)
        );
        break;
      case "status":
        sortedList = [...invenotryList].sort((inventory1, inventory2) =>
          inventory1.status.localeCompare(inventory2.status)
        );
        break;
      case "category":
        sortedList = [...invenotryList].sort((inventory1, inventory2) =>
          inventory1.category.localeCompare(inventory2.category)
        );
        break;
      case "quantity":
        sortedList = [...invenotryList].sort(
          (inventory1, inventory2) => inventory1.quantity - inventory2.quantity
        );

        break;
      case "warehouse":
        sortedList = [...invenotryList].sort((inventory1, inventory2) =>
          inventory1.warehouseName.localeCompare(inventory2.warehouseName)
        );
        break;
      default:
        sortedList = [...invenotryList];
        break;
    }

    return sortOrder ? sortedList.reverse() : sortedList;
  };

  const inventoryListTabletDesktop = sortList(searchList(inventory)).map(
    (item) => {
      return (
        <tr key={item.id} className="table__row">
          <td className="table__data">
            <Link to={`/inventories/${item.id}`} className="table__edit">
              {item.itemName}
              <img className="table__Icon" src={chevron} alt='chevron' />
            </Link>
          </td>
          <td className="table__data ">
                      {item.status === "In Stock" ? (
              <div className="inStock">{item.status}</div>
            ) : (
              <div className="outStock">{item.status}</div>
            )}
          </td>
          <td className="table__data">{item.category}</td>
          <td className="table__data">{item.quantity}</td>
          <td className="table__data">{item.warehouseName}</td>
          <td className="table__data">
            <div className='icon__mover'>
              <img  
                        src={deleteIcon} 
                        alt='deleteIcon'
                        id={item.id}
                        onClick={()=>{
                            togglePopUp(item.id, item.itemName)
                        }}
                        />
                        <Link to={`/inventories/edit/${item.id}`}>
                        <img src={editIcon} alt='editIcon' className="table__edit-btn"/>
                    </Link>
              </div>
          </td>
        </tr>
      );
    }
  );

  const inventoryListMobile = sortList(searchList(inventory)).map((item) => {
    return (
      <ul key={item.id} className="mobile__list">
        <li className="list__divider">
          <h2 className="list__header">INVENTORY ITEM</h2>
          <p className="list__data">{item.itemName}</p>
        </li>
        <li className="list__divider">
          <h2 className="list__header">STATUS</h2>
          <p className="list__data">{item.status}</p>
        </li>
        <li className="list__divider">
          <h2 className="list__header">CATEGORY</h2>
          <p className="list__data">{item.category}</p>
        </li>
        <li className="list__divider">
          <h2 className="list__header">QTY</h2>
          <p className="list__data">{item.quantity}</p>
        </li>
        <li className="list__divider">
          <h2 className="list__header">WAREHOUSE</h2>
          <p className="list__data">{item.warehouseName}</p>
        </li>
        <li className="list__icons">
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
        </li>
      </ul>
    );
  });
  return (
    <div className="list__container">
      {inventoryListMobile}
      <table className="inventory__table">
        <tr className="table__row">
          <th className="table__header">
            INVENTORY ITEM
            <img
              className="table__Icon pointer"
              src={sortIcon}
              alt="sortIcon"
              onClick={(e) => {
                handleOnClickSort("itemName", e);
              }}
            />
          </th>
          <th className="table__header">
            STATUS
            <img
              className="table__Icon pointer"
              src={sortIcon}
              alt="sortIcon"
              onClick={(e) => {
                handleOnClickSort("status", e);
              }}
            />
          </th>
          <th className="table__header">
            CATEGORY
            <img
              className="table__Icon pointer"
              src={sortIcon}
              alt="sortIcon"
              onClick={(e) => {
                handleOnClickSort("category", e);
              }}
            />
          </th>
          <th className="table__header">
            QTY
            <img
              className="table__Icon pointer"
              src={sortIcon}
              alt="sortIcon"
              onClick={(e) => {
                handleOnClickSort("quantity", e);
              }}
            />
          </th>
          <th className="table__header">
            WAREHOUSE
            <img
              className="table__Icon pointer"
              src={sortIcon}
              alt="sortIcon"
              onClick={(e) => {
                handleOnClickSort("warehouse", e);
              }}
            />
          </th>
          <th className="table__header">
            ACTION
          </th>
        </tr>
        {inventoryListTabletDesktop}
      </table>
    </div>
  );
}

export default InventoryTable;
