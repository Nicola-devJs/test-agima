import { FC, TextareaHTMLAttributes } from "react";
import "./style.css";
interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const Textarea: FC<IProps> = ({ label, name, ...props }) => {
  return (
    <div className={`textarea__container ${props.disabled ? "disabled" : ""}`}>
      <textarea rows={4} id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
