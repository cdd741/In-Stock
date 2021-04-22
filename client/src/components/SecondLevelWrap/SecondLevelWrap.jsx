import React, { Component } from "react";
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";

export default class SecondLevelWrap extends Component {
  render() {
    const { inventoriesData, id, warehouseData } = this.props;
    return (
      <div>
        <div className="container__header-container">
          <div className="container__header-content">
            {inventoriesData.length > 0 && inventoriesData[0].warehouseName && (
              <h1 className="container__header">
                {inventoriesData[0].warehouseName}
              </h1>
            )}
            {id ? (
              <img src={editIcon} alt="Pencil"></img>
            ) : (
              <form className="container__header-form">
                <div className="container__header-search-bar">
                  <input
                    className="container__header-search-bar-input"
                    placeholder="Search.."
                    name="search"
                  ></input>
                  <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="container__search-icon"
                  />
                </div>
                <Link to="/warehouses/add">
                  <button className="container__header-btn" type="submit">
                    + Add New Warehouse
                  </button>
                </Link>
              </form>
            )}
          </div>
          {warehouseData.length > 0 && (
            <div className="container__item">
              <div
                className="container__item-container"
                key={warehouseData[0].id}
              >
                <div className="container__content-location">
                  <div className="container__content-label-container">
                    <h4 className="container__content-label">WAREHOUSE</h4>
                    <img
                      src={sortIcon}
                      alt="Arrow up and down"
                      className="container__sort-img"
                    ></img>
                  </div>
                  <div className="container__content-info-container">
                    <Link to={`/warehouses/${warehouseData[0].id}`}>
                      <h4 className="container__content-info">
                        {warehouseData[0].name}
                      </h4>
                      <img src={arrowImg} alt="arrow to the right"></img>
                    </Link>
                  </div>
                </div>
                <div className="container__content-address">
                  <div className="container__content-label-container">
                    <h4 className="container__content-label">ADDRESS</h4>
                    <img
                      src={sortIcon}
                      alt="Arrow up and down"
                      className="container__sort-img"
                    ></img>
                  </div>
                  <h4 className="container__content-info">{`${warehouseData[0].address}, ${warehouseData[0].city}, ${warehouseData[0].country}`}</h4>
                </div>
                <div className="container__content-contact-name">
                  <div className="container__content-label-container">
                    <h4 className="container__content-label">CONTACT NAME</h4>
                    <img
                      src={sortIcon}
                      alt="Arrow up and down"
                      className="container__sort-img"
                    ></img>
                  </div>
                  <h4 className="container__content-info">
                    {warehouseData[0].contact.name}
                  </h4>
                </div>
                <div className="container__content-contacts">
                  <div className="container__content-label-container">
                    <h4 className="container__content-label">
                      CONTACT INFORMATION
                    </h4>
                    <img
                      src={sortIcon}
                      alt="Arrow up and down"
                      className="container__sort-img"
                    ></img>
                  </div>
                  <h4 className="container__content-info">
                    {warehouseData[0].contact.phone}
                  </h4>
                  <h4 className="container__content-info">
                    {warehouseData[0].contact.email}
                  </h4>
                </div>
              </div>
            </div>
          )}
          <div className="container__content">
            {/* Mapping the warehouse array to create the warehouse list items */}
            {inventoriesData.map((inventory) => {
              return (
                <div className="container__item">
                  <div className="container__item-container" key={inventory.id}>
                    <div className="container__content-location">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">
                          INVENTORY ITEM
                        </h4>
                      </div>
                      <div className="container__content-info-container">
                        <Link to={`/inventories/${inventory.id}`}>
                          <h4 className="container__content-info">
                            {inventory.itemName}
                          </h4>
                          <img src={arrowImg} alt="arrow to the right"></img>
                        </Link>
                      </div>
                    </div>
                    <div className="container__content-address">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">CATEGORY</h4>
                      </div>
                      <h4 className="container__content-info">{`${inventory.category}`}</h4>
                    </div>
                    <div className="container__content-contact-name">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">STATUS</h4>
                      </div>
                      <h4 className="container__content-info">
                        {inventory.status}
                      </h4>
                    </div>
                    <div className="container__content-contacts">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">QTY</h4>
                      </div>
                      <h4 className="container__content-info">
                        {inventory.quantity}
                      </h4>
                    </div>
                    <div className="container__btns-container">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">ACTION</h4>
                      </div>
                      <div className="container__btns">
                        <Link>
                          <img
                            className="container__del-btn"
                            src={delIcon}
                            alt="trash bin"
                          ></img>
                        </Link>
                        <Link to={`/warehouses/edit/${inventory.id}`}>
                          <img
                            className="container__edit-btn"
                            src={editIcon}
                            alt="pencil"
                          ></img>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
