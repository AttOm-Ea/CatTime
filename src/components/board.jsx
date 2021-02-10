import React from "react";
import Square from "./square.jsx";
import "./board.css";
const Board = ({squares, handleClick}) =>{
    const handle = (i)=> {
        handleClick(i);
    }
    return (
        <div className="contentBox">
            <div className="contentY">
                <p> y1 </p>
                <p> y2 </p>
                <p> y3 </p>
            </div>
            <div className="board">
                <Square value={squares[0]} index={0} handleClickQuare={handle}/>
                <Square value={squares[1]} index={1} handleClickQuare={handle}/>
                <Square value={squares[2]} index={2} handleClickQuare={handle}/>

                <Square value={squares[3]} index={3} handleClickQuare={handle}/>
                <Square value={squares[4]} index={4} handleClickQuare={handle}/>
                <Square value={squares[5]} index={5} handleClickQuare={handle}/>

                <Square value={squares[6]} index={6} handleClickQuare={handle}/>
                <Square value={squares[7]} index={7} handleClickQuare={handle}/>
                <Square value={squares[8]} index={8} handleClickQuare={handle}/>
            </div>
            <div className="contentX">
                <p> x1 </p>
                <p> x2 </p>
                <p> x3 </p>
            </div>
        </div>
        
    )

}

export default Board;