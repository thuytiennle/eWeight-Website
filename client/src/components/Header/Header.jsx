import React from "react";
import "./Header.scss";

function Header({children, headerClass, ...props}) {
  return (
    <div className="form-header">
      <h1 className={headerClass? `header ${headerClass}`:"header"} {...props}>{children}</h1>
    </div>
  );
}

export default Header;
