import React from "react";
import { useState } from "react";
import Display from "./Display";
import "./Calculadora.css";
import Teclado from "./Teclado";

const Calculadora = () =>{
    const [display, setDisplay] = useState("0");
    const [operado, setOperado] = useState(false);
    const [result, setResult] =useState(0);
    
    function handleClick(e){
            const item = e.target.value;
            if(display === "0" && (item === "AC" || item ==="BS")){
                setDisplay("0")
                setResult(0)
                return
            }
            if(item === "0" &&  display === "0" && !operado){
                setDisplay("0")
                console.log(display)
                return 
            }

            if(item === "AC"){
                setOperado(false)
                setDisplay("0")
                setResult(0)
                return
            }
            if(item ==="BS" && display.length=== 1){
                setOperado(false)
                setDisplay("0")
                return 

            }else if(item === "BS"&& display!==0){
                const remove= display.slice(0,display.length-1)
                setDisplay(remove)
                return
           
            }
            if((item ==="+"|| item==="-"|| item ==="*"|| item ==="/") && operado) {
                setDisplay(display+item)
                setOperado(false)
                console.log(operado) 
                console.log("com operador")
                return
            } 
            
            if(operado){
                setDisplay(item)
                setOperado(false)
                console.log("sem operador")
                return
            }
            if(item ==="="){
                try {
                    const resultado = eval(display).toString()
                    setDisplay(resultado)
                    setResult(eval(display))
                    setOperado(true)
                    console.log(eval(display))
                    return
                } catch(err){
                    setResult("Erro")
                    setDisplay("0")
                    console.log(result)
                    return
                }
            }
            if(display === "0" && item && !operado){
                setDisplay(item)
                console.log(display)
                return
            }
            if(item){
                setDisplay(display+item)
                console.log(display)
                return
            }
    }
  
    return(
        <div className="Calculadora">
            <Display display={display}  result={result}/>
            <Teclado handleClick={handleClick}/>
            
        </div>
    )
}

export default Calculadora;