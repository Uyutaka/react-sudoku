import { Square } from "./square";

type LineProps = {
  id: number;
  classNames: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  numbers: [
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?
  ];
  answers: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
};

export const Line = (props: LineProps) => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6 offset-md-3">
        <div className="board-row">
          <Square
            answer={props.answers[0]}
            number={props.numbers[0]}
            cName={props.classNames[0]}
          />
          <Square
            answer={props.answers[1]}
            number={props.numbers[1]}
            cName={props.classNames[1]}
          />
          <Square
            answer={props.answers[2]}
            number={props.numbers[2]}
            cName={props.classNames[2]}
          />
          <Square
            answer={props.answers[3]}
            number={props.numbers[3]}
            cName={props.classNames[3]}
          />
          <Square
            answer={props.answers[4]}
            number={props.numbers[4]}
            cName={props.classNames[4]}
          />
          <Square
            answer={props.answers[5]}
            number={props.numbers[5]}
            cName={props.classNames[5]}
          />
          <Square
            answer={props.answers[6]}
            number={props.numbers[6]}
            cName={props.classNames[6]}
          />
          <Square
            answer={props.answers[7]}
            number={props.numbers[7]}
            cName={props.classNames[7]}
          />
          <Square
            answer={props.answers[8]}
            number={props.numbers[8]}
            cName={props.classNames[8]}
          />
        </div>
      </div>
    </div>
  );
};
