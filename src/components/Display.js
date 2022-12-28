import React from "react";
import './Display.css';

const Display =(props)=>{

    return(
        <div>
            <span className="displayCount">{props.display}</span>
            <span className="display">{props.result}</span>
        </div>
        
    )
}

export default Display;