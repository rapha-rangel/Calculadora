import React from "react";
import './Teclado.css';

const Teclado=(props)=>{
    const arr = [1,2,"+","-",3,4,"*","/",5,6,"=",".",7,8,9,0,"AC","BS"]
    return(
        <div className="Teclado">
            {arr.map((i) => <button onClick={props.handleClick} value={i} key={i}  className="button">{i}</button>)}
           
        </div>
    )
}

export default Teclado;
