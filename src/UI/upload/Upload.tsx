import React, { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react";
import "./style.css";
import removeSelectFile from "../../assets/remove.svg";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  acceptList?: string[];
  label: React.ReactNode;
  onChangeUpload: React.ChangeEventHandler<HTMLInputElement>;
}

export const Upload: React.FC<IProps> = ({ acceptList = [], label, onChangeUpload, ...props }) => {
  const [event, setEvent] = useState<ChangeEvent<HTMLInputElement> | null>();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const acceptLimitTypeFiles = acceptList?.map((type) => "." + type).join(", ");

  const inputFileOpenHandler: React.MouseEventHandler = () => {
    inputFileRef.current?.click();
  };

  const inputFileChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEvent(e);
    onChangeUpload({
      ...e,
      target: { ...e.target, value: e.target.files?.[0], name: props.name },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  };

  const clearUploadHandler = () => {
    onChangeUpload({
      ...event,
      target: { ...event?.target, value: null, name: props.name },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    setEvent(null);
  };

  return (
    <div className="upload__container">
      <input
        type="file"
        ref={inputFileRef}
        accept={acceptLimitTypeFiles}
        onChange={inputFileChangeHandler}
        {...props}
      />
      <label onClick={inputFileOpenHandler} className={props.disabled ? "disabled" : ""}>
        {label} {event?.target.files?.[0]?.name}
      </label>
      {event?.target.files?.[0] && (
        <span onClick={clearUploadHandler}>
          <img src={removeSelectFile} />
        </span>
      )}
    </div>
  );
};
