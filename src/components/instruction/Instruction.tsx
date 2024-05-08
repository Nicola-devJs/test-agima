import instructionMock from "../../../public/mockData/instruction.json";
import "./style.css";

export const Instruction = () => {
  return (
    <div className="instruction">
      <h2 className="instruction__title">Вспомогательная информация для обращения</h2>
      <ol>
        {instructionMock.map((manual, id) => (
          <li key={id} className="instruction__list-item">
            <h3>{manual.title}</h3>
            {manual.questions.map((question, id) => (
              <p key={id}>{question}</p>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};
