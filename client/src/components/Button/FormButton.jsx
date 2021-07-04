import React from "react";
import './Button.scss';

function FormButton({children, buttonClass, ...props}) {
  return (
    <div className="form-group">
      <button className={buttonClass? `button ${buttonClass}`:"button"} {...props}>{children}</button>
    </div>
  );
}

export default FormButton;
