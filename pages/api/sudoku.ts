// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { board } from '..'

export type SudokuResponse = {
    readonly question: board,
    readonly answer: board,
    readonly remainingQuestion: number,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<SudokuResponse>
) {
    res.status(200).json({
        question: [
            8, 5, 3, 4, 6, 0, 9, 2, 7,
            9, 6, 0, 3, 7, 8, 1, 5, 4,
            4, 1, 7, 5, 2, 9, 6, 8, 0,
            6, 9, 1, 2, 0, 3, 5, 7, 8,
            2, 4, 0, 7, 8, 6, 3, 1, 9,
            7, 3, 8, 9, 1, 5, 4, 0, 2,
            5, 0, 4, 1, 3, 2, 8, 9, 6,
            1, 2, 6, 0, 9, 4, 7, 3, 5,
            3, 8, 0, 6, 5, 7, 2, 4, 1
        ],
        answer: [
            8, 5, 3, 4, 6, 1, 9, 2, 7,
            9, 6, 2, 3, 7, 8, 1, 5, 4,
            4, 1, 7, 5, 2, 9, 6, 8, 3,
            6, 9, 1, 2, 4, 3, 5, 7, 8,
            2, 4, 5, 7, 8, 6, 3, 1, 9,
            7, 3, 8, 9, 1, 5, 4, 6, 2,
            5, 7, 4, 1, 3, 2, 8, 9, 6,
            1, 2, 6, 8, 9, 4, 7, 3, 5,
            3, 8, 9, 6, 5, 7, 2, 4, 1
        ],
        remainingQuestion: 9
    })

}
