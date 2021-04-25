import React, { Component } from "react";
import delIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-blue.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import arrowImg from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./FirstLevelWrap.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default class FirstLevelWrap extends Component {
  state = {
    sortOrder: false,
    sortType: "",
    searchTerm: "",
  };

  handleOnClickSort = (type, e) => {
    e.preventDefault();
    const order = this.state.sortType === type ? !this.state.sortOrder : false;
    this.setState({ sortOrder: order, sortType: type });
  };

  handleOnClickSearch = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.search.value });
  };

  searchList = (warehouseList) => {
    if (!this.state.searchTerm) {
      return [...warehouseList];
    }
    return warehouseList.filter((warehouseInfo) => {
      for (let i in warehouseInfo) {
        if (typeof warehouseInfo[i] === "object") {
          for (let j in warehouseInfo[i]) {
            if (
              warehouseInfo[i][j]
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            )
              return true;
          }
        } else {
          if (warehouseInfo[i].includes(this.state.searchTerm)) return true;
        }
      }
      return false;
    });
  };

  sortList = (warehouseList) => {
    let sortedList = [];
    switch (this.state.sortType) {
      case "warehouseName":
        sortedList = [...warehouseList].sort((warehouse1, warehouse2) => {
          return warehouse1.name.localeCompare(warehouse2.name);
        });
        break;
      case "address":
        sortedList = [...warehouseList].sort((warehouse1, warehouse2) => {
          const str1 = `${warehouse1.address}, ${warehouse1.city}, ${warehouse1.country}`;
          const str2 = `${warehouse2.address}, ${warehouse2.city}, ${warehouse2.country}`;
          return str1.localeCompare(str2);
        });
        break;
      case "contactName":
        sortedList = [...warehouseList].sort((warehouse1, warehouse2) => {
          return warehouse1.contact.name.localeCompare(warehouse2.contact.name);
        });
        break;
      case "contactInfo":
        sortedList = [...warehouseList].sort((warehouse1, warehouse2) => {
          const str1 = `${warehouse1.contact.phone}, ${warehouse1.contact.email}`;
          const str2 = `${warehouse2.contact.phone}, ${warehouse2.contact.email}`;
          return str1.localeCompare(str2);
        });
        break;
      default:
        sortedList = [...warehouseList];
        break;
    }

    return this.state.sortOrder ? sortedList.reverse() : sortedList;
  };

  render() {
    const warehouseData = this.sortList(
      this.searchList(this.props.warehouseData)
    );
    const togglePopUp = this.props.togglePopUp;
    return (
      <div className="outer-container">
        <div className="container">
          {/* Header Bar */}
          <div className="container__header-container">
            <div className="container__header-content">
              {/* Header */}
              <h1 className="container__header">Warehouses</h1>
              <form
                className="container__header-form"
                onSubmit={this.handleOnClickSearch}
              >
                {/* Search Bar */}
                <div className="container__header-search-bar">
                  <input
                    className="container__header-search-bar-input"
                    placeholder="Search..."
                    name="search"
                  ></input>
                  <input
                    src={searchIcon}
                    alt="Search Icon"
                    className="container__search-icon pointer"
                    type="image"
                    name="submit"
                  />
                </div>
                <Link to="/warehouses/add">
                  {/* <button className="container__header-btn" type="submit">
                    + Add New Warehouse
                  </button> */}
                  <Button
                    width={"100%"}
                    type={"submit"}
                    className={"container__header-btn"}
                    children={"+ Add New Warehouse"}
                  />
                </Link>
              </form>
            </div>
          </div>
          {/* The grey background title bar for the tablet and desktop view */}
          <div className="container__content-title-bar">
            {/* Warehouse Label */}
            <div className="container__content-label-container">
              <h4 className="container__content-label">WAREHOUSE</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img pointer"
                onClick={(e) => {
                  this.handleOnClickSort("warehouseName", e);
                }}
              ></img>
            </div>
            {/* Address Label */}
            <div className="container__content-label-container">
              <h4 className="container__content-label">ADDRESS</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img pointer"
                onClick={(e) => {
                  this.handleOnClickSort("address", e);
                }}
              ></img>
            </div>
            {/* Contact Label */}
            <div className="container__content-label-container">
              <h4 className="container__content-label">CONTACT NAME</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img pointer"
                onClick={(e) => {
                  this.handleOnClickSort("contactName", e);
                }}
              ></img>
            </div>
            {/* Contact Information Label */}
            <div className="container__content-label-container">
              <h4 className="container__content-label">CONTACT INFORMATION</h4>
              <img
                src={sortIcon}
                alt="Arrow up and down"
                className="container__sort-img pointer"
                onClick={(e) => {
                  this.handleOnClickSort("contactInfo", e);
                }}
              ></img>
            </div>
            {/* Action button Label */}
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
                    {/* Warehouse Location Container */}
                    <div className="container__content-location">
                      {/* Label */}
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">WAREHOUSE</h4>
                      </div>
                      {/* Warehouse Location */}
                      <div className="container__content-info-container">
                        <Link to={`/warehouses/${warehouse.id}`}>
                          <h4 className="container__content-info">
                            {warehouse.name}
                          </h4>
                          <img src={arrowImg} alt="arrow to the right"></img>
                        </Link>
                      </div>
                    </div>
                    {/* Warehouse Address Container */}
                    <div className="container__content-address">
                      {/* Label */}
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">ADDRESS</h4>
                      </div>
                      {/* Warehouse Address */}
                      <h4 className="container__content-info">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</h4>
                    </div>
                    {/* Warehouse Contact Name Container */}
                    <div className="container__content-contact-name">
                      {/* Label */}
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">
                          CONTACT NAME
                        </h4>
                      </div>
                      {/* Contact Name */}
                      <h4 className="container__content-info">
                        {warehouse.contact.name}
                      </h4>
                    </div>
                    {/* Warehouse Contact Info Container */}
                    <div className="container__content-contacts">
                      {/* Label */}
                      <div className="container__content-label-container">
                        <h4 className="container__content-label">
                          CONTACT INFORMATION
                        </h4>
                      </div>
                      {/* Contact Information */}
                      <h4 className="container__content-info">
                        {warehouse.contact.phone}
                      </h4>
                      <h4 className="container__content-info">
                        {warehouse.contact.email}
                      </h4>
                    </div>
                    {/* Button Container */}
                    <div className="container__btns-container">
                      <div className="container__content-label-container">
                        {/* Label */}
                        <h4 className="container__content-label">ACTION</h4>
                      </div>
                      {/* Delete Button and Edit Button */}
                      <div className="container__btns">
                        <img
                          className="container__del-btn"
                          id={warehouse.id}
                          src={delIcon}
                          alt="trash bin"
                          onClick={() => {
                            togglePopUp(warehouse.id, warehouse.name);
                          }}
                        ></img>
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
