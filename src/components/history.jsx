import React from "react";
import "./history.css";

const Title = ({position, move, player, selectPosition}) => {           
    return ( 
        <table>
            <tr>
                <th>Move</th>
                <th>Player</th>
                <th>Position</th>
            </tr>
            <tr>
                <td>{move[0]}</td>
                <td>{player[0]} </td>
                <td className="itemList" onClick={() => selectPosition(position[0])}>{position[0]}</td>
            </tr>
            <tr>
                <td>{move[1]}</td>
                <td>{player[1]} </td>
                <td className="itemList" onClick={() => selectPosition(position[1])}>{position[1]}</td>
            </tr>
            <tr>
                <td>{move[2]}</td>
                <td>{player[2]} </td>
                <td className="itemList" onClick={() => selectPosition(position[2])}>{position[2]}</td>
            </tr>
            <tr>
                <td>{move[3]}</td>
                <td>{player[3]} </td>
                <td className="itemList" onClick={() => selectPosition(position[3])}>{position[3]}</td>
            </tr>
            <tr>
                <td>{move[4]}</td>
                <td>{player[4]} </td>
                <td className="itemList" onClick={() => selectPosition(position[4])}>{position[4]}</td>
            </tr>
            <tr>
                <td>{move[5]}</td>
                <td>{player[5]} </td>
                <td className="itemList" onClick={() => selectPosition(position[5])}>{position[5]}</td>
            </tr>
            <tr>
                <td>{move[6]}</td>
                <td>{player[6]} </td>
                <td className="itemList" onClick={() => selectPosition(position[6])}>{position[6]}</td>
            </tr>
            <tr>
                <td>{move[7]}</td>
                <td>{player[7]} </td>
                <td className="itemList" onClick={() => selectPosition(position[7])}>{position[7]}</td>
            </tr>
            <tr>
                <td>{move[8]}</td>
                <td>{player[8]} </td>
                <td className="itemList" onClick={() => selectPosition(position[8])}>{position[8]}</td>
            </tr>
        </table>
    );
}

export default Title;