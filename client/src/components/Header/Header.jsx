import React from "react";
import "./Header.scss";

function Header(props) {
    var {children, headerClass, ...props} = props;
  return (
    <div className="form-header">
      <h1 className={headerClass? `header ${headerClass}`:"header"} {...props}>{children}</h1>
    </div>
  );
}

export default Header;
