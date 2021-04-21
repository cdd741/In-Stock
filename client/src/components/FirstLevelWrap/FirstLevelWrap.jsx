import React, { Component } from "react";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export default class FirstLevelWrap extends Component {
  render() {
    const { warehouseData } = this.props;
    console.log(warehouseData);
    return (
      <div className="container">
        <div className="container__header-container">
          <h1 className="container__header">Warehouses</h1>
          <form className="container__header-form">
            <input
              className="container__header-search-bar"
              placeholder="Search.."
              name="search"
            ></input>
            <button className="container__header-btn" type="submit">
              + Add New Warehouse
            </button>
          </form>
        </div>
        <div className="container__content">
          <div className="container__content-container">
            {/* Mapping the warehouse array to create the warehouse list items */}
            {warehouseData.map((warehouse) => {
              return (
                <div className="container__item-container" key={warehouse.id}>
                  <div className="container__content-location">
                    <div className="container__content-label">WAREHOUSE</div>
                    <div className="container__content-info">
                      {warehouse.name}
                    </div>
                  </div>
                  <div className="container__content-contact-name">
                    <div className="container__content-label">CONTACT NAME</div>
                    <div className="container__content-info">
                      {warehouse.contact.name}
                    </div>
                  </div>
                  <div className="container__content-address">
                    <div className="container__content-label">ADDRESS</div>
                    <div className="container__content-info">{`${warehouse.adress}, ${warehouse.city}, ${warehouse.country}`}</div>
                  </div>
                  <div className="container__content-contacts">
                    <div className="container__content-label">
                      CONTACT INFORMATION
                    </div>
                    <h5 className="container__content-info">
                      {warehouse.contact.phone}
                    </h5>
                    <h5 className="container__content-info">
                      {warehouse.contact.email}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container__btns-container">
            <img
              className="container__del-btn"
              src={delIcon}
              alt="trash bin"
            ></img>

            <img
              className="container__edit-btn"
              src={editIcon}
              alt="pencil"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
