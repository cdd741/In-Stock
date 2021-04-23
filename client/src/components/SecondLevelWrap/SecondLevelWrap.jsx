import React from "react";
import "./SecondLevelWrap.scss";
import backButton from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function SecondLevelWrap({ title, edit, onClickBack, onClickEdit, children }) {
  const handleEditClick = (e) => {
    onClickEdit(e);
  };

  const handleBackClick = (e) => {
    onClickBack(e);
  };

  return (
    <div className="secondLevelWrap">
      <div className="secondLevelWrap__header-container">
        <div className="secondLevelWrap__header">
          <img
            className="secondLevelWrap__back-button"
            src={backButton}
            alt="back button"
            onClick={handleBackClick}
          />
          {typeof title === "object" ? (
            <h1 className="secondLevelWrap__title">{title.name}</h1>
          ) : (
            <h1 className="secondLevelWrap__title">{title}</h1>
          )}
        </div>
        {edit && (
          <button className="edit-button">
            <div className="edit-button__content" onClick={handleEditClick}>
              <img
                className="edit-button__icon"
                src={editIcon}
                alt="edit button icon"
              />
              <h3 className="edit-button__text">Edit</h3>
            </div>
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default SecondLevelWrap;
