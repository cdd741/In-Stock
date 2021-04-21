import React from "react";
import "./Button.scss";

// How to use it?
// <Button>text</Button>
// props:
// onClick => please pass a onClick function for event handling
// width => give an *STRING* of any style of width
// type => cancel, delete, nav, nav-selected, or leave it empty for default styling
// className => you can set customized styling class and style it by your self
// children => don't worry about that, it's the content inside the Button tags
function Button({ onClick, width, type, className, children }) {
  const buttonClass = type ? `button--${type}` : null;

  const handleOnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      style={{ width: `${width}` }}
      className={`button ${buttonClass} ${className}`}
      onClick={handleOnClick}
    >
      <h3 className={`button__text ${className}__text`}>{children}</h3>
    </button>
  );
}

export default Button;
