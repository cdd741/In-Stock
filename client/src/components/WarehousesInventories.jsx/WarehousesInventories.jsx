import React, { Component } from "react";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import "./WarehousesInventories.scss";

export default class WarehousesInventories extends Component {
  render() {
    const { inventoriesData, warehouseData } = this.props;
    return (
      <div className="list">
        {/* The Warehouse Address / Contact Information Card */}
        {warehouseData.length > 0 && (
          <div className="list__warehouse-information">
            <div
              className="list__warehouse-information-container"
              key={warehouseData[0].id}
            >
              <div className="list__warehouse-location">
                <div className="list__content-label-container">
                  <h4 className="list__content-label">WAREHOUSE ADDRESS:</h4>
                </div>
                <div className="list__content-info-container">
                  <h4 className="list__content-info">{`${warehouseData[0].address}, ${warehouseData[0].city}, ${warehouseData[0].country}`}</h4>
                </div>
              </div>
              <div className="list__warehouse-contact-name">
                <div className="list__content-label-container">
                  <h4 className="list__content-label">CONTACT NAME:</h4>
                </div>
                <h4 className="list__content-info">
                  {`${warehouseData[0].contact.name} ${warehouseData[0].contact.position}`}
                </h4>
              </div>
              <div className="list__warehouse-contact-information">
                <div className="list__content-label-container">
                  <h4 className="list__content-label">CONTACT INFORMATION:</h4>
                </div>
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
          <div className="list__content-label-container">
            <h4 className="list__content-label">WAREHOUSE</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>{" "}
          <div className="list__content-label-container">
            <h4 className="list__content-label">ADDRESS</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>{" "}
          <div className="list__content-label-container">
            <h4 className="list__content-label">CONTACT NAME</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>{" "}
          <div className="list__content-label-container">
            <h4 className="list__content-label">CONTACT INFORMATION</h4>
            <img
              src={sortIcon}
              alt="Arrow up and down"
              className="list__sort-img"
            ></img>
          </div>{" "}
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
                  <div className="list__content-location">
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">INVENTORY ITEM</h4>
                    </div>
                    <div className="list__content-info-container">
                      <Link to={`/inventories/${inventory.id}`}>
                        <h4 className="list__content-info">
                          {inventory.itemName}
                        </h4>
                        <img src={arrowImg} alt="arrow to the right"></img>
                      </Link>
                    </div>
                  </div>
                  <div className="list__content-address">
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">CATEGORY</h4>
                    </div>
                    <h4 className="list__content-info">{`${inventory.category}`}</h4>
                  </div>
                  <div className="list__content-status">
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">STATUS</h4>
                    </div>
                    {inventory.status === "In Stock" ? (
                      <h4 className="list__in-stock">{inventory.status}</h4>
                    ) : (
                      <h4 className="list__out-of-stock">{inventory.status}</h4>
                    )}
                  </div>
                  <div className="list__content-qty">
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">QTY</h4>
                    </div>
                    <h4 className="list__content-info">{inventory.quantity}</h4>
                  </div>
                  <div className="list__btns-container">
                    <div className="list__content-label-container">
                      <h4 className="list__content-label">ACTION</h4>
                    </div>
                    <div className="list__btns">
                      <Link>
                        <img
                          className="list__del-btn"
                          src={delIcon}
                          alt="trash bin"
                        ></img>
                      </Link>
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
