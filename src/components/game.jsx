import React, { useState } from "react";
import Board from "./board.jsx";
import Title from "./title.jsx";
import History from "./history.jsx";
import "./game.css";

let win = null;
let val = 0;
let player = new Array(9).fill(null);
let move = new Array(9).fill(null);
function calculateWiner(board) {    
    const winningPosition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2,4, 6]
    ];
    for (let i = 0; i < winningPosition.length; i++) {
        const [a, b, c] = winningPosition[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            win = board[a];
            return true;
        }
    }
    return null;
}
const Game = () => {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [position, setPosition] = useState(new Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWiner(board);
    let nextTurn = xIsNext ? "X":"O";
    const handleSquareChange = (index) => {
        const copiedBoard = [...board];
        if (copiedBoard[index] || winner){ return; };
        let copiedPosition = [...position];
        copiedPosition[val] = index;
        setPosition(history(copiedPosition));
        player[val] = xIsNext ? "X":"O";
        move[val] = val + 1;
        val ++;
        copiedBoard[index] = xIsNext ? "X":"O";
        setXIsNext(!xIsNext);
        setBoard(copiedBoard);
        console.log(copiedPosition);
    };
    const newGame = ( ) => {
        setBoard(new Array(9).fill(null));
        setXIsNext(true);
        setPosition(new Array(9).fill(null));
        win = null;
        val = 0;
        player = new Array(9).fill(null);
        move = new Array(9).fill(null);
    }
    const history = (arrayPosition) => {
        for (let i = 0; i < arrayPosition.length; i++) {
            if (arrayPosition[i] == null) {
                arrayPosition[i] = null;
            }else{
                switch (arrayPosition[i]) {
                    case 0:
                        arrayPosition[i]= "y1 - x1";
                    break;
                    case 1:
                        arrayPosition[i]= "y1 - x2";
                    break;
                    case 2:
                        arrayPosition[i]= "y1 - x3";
                    break;
                    case 3:
                        arrayPosition[i]= "y2 - x1";
                    break;
                    case 4:
                        arrayPosition[i]= "y2 - x2";
                    break;
                    case 5:
                        arrayPosition[i]= "y2 - x3";
                    break;
                    case 6:
                        arrayPosition[i]= "y3 - x1";
                    break;
                    case 7:
                        arrayPosition[i]= "y3 - x2";
                    break;
                    case 8:
                        arrayPosition[i]= "y3 - x3";
                    break;
                }
            }
        }  
        return arrayPosition;
    }
    const pushPosition = (Position) => {
        let numer = null;
        switch (Position) {
            case "y1 - x1":
                document.getElementById("0").focus();
            break;
            case "y1 - x2":
                document.getElementById("1").focus();
            break;
            case "y1 - x3":
                document.getElementById("2").focus();
            break;
            case "y2 - x1":
                document.getElementById("3").focus();
            break;
            case "y2 - x2":
                document.getElementById("4").focus();
            break;
            case "y2 - x3":
                document.getElementById("5").focus();
            break;
            case "y3 - x1":
                document.getElementById("6").focus();
            break;
            case "y3 - x2":
                document.getElementById("7").focus();
            break;
            case "y3 - x3":
                document.getElementById("8").focus();
            break;
        }
        return numer;
    }
    return (
        <div className="contentMain">
            <div className="contentGame">
                <Title title={nextTurn} winer={win}/>
                <Board squares={board} handleClick={handleSquareChange}/>
                <div className="contentBtn">
                    <button className="btnNewGame" onClick={newGame}> New Game </button>
                </div>
            </div>
            <div className="contentHistory">
                <h2> History of moves </h2>
                <History position={position} player={player} move={move} selectPosition={pushPosition}/>
            </div>
        </div>
    );
}
export default Game;