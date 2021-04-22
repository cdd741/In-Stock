import React, { Component } from "react";

import SecondLevelWrap from "../components/SecondLevelWrap/SecondLevelWrap";
import WarehouseForm from "../components/WarehouseForm/WarehouseForm";

export default class EditWarehouse extends Component {
  render() {
    const handleBackClick = () => {};

    const handleOnCancel = () => {};

    const handleOnSubmit = (state) => {};

    return (
      <SecondLevelWrap
        title="Edit Warehouse"
        onClickBack={handleBackClick}
        edit={true}
      >
        <WarehouseForm onSubmit={handleOnSubmit} onCancel={handleOnCancel} />
      </SecondLevelWrap>
    );
  }
}
