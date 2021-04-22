import React, { Component } from "react";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./FirstLevelWrap.scss";
import { Link } from "react-router-dom";

export default class FirstLevelWrap extends Component {
  render() {
    const { warehouseData } = this.props;
    return (
      <div className="outer-container">
        <div className="container">
          <div className="container__header-container">
            <div className="container__header-content">
              <h1 className="container__header">Warehouses</h1>
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
            </div>
          </div>
          <div className="container__content-title-bar">
            <div className="container__content-label-container">
              <h4 className="container__content-label">WAREHOUSE</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img"
              ></img>
            </div>{" "}
            <div className="container__content-label-container">
              <h4 className="container__content-label">ADDRESS</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img"
              ></img>
            </div>{" "}
            <div className="container__content-label-container">
              <h4 className="container__content-label">CONTACT NAME</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img"
              ></img>
            </div>{" "}
            <div className="container__content-label-container">
              <h4 className="container__content-label">CONTACT INFORMATION</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img"
              ></img>
            </div>{" "}
            <div className="container__content-label-container">
              <h4 className="container__content-label">ACTION</h4>
            </div>
          </div>
          <div className="container__content">
            {/* Mapping the warehouse array to create the warehouse list items */}
            {warehouseData.map((warehouse) => {
              return (
                <div className="container__item">
                  <div className="container__item-container" key={warehouse.id}>
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
                        <Link to={`/warehouses/${warehouse.id}`}>
                          <h4 className="container__content-info">
                            {warehouse.name}
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
                      <h4 className="container__content-info">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</h4>
                    </div>
                    <div className="container__content-contact-name">
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">
                          CONTACT NAME
                        </h4>
                        <img
                          src={sortIcon}
                          alt="Arrow up and down"
                          className="container__sort-img"
                        ></img>
                      </div>
                      <h4 className="container__content-info">
                        {warehouse.contact.name}
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
                        {warehouse.contact.phone}
                      </h4>
                      <h4 className="container__content-info">
                        {warehouse.contact.email}
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
                        <Link to={`/warehouses/edit/${warehouse.id}`}>
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
