import React from "react";
import { ReactComponent as BackArrow } from "../../assets/icons/arrow_back-24px.svg";
import { ReactComponent as Error } from "../../assets/icons/error-24px.svg";
import Button from "../Button/Button";
import SecondLevelWrap from "../SecondLevelWrap/SecondLevelWrap";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/inStockAPIs";

import "./InventoryForm.scss";
import axios from "axios";
import Footer from "../../common/Footer/Footer";

class InventoryForm extends React.Component {
  state = {
    formType: this.props.formType,
    id: this.props.match.params.id,
    itemName: null,
    itemDescription: null,
    itemCategory: null,
    itemStatus: null,
    itemWarehouseName: null,
    itemWarehouseID: null,
    itemQuantity: null,
    formComplete: null,
  };

  checkFormCompletion = () => {
    if (
      !this.state.itemName ||
      !this.state.itemDescription ||
      !this.state.itemCategory ||
      !this.state.itemStatus ||
      !this.state.itemWarehouseID ||
      !this.state.itemWarehouseName ||
      !(this.state.itemQuantity >= 0)
    ) {
      this.setState({
        formComplete: false,
      });
      return false;
    } else {
      this.setState({
        formComplete: true,
      });
      return true;
    }
  };

  componentDidMount = () => {
    axios
      .get(API_URL("inventories", this.state.id))
      .then((res) => {
        let inventoryItem = res.data;
        if (inventoryItem !== undefined) {
          this.setState({
            itemName: inventoryItem.itemName,
            itemDescription: inventoryItem.description,
            itemCategory: inventoryItem.category,
            itemStatus: inventoryItem.status,
            itemQuantity: inventoryItem.quantity,
            itemWarehouseName: inventoryItem.warehouseName,
            itemWarehouseID: inventoryItem.warehouseID,
          });
          if (this.state.formType === "editItem") {
            let itemName = document.getElementById("item-name");
            let itemDescription = document.getElementById("item-description");
            let category = document.getElementById("categories");
            let inStock = document.getElementById("in-stock");
            let outOfStock = document.getElementById("out-of-stock");
            let quantity = document.getElementById('quantity')
            let warehouse = document.getElementById("warehouses");

            itemName.value = inventoryItem.itemName;
            itemDescription.value = inventoryItem.description;
            category.value = inventoryItem.category;
            quantity.value = inventoryItem.quantity;
            warehouse.value =
              inventoryItem.warehouseName + "|" + inventoryItem.warehouseID;

            if (inventoryItem.status === "In Stock") {
              inStock.checked = true;
            } else {
              outOfStock.checked = true;
            }
            this.checkFormCompletion();
          }
        }
      })
      .catch((err) => {
      });
  };

  handleOnChange = (e) => {
    if (e.target.name !== "itemWarehouse" || e.target.name !== "itemStatus") {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "itemWarehouse") {
      //the warehouse details are both derived from the same string which is the value of the input
      let warehouseDetails = e.target.value.split("|");
      this.setState({
        itemWarehouseName: warehouseDetails[0],
        itemWarehouseID: warehouseDetails[1],
      });
    } else if (e.target.name !== "itemStatus") {
      this.setState({
        itemStatus: e.target.value,
      });
      e.target.value === "Out of Stock" &&
        this.setState({
          itemQuantity: 0,
        });
    }
  };

  checkFieldCompletion = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("incomplete");
    } else if (e.target.value !== "") {
      e.target.classList.remove("incomplete");
    }
  };

  generateRandomId = () => {
    let part1 = Math.random().toString(20).substr(2, 8);
    let part2 = Math.random().toString(20).substr(2, 4);
    let part3 = Math.random().toString(20).substr(2, 4);
    let part4 = Math.random().toString(20).substr(2, 4);
    let part5 = Math.random().toString(20).substr(2, 12);

    return part1 + "-" + part2 + "-" + part3 + "-" + part4 + "-" + part5;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.checkFormCompletion();
    if (this.state.formComplete) {
      if (this.state.formType === "addItem") {
        axios.post(API_URL("inventories"), {
          id: this.generateRandomId(),
          warehouseID: this.state.itemWarehouseID,
          warehouseName: this.state.itemWarehouseName,
          itemName: this.state.itemName,
          description: this.state.itemDescription,
          category: this.state.itemCategory,
          status: this.state.itemStatus,
          quantity: Number(this.state.itemQuantity),
        });
      } else if (this.state.formType === "editItem") {
        axios.put(API_URL("inventories", this.state.id), {
          id: this.state.id,
          warehouseID: this.state.itemWarehouseID,
          warehouseName: this.state.itemWarehouseName,
          itemName: this.state.itemName,
          description: this.state.itemDescription,
          category: this.state.itemCategory,
          status: this.state.itemStatus,
          quantity: this.state.itemQuantity,
        });
      }
      alert("Submission accepted, going back to previous page.😊");
      this.props.history.push("/inventories");
    }
  };

  render() {
    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title={this.state.formType === 'addItem' ? "Add New Item" : "Edit Item"}
          onClickBack={(e) => {
            e.preventDefault();
            // setting url to the previous page
            this.props.history.push('/inventories');
          }}
        >
          <form className="inventory-form__form">
            <div className="inventory-form__item-details">
              <h3 className="inventory-form__subtitle">Item Details</h3>
              <label htmlFor="itemName" className="inventory-form__label">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                id="item-name"
                className={`inventory-form__input`}
                onChange={(e) => this.handleOnChange(e)}
                onBlur={(e) => {
                  this.checkFieldCompletion(e);
                }}
              />
              {(this.state.formComplete === false ||
                this.state.formComplete === null &&
                this.state.itemName === null) ||
                this.state.itemName === "" ? (
                <div className="inventory-form__field-req">
                  <p><Error className="inventory-form__error-icon"/>This field is required</p>
                </div>
              ) : null}
              <label
                htmlFor="itemDescription"
                className="inventory-form__label"
              >
                Description
              </label>
              <textarea
                type="text"
                name="itemDescription"
                placeholder="Please enter a brief item description..."
                className="inventory-form__text-area"
                id="item-description"
                onChange={(e) => this.handleOnChange(e)}
                onBlur={(e) => {
                  this.checkFieldCompletion(e);
                }}
              />
              {(this.state.formComplete === false ||
                this.state.formComplete === null &&
                this.state.itemDescription === null) ||
                this.state.itemDescription === "" ? (
                <div className="inventory-form__field-req">
                  <p><Error className="inventory-form__error-icon"/> This field is required</p>
                </div>
              ) : null}
              <label htmlFor="categories" className="inventory-form__label">
                Category
              </label>
              <select
                name="itemCategory"
                id="categories"
                className="inventory-form__select"
                id="categories"
                onChange={(e) => this.handleOnChange(e)}
                onBlur={(e) => {
                  this.checkFieldCompletion(e);
                }}
              >
                <option
                  value="Electronics"
                  className="inventory-form__option"
                >
                  Electronics
                </option>
                <option value="Gear" className="inventory-form__option">
                  Gear
                </option>
                <option value="Apparel" className="inventory-form__option">
                  Apparel
                </option>
                <option
                  value="Accessories"
                  className="inventory-form__option"
                >
                  Accessories
                </option>
                <option value="Health" className="inventory-form__option">
                  Health
                </option>
              </select>
              {(this.state.formComplete === false ||
                this.state.formComplete === null &&
                this.state.itemCategory === null) ||
                this.state.itemCategory === "" ? (
                <div className="inventory-form__field-req">
                  <p><Error className="inventory-form__error-icon"/> This field is required</p>
                </div>
              ) : null}
            </div>
            <div className="inventory-form__item-availability">
              <h3 className="inventory-form__subtitle">Item Availability</h3>
              <label htmlFor="itemStatus" className="inventory-form__label">
                Status
              </label>
              <div className="inventory-form__radios">
                <input
                  type="radio"
                  value="In Stock"
                  name="itemStatus"
                  id="in-stock"
                  className="inventory-form__radio"
                  onChange={(e) => this.handleOnChange(e)}
                />
                <label htmlFor="in-stock" className="inventory-form__label">
                  In Stock
                </label>
                <input
                  type="radio"
                  value="Out Of Stock"
                  name="itemStatus"
                  id="out-of-stock"
                  className="inventory-form__radio"
                  onChange={(e) => this.handleOnChange(e)}
                  onBlur={(e) => {
                    this.checkFieldCompletion(e);
                  }}
                />
                <label
                  htmlFor="out-of-stock"
                  className="inventory-form__label"
                >
                  Out of Stock
                </label>
              </div>
              {(this.state.formComplete === false ||
                this.state.formComplete === null &&
                this.state.itemStatus === null) ||
                this.state.itemStatus === "" ? (
                <div className="inventory-form__field-req">
                  <p><Error className="inventory-form__error-icon"/> This field is required</p>
                </div>
              ) : null}
              {this.state.itemStatus === "In Stock" && (
                <>
                  <label
                    htmlFor="itemQuantity"
                    className="inventory-form__label"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="itemQuantity"
                    id="quantity"
                    placeholder="0"
                    className="inventory-form__input"
                    onChange={(e) => this.handleOnChange(e)}
                    onBlur={(e) => {
                      this.checkFieldCompletion(e);
                    }}
                  />
                  {(this.state.formComplete === false ||
                    this.state.formComplete === null &&
                    this.state.itemQuantity === null) ||
                    this.state.itemQuantity === "" ? (
                    <div className="inventory-form__field-req">
                      <p><Error className="inventory-form__error-icon"/> This field is required</p>
                    </div>
                  ) : null}
                </>
              )}
              <label
                htmlFor="itemWarehouse"
                className="inventory-form__label"
              >
                Warehouse
              </label>
              <select
                name="itemWarehouse"
                id="warehouses"
                className="inventory-form__select"
                onChange={(e) => this.handleOnChange(e)}
                onBlur={(e) => {
                  this.checkFieldCompletion(e);
                }}
              >
                <option value="Manhattan|2922c286-16cd-4d43-ab98-c79f698aeab0">
                  Manhattan
                </option>
                <option value="King West|5bf7bd6c-2b16-4129-bddc-9d37ff8539e9">
                  King West
                </option>
                <option value="Granville|90ac3319-70d1-4a51-b91d-ba6c2464408c">
                  Granville
                </option>
                <option value="San Fran|bfc9bea7-66f1-44e9-879b-4d363a888eb4">
                  San Fran
                </option>
                <option value="Santa Monica|89898957-04ba-4bd0-9f5c-a7aea7447963">
                  Santa Monica
                </option>
                <option value="Seattle|ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7">
                  Seattle
                </option>
                <option value="Montreal|bb1491eb-30e6-4728-a5fa-72f89feaf622">
                  Montreal
                </option>
              </select>
              {(this.state.formComplete === false ||
                this.state.formComplete === null &&
                this.state.itemWarehouseName === null) ||
                this.state.itemWarehouseName === "" ? (
                <div className="inventory-form__field-req">
                  <p><Error className="inventory-form__error-icon"/> This field is required</p>
                </div>
              ) : null}
            </div>
            <div className="inventory-form__buttons">
              <Button
                type="cancel"
                className="inventory-form__button"
                children="Cancel"
                onClick={() => {
                  this.props.history.push("/inventories");
                }}
              />
              <Button
                type="add item"
                className="inventory-form__button"
                children={
                  this.state.formType === "addItem" ? "+ Add Item" : "Save"
                }
                onClick={(e) => {
                  this.handleSubmit(e);
                }}
              />
            </div>
          </form>
        </SecondLevelWrap>
        <Footer />
      </div>
    );
  }
}

export default InventoryForm;
