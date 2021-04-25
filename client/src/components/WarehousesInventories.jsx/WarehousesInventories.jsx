import React, { Component } from "react";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import "./WarehousesInventories.scss";

export default class WarehousesInventories extends Component {
  render() {
    const { inventoriesData, warehouseData, togglePopUp } = this.props;
    return (
      <div className="list">
        {/* The Warehouse Address / Contact Information Card */}
        {/* 1st render warehouseData is an empty array, therefore using shortcircuiting to prevent the crash */}
        {warehouseData.length > 0 && (
          <div className="list__warehouse-information">
            <div
              className="list__warehouse-information-container"
              key={warehouseData[0].id}
            >
              {/* Warehouse Adress Section */}
              <div className="list__warehouse-location">
                {/* Label */}
                <div className="list__content-label-container">
                  <h4 className="list__content-label">WAREHOUSE ADDRESS:</h4>
                </div>
                {/* Address */}
                <div className="list__content-info-container">
                  <h4 className="list__content-info">{`${warehouseData[0].address}, ${warehouseData[0].city}, ${warehouseData[0].country}`}</h4>
                </div>
              </div>
              {/* Contact Name Section */}
              <div className="list__warehouse-contact-name">
                {/* Label */}
                <div className="list__content-label-container">
                  <h4 className="list__content-label">CONTACT NAME:</h4>
                </div>
                {/* Contact Name Information */}
                <h4 className="list__content-info">
                  {`${warehouseData[0].contact.name} ${warehouseData[0].contact.position}`}
                </h4>
              </div>
              {/* Contact Information Section */}
              <div className="list__warehouse-contact-information">
                {/* Label */}
                <div className="list__content-label-container">
                  <h4 className="list__content-label">CONTACT INFORMATION:</h4>
                </div>
                {/* Contact Information */}
                <h4 className="list__content-info">
                  {warehouseData[0].contact.phone}
                </h4>
                <h4 className="list__content-info">
                  {warehouseData[0].contact.email}
                </h4>
              </div>
            </div>
          </div>
        )}
        {/* The grey background label bar for tablet and desktop view */}
        <div className="list__content-title-bar">
          {/* Warehouse Label */}
          <div className="list__content-label-container">
            <h4 className="list__content-label">INVENTORY ITEM</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>
          {/* Category Label */}
          <div className="list__content-label-container">
            <h4 className="list__content-label">CATEGORY</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>
          {/* Status Label */}
          <div className="list__content-label-container">
            <h4 className="list__content-label">STATUS</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>
          {/* Quantity Label */}
          <div className="list__content-label-container">
            {/* Label Quantity only show in mobile and tablet view */}
            <h4 className="list__content-label list__quantity-desktop">
              QUANTITY
            </h4>
            {/* Label QTY only show in desktop view */}
            <h4 className="list__content-label list__qty-desktop">QTY</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>
          {/* Action Label */}
          <div className="list__content-label-container">
            <h4 className="list__content-label">ACTION</h4>
          </div>
        </div>
        {/* Each Specific Item Card */}
        <div className="list__content">
          {/* Mapping the warehouse inventory array to create the warehouse list items */}
          {inventoriesData.map((inventory) => {
            return (
              <div className="list__item">
                <div className="list__item-container" key={inventory.id}>
                  {/* Inventory Item Container  */}
                  <div className="list__content-inventory-item">
                    {/* Label */}
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">INVENTORY ITEM</h4>
                    </div>
                    {/* Inventory Item */}
                    <div 
                      className="list__content-info-container"
                    >
                      <Link to={`/inventories/${inventory.id}`}>
                        <h4 className="list__content-info">
                          {inventory.itemName}
                        </h4>
                        <div className="list__arrow-img">
                          <img src={arrowImg} alt="arrow to the right"></img>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* Category Container  */}
                  <div className="list__content-category">
                    {/* Label */}
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">CATEGORY</h4>
                    </div>
                    {/* Category */}
                    <h4 className="list__content-info">{`${inventory.category}`}</h4>
                  </div>
                  {/* Status Container */}
                  <div className="list__content-status">
                    {/* Label */}
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">STATUS</h4>
                    </div>
                    {/* Status */}
                    {/* Determine if it is displayed instock or outofstock */}
                    {inventory.status === "In Stock" ? (
                      <h4 className="list__in-stock">{inventory.status}</h4>
                    ) : (
                      <h4 className="list__out-of-stock">{inventory.status}</h4>
                    )}
                  </div>
                  {/* Quantity Container */}
                  <div className="list__content-qty">
                    {/* Label */}
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">QTY</h4>
                    </div>
                    {/* Quantity */}
                    <h4 className="list__content-info">{inventory.quantity}</h4>
                  </div>
                  {/* Buttons Container */}
                  <div className="list__btns-container">
                    {/* Label */}
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">ACTION</h4>
                    </div>
                    {/* Edit and Delete Button */}
                    <div className="list__btns">
                      <img
                        className="list__del-btn"
                        id={inventory.id}
                        src={delIcon}
                        alt="trash bin"
                        onClick={()=> {togglePopUp(inventory.id, inventory.itemName)}}
                      ></img>
                      <Link to={`/warehouses/edit/${inventory.id}`}>
                        <img
                          className="list__edit-btn"
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
    );
  }
}
