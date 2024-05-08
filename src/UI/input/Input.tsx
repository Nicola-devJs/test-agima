import React, { FC, InputHTMLAttributes } from "react";
import "./style.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input: FC<IProps> = ({ label, name, ...props }) => {
  return (
    <div className="input__container">
      <input type="text" id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
