import "./InventoryListHeader.scss";
import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function InventoryListHeader({ handleOnClickSearch }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnClickSearch(e.target.search.value);
  };

  return (
    <div className="inventory__container">
      <h2 className="inventory__header">Inventory</h2>
      <form className="search__div" onSubmit={handleOnSubmit}>
        <input
          className="search__bar"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <input type="image" src={searchIcon} name="submit" alt="search icon" />
      </form>
      <Link className="inventory-header__link" to="/inventories/add">
        <Button
          type={"submit"}
          className="header__button"
          children={"+ Add New Item"}
          onClick={() => {}}
        ></Button>
      </Link>
    </div>
  );
}

export default InventoryListHeader;
