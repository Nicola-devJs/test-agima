import "./App.css";
import { Form, IFormData } from "./components/form/Form";
import { Instruction } from "./components/instruction/Instruction";

function App() {
  const submitHandler = (data: IFormData) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <div className="wrapper">
      <div className="contianer">
        <div className="body">
          <Instruction />
          <Form callbackHandler={submitHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
