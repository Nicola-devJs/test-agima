import "./style.css";
import { Input } from "../../UI/input/Input";
import { Textarea } from "../../UI/textarea/Textarea";
import { Button } from "../../UI/button/Button";
import { RadioButton } from "../../UI/radio/RadioButton";
import { Upload } from "../../UI/upload/Upload";
import { FC, useState } from "react";

interface IForm {
  name: string;
  company: string;
  phone: number;
  message: string;
  fileMessage: File;
  agree: string;
}

export interface IFormData extends Omit<IForm, "fileMessage" | "message"> {
  message: string | File;
}

interface IProps {
  callbackHandler: (data: IFormData) => void;
}

export const Form: FC<IProps> = ({ callbackHandler }) => {
  const [formState, setFormState] = useState<IForm>({} as IForm);
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { message, fileMessage, ...formValues } = formState;

    callbackHandler({ ...formValues, message: message || fileMessage });
  };

  const changeFormItemHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setFormState((formState) => ({ ...formState, [event.target.name]: event.target.value }));
  };

  return (
    <div className="form__container">
      <h1 className="form__title">Анкета для новых клиентов AGIMA</h1>
      <form className="form" action="#" onSubmit={submitHandler}>
        <Input label="Ваше имя" name="name" onChange={changeFormItemHandler} required />
        <Input label="Название компании" name="company" onChange={changeFormItemHandler} required />
        <Input label="Телефон" name="phone" pattern="[0-9]" type="number" onChange={changeFormItemHandler} required />
        <Textarea
          label="Напишите текст обращения"
          name="message"
          disabled={formState?.fileMessage instanceof File}
          onChange={changeFormItemHandler}
          required
        />
        <Upload
          label="или прикрепите файл"
          acceptList={["doc", "docx", "pdf"]}
          name="fileMessage"
          disabled={typeof formState?.message === "string" && formState?.message !== ""}
          onChangeUpload={changeFormItemHandler}
          required
        />

        <div className="form__footer">
          <RadioButton
            name="agree"
            id="personal-data"
            label={
              <>
                согласен на обработку моих <br /> <a href="#"> персональных данных</a>
              </>
            }
            onChange={changeFormItemHandler}
            required
          />
          <Button type="submit">Отправить</Button>
        </div>
      </form>
    </div>
  );
};
