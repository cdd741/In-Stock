import React from "react";
import { ReactComponent as Close } from "../../assets/icons/close-24px.svg";
import Button from "../Button/Button";
import "./DeleteModal.scss";

function DeleteWarehouse(props) {
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <Close className="modal__close" /* onClick={props.close()} */ />
          <h2 className="modal__title">
            Delete {props.deletingItem}
            {props.isItInventory ? " inventory item" : " warehouse"}?
          </h2>
          <p className="modal__text">
            Please confirm that you'd like to delete the {props.deletingItem + " "} 
             from the list of {props.isItInventory ? " inventory" : "warehouse"}. You
            won't be able to undo this action.
          </p>
          <div className="modal__buttons">
            <Button
              className="modal__buttons__cancel"
              type="cancel"
              children="Cancel"
              onClick={props.togglePopUp}
            />
            <Button
              className="modal__buttons__delete"
              type="delete"
              children="Delete"
              onClick={() => {
                props.onClickDel(props.inventoryId);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteWarehouse;
