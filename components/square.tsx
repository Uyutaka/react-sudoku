import React, { useContext } from "react";
import { themeContext } from "../contexts/Sudoku";

const validateInput = (val: string) => {
  const validInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return validInput.includes(val);
};

type SquareProps = {
  number?: number;
  answer: number;
  cName: string;
};

export const Square = (props: SquareProps) => {
  const ctx = useContext(themeContext);
  let style = {};
  if (props.number !== 0) {
    style = { backgroundColor: "rgba(255,0,0,0.3)" };
  }

  return (
    <input
      type={"text"}
      style={style}
      className={`square ${props.cName}`}
      maxLength={1}
      onInput={(e) => {
        const val = e.currentTarget.value;
        if (validateInput(val)) {
          if (val === props.answer?.toString()) {
            const num = ctx.remainingQuestion;
            ctx.setRemainingQuestion(num - 1);
            e.currentTarget.disabled = true;
            e.currentTarget.style.backgroundColor = "green";
            e.currentTarget.style.color = "white";
          } else {
            alert("間違っています");
            e.currentTarget.value = "";
          }
        } else {
          alert("1-9の半角数字を入力してください");
          e.currentTarget.value = "";
        }
      }}
      defaultValue={props.number === 0 ? undefined : props.number}
      disabled={props.number !== 0}
    ></input>
  );
};
