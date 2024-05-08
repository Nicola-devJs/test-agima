import React, { ButtonHTMLAttributes, FC } from "react";
import "./style.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
