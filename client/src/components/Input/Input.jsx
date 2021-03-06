import React from 'react';
import './Input.scss';

function Input({label, labelClass, inputClass, ...props}) {

  return (
    <div className="form-group">
      <label className={labelClass? `label ${labelClass}`:"label"} htmlFor={label}>{label}</label>
      <input className={inputClass? `input ${inputClass}`:"input"} {...props} />
    </div>
  );
}

export default Input



