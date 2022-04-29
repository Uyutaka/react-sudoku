import { themeContext, useSudoku } from "../contexts/Sudoku";
import { Line } from "../components/line";
import { useEffect, useState } from "react";
import axios from "axios";
import { SudokuResponse } from "./api/sudoku";
import { line } from "../components/line";

enum State {
  Loading,
  Ready,
  Error,
  Done,
}

export type board = [
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
  number, number, number, number, number, number, number, number, number,
];

const defaultBoard: board = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const Index = () => {
  const ctx = useSudoku();
  const [state, setState] = useState<State>(State.Loading);
  const [question, setQuestion] = useState<board>(defaultBoard);
  const [answer, setAnswer] = useState<board>(defaultBoard);

  // Execute only after page is rendered
  useEffect(() => {
    const getSudoku = async () => {
      await axios.get<SudokuResponse>("/api/sudoku")
        .then(response => {
          ctx.setRemainingQuestion(response.data.remainingQuestion);
          setQuestion(response.data.question);
          setAnswer(response.data.answer);
          setState(State.Ready);
        })
        .catch(error => {
          console.log(error);
          alert("API Error");
          setState(State.Error);
        });
    };
    getSudoku();
  }, []);


  // Every time user inputs
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `残り： ${ctx.remainingQuestion} 問`;
    if (ctx.remainingQuestion === 0) {
      setState(State.Done);
    } else {
      const id = setInterval(() => {
        ctx.setTime(ctx.time + 1);
      }, 1000);
      return () => clearInterval(id);
    }

  });

  switch (state) {
    case State.Loading:
      return (<div>Loading...</div>);
    case State.Error:
      return (<div>Error Happens...</div>)
    case State.Done:
      return (<div>終了 経過時間:{ctx.time}秒</div>)
    case State.Ready:
      return (
        <themeContext.Provider value={ctx}>
          <br />
          <div className="container">
            <div className="row justify-content-md-center">
              <div
                className="col-md-auto"
                style={{ color: "red", backgroundColor: "green" }}
              >
                残り:{ctx.remainingQuestion}問
              </div>
              <div
                className="col-md-auto"
                style={{ color: "red", backgroundColor: "green" }}
              >
                経過時間:{ctx.time}秒
              </div>
            </div>
            <div className="row  justify-content-md-center">
              <div className="col-md-6 offset-md-4">
                <br />
              </div>
            </div>
            <Line
              id={0}
              classNames={[
                "top-left-board-border",
                "top-board-border",
                "top-board-right-block-border",
                "top-board-left-block-border",
                "top-board-border",
                "top-board-right-block-border",
                "top-board-left-block-border",
                "top-board-border",
                "top-right-board-border",
              ]}
              numbers={question.slice(0, 9) as line}
              answers={answer.slice(0, 9) as line}
            />

            <Line
              id={1}
              classNames={[
                "left-board-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-board-border",
              ]}
              numbers={question.slice(9, 18) as line}
              answers={answer.slice(9, 18) as line}
            />
            <Line
              id={2}
              classNames={[
                "left-board-bottom-block-border",
                "bottom-block-border",
                "bottom-right-block-border",
                "bottom-left-block-border",
                "bottom-block-border",
                "bottom-right-block-border",
                "bottom-left-block-border",
                "bottom-block-border",
                "right-board-bottom-block-border",
              ]}
              numbers={question.slice(18, 27) as line}
              answers={answer.slice(18, 27) as line}
            />
            <Line
              id={3}
              classNames={[
                "left-board-top-block-border",
                "top-block-border",
                "top-right-block-border",
                "top-left-block-border",
                "top-block-border",
                "top-right-block-border",
                "top-left-block-border",
                "top-block-border",
                "right-board-top-block-border",
              ]}
              numbers={question.slice(27, 36) as line}
              answers={answer.slice(27, 36) as line}
            />
            <Line
              id={4}
              classNames={[
                "left-board-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-board-border",
              ]}
              numbers={question.slice(36, 45) as line}
              answers={answer.slice(36, 45) as line}
            />
            <Line
              id={5}
              classNames={[
                "left-board-bottom-block-border",
                "bottom-block-border",
                "bottom-right-block-border",
                "bottom-left-block-border",
                "bottom-block-border",
                "bottom-right-block-border",
                "bottom-left-block-border",
                "bottom-block-border",
                "right-board-bottom-block-border",
              ]}
              numbers={question.slice(45, 54) as line}
              answers={answer.slice(45, 54) as line}
            />
            <Line
              id={6}
              classNames={[
                "left-board-top-block-border",
                "top-block-border",
                "top-right-block-border",
                "top-left-block-border",
                "top-block-border",
                "top-right-block-border",
                "top-left-block-border",
                "top-block-border",
                "right-board-top-block-border",
              ]}
              numbers={question.slice(54, 63) as line}
              answers={answer.slice(54, 63) as line}
            />
            <Line
              id={7}
              classNames={[
                "left-board-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-block-border",
                "left-block-border",
                "normal-border",
                "right-board-border",
              ]}
              numbers={question.slice(63, 72) as line}
              answers={answer.slice(63, 72) as line}
            />
            <Line
              id={8}
              classNames={[
                "bottom-left-board-border",
                "bottom-board-border",
                "bottom-board-right-block-border",
                "bottom-board-left-block-border",
                "bottom-board-border",
                "bottom-board-right-block-border",
                "bottom-board-left-block-border",
                "bottom-board-border",
                "bottom-right-board-border",
              ]}
              numbers={question.slice(72, 81) as line}
              answers={answer.slice(72, 81) as line}
            />
          </div>
        </themeContext.Provider>
      );
  }
};

export default Index;
