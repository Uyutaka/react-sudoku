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
  if (!props.number) {
    style = { backgroundColor: "rgba(255,0,0,0.5)" };
  }

  return (
    <input
      type={"text"}
      style={style}
      className={`square ${props.cName}`}
      maxLength={1}
      onInput={(e) => {
        const val = e.currentTarget.value;
        if (val === "") {
          console.log("BS?");
        }
        console.log("val", val);
        if (validateInput(val)) {
          console.log("answer");
          console.log(props.answer);
          if (val === props.answer?.toString()) {
            const num = ctx.remainingQuestion;
            console.log(num);
            ctx.setRemainingQuestion(num - 1);
            console.log(`ctx.dark: ${ctx.remainingQuestion}`);
            e.currentTarget.disabled = true;
            e.currentTarget.style.backgroundColor = "green";
            e.currentTarget.style.color = "white";
          } else {
            console.log("incorrect");
            alert("間違っています");
            e.currentTarget.value = "";
          }
        } else {
          alert("1-9の半角数字を入力してください");
          e.currentTarget.value = "";
        }
      }}
      defaultValue={props.number}
      disabled={props.number !== undefined}
    ></input>
  );
};
