import React, { Component } from "react";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";

export default class WarehousesInventories extends Component {
  render() {
    const { inventoriesData, warehouseData } = this.props;
    return (
      <div>
        {warehouseData.length > 0 && (
          <div className="container__item">
            <div
              className="container__item-container"
              key={warehouseData[0].id}
            >
              <div className="container__content-location">
                <div className="container__content-label-container">
                  <h4 className="container__content-label">
                    WAREHOUSE ADDRESS
                  </h4>
                </div>
                <div className="container__content-info-container">
                  <h4 className="container__content-info">{`${warehouseData[0].address}, ${warehouseData[0].city}, ${warehouseData[0].country}`}</h4>
                </div>
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
          {/* Mapping the warehouse inventory array to create the warehouse list items */}
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
    );
  }
}
