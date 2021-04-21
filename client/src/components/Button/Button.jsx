import React from "react";
import "./Button.scss";

function Button({ type, text, width, className }) {
  let buttonText = "";
  let showIcon = false;
  switch (type) {
    case "cancel":
      buttonText = "Cancel";
      break;
    case "delete":
      buttonText = "Delete";
      break;
    case "add":
      showIcons = true;
      buttonText = text;
      break;
    default:
      buttonText = text;
      break;
  }
  return (
    <button className={`button button--${type} ${className}`}>
      {showIcon && (
        <img className="button__image" src="" alt={`${type} button`} />
      )}
      <div className="button__text">{buttonText}</div>
    </button>
  );
}

export default Button;
