import { useState } from 'react';

const initialBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null]
];
export default function GameBoard() {
    const [boardState, setBoardState] = useState(initialBoard);
    function handleGameBoard(rowIndex, colIndex){
        setBoardState((prevGameBoard) => {
            const updateArray = [...prevGameBoard.map(inn => [...inn])];
            updateArray[rowIndex][colIndex] = 'X';
            return updateArray;
        });
    } 
    return (
        <ol id="game-board">
            {
                boardState.map((boardRow, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                boardRow.map((playerSymbol, colIndex) => (
                                    <li key={colIndex}>
                                        <button id="xbutton" onClick={() => {handleGameBoard(rowIndex, colIndex)}}>
                                            {playerSymbol}
                                        </button>
                                    </li>
                                )
                                )
                            }
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}