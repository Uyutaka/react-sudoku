import { createContext, useCallback, useState } from 'react';

// set context type
type SudokuContext = {
  remainingQuestion: number;
  setRemainingQuestion: (isDark: number) => void;
  time: number;
  setTime: (time: number) => void;
};

// context default value
const defaultContext: SudokuContext = {
  remainingQuestion: 9,
  setRemainingQuestion: () => { },
  time: 0,
  setTime: () => { },
};

// context object
export const themeContext = createContext<SudokuContext>(defaultContext);

// custom Hook
export const useSudoku = (): SudokuContext => {
  const [remainingQuestion, setRemainingQuestion] = useState(defaultContext.remainingQuestion);
  const setQuestion = useCallback((current: number): void => {
    setRemainingQuestion(current);
  }, []);
  const [time, setT] = useState(defaultContext.time);
  const setTime = useCallback((time: number): void => {
    setT(time);
  }, []);
  return {
    remainingQuestion: remainingQuestion,
    setRemainingQuestion: setQuestion,
    time:time,
    setTime: setTime,
  };
};