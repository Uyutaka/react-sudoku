import { themeContext, useSudoku } from "../contexts/Sudoku";
import { Line } from "../components/line";
import { useEffect, useState } from "react";
import axios from "axios";
import { Board, DEFAULT_BOARD, SudokuResponse } from "../src/types";

enum State {
  Loading,
  Ready,
  Error,
  Done,
}

const Index = () => {
  const ctx = useSudoku();
  const [state, setState] = useState<State>(State.Loading);
  const [question, setQuestion] = useState<Board>(DEFAULT_BOARD);
  const [answer, setAnswer] = useState<Board>(DEFAULT_BOARD);

  // Execute only after page is rendered
  useEffect(() => {
    const getSudoku = async () => {
      // When local development
      // await axios.get<SudokuResponse>("http://localhost:7075/api")
      await axios.get<SudokuResponse>("/api")
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
              numbers={question[0]}
              answers={answer[0]}
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
              numbers={question[1]}
              answers={answer[1]}
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
              numbers={question[2]}
              answers={answer[2]}
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
              numbers={question[3]}
              answers={answer[3]}
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
              numbers={question[4]}
              answers={answer[4]}
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
              numbers={question[5]}
              answers={answer[5]}
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
              numbers={question[6]}
              answers={answer[6]}
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
              numbers={question[7]}
              answers={answer[7]}
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
              numbers={question[8]}
              answers={answer[8]}
            />
          </div>
        </themeContext.Provider>
      );
  }
};

export default Index;
