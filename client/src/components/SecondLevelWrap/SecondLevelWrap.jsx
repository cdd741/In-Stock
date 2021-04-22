import React from "react";
import "./SecondLevelWrap.scss";
import backButton from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function SecondLevelWrap({ title, edit, children }) {
  const editButton = () => {
    return (
      <button className="edit-button">
        <div className="edit-button__content">
          <img
            className="edit-button__icon"
            src={editIcon}
            alt="edit button icon"
          />
          <h3 className="edit-button__text">Edit</h3>
        </div>
      </button>
    );
  };

  const header = (title) => {
    return (
      <div className="secondLevelWrap__header-container">
        <div className="secondLevelWrap__header">
          <img
            className="secondLevelWrap__back-button"
            src={backButton}
            alt="back button"
          />
          <h1 className="secondLevelWrap__title">{title}</h1>
        </div>
        {true && editButton()}
      </div>
    );
  };

  return (
    <div className="secondLevelWrap">
      {header(title, edit)}
      {children}
      sup
    </div>
  );
}

export default SecondLevelWrap;
