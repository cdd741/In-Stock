import React from "react";
import { Link } from "react-router-dom";
import inStockLogo from "../../assets/logos/InStock-Logo.svg";
import "./Header.scss";
import Button from "../../components/Button/Button";

export default function Header({ toggle, isWarehouse }) {
  const warehouseButtonType = isWarehouse ? "nav-selected" : "nav";
  const inventoryButtonType = !isWarehouse ? "nav-selected" : "nav";

  return (
    <div className="header__div">
      <header className="header">
        <Link to="/" className="logo__link"
          onClick={() => {
            toggle(true);
          }}
        >
          <img className="logo__image" src={inStockLogo} alt="inStock-log" />
        </Link>
        <div className="button__container">
          <Link to="/" className="button__link-warehouses">
            <Button
              type={warehouseButtonType}
              onClick={() => {
                toggle(true);
              }}
              className="header__button"
              width="164px"
            >
              Warehouse
            </Button>
          </Link>
          <Link to="/inventories" className="button__link-inventory">
            <Button
              type={inventoryButtonType}
              onClick={() => {
                toggle(false);
              }}
              className="header__button"
              width="164px"
            >
              Inventory
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
