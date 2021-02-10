import React from "react";
import "./title.css";

const Title = ({title, winer}) => {
    if(winer){
        return(
            <div>
                <h1> CatTime </h1>
                <h2> Winer: <span className="win"> {winer} </span> </h2>
            </div>
            
        )
    }else{
        return(
            <div>
                <h1> CatTime </h1>
                <h2> Next Turn: "<span className="number"> {title} </span>"</h2>
            </div>
        )
    }

}

export default Title;


