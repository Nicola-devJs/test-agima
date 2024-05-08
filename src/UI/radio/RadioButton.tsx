import React, { InputHTMLAttributes, useRef } from "react";
import "./style.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  name: string;
  id?: string;
}

export const RadioButton: React.FC<IProps> = ({ label, name, id, ...props }) => {
  const inputRadioRef = useRef<HTMLInputElement>(null);

  const inputRadioChangeHandler: React.MouseEventHandler = () => {
    inputRadioRef.current?.click();
  };

  return (
    <div className="radio-button__container">
      <input type="radio" name={name} id={id} ref={inputRadioRef} {...props} />
      <div className="radio-button__custom" onClick={inputRadioChangeHandler} />
      <label htmlFor={id} onClick={id ? inputRadioChangeHandler : () => {}}>
        {label}
      </label>
    </div>
  );
};
