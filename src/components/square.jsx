import React from "react";
import "./square.css";

const Square = ({value, handleClickQuare, index}) => {
    return <button className="square" id={index} onClick={() => handleClickQuare(index)}> {value} </button>;
}

export default Square;