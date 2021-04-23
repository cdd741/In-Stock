import React, { Component } from "react";

import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

export default class AddWarehouse extends Component {
  render() {
    const handleBackClick = () => {};

    const handleOnCancel = () => {};

    const handleOnSubmit = (state) => {};

    return (
      <div className="main-container-wrapper">
        <SecondLevelWrap
          title="Edit Warehouse"
          onClickBack={handleBackClick}
          edit={false}
        >
          <WarehouseForm
            type={"Add"}
            onSubmit={handleOnSubmit}
            onCancel={handleOnCancel}
          />
        </SecondLevelWrap>
      </div>
    );
  }
}
