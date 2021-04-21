import React from "react";
import "./Input.scss";
import errIcon from "../../assets/Icons/error-24px.svg";

function Input(onChange, textLabel, children) {
  const handleOnChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const label = textLabel;
  const value = children;
  const errMessage = (
    <div>
      <img src={errIcon} alt="error icon" />
      <h3>This field is required</h3>
    </div>
  );
  return (
    <div className="input">
      <label htmlFor={label}></label>
      <textarea
        name={label}
        id={label}
        placeholder={label}
        value={value}
        onChange={handleOnChange}
        required={errMessage}
      ></textarea>
    </div>
  );
}

export default Input;
