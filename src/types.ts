export type SudokuResponse = {
    readonly question: Board,
    readonly answer: Board,
    readonly remainingQuestion: number,
}

export type Element = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Line = [Element, Element, Element, Element, Element, Element, Element, Element, Element];
export type Board = [Line, Line, Line, Line, Line, Line, Line, Line, Line,];

export const DEFAULT_LINE: Line = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export const DEFAULT_BOARD: Board = [
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE,
    DEFAULT_LINE
];
