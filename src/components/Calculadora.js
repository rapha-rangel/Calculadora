import React from "react";
import { useState } from "react";
import Display from "./Display";
import "./Calculadora.css";
import Teclado from "./Teclado";

const Calculadora = () =>{
    const [oldNum, setOldNum] = useState("0");
    const [num, setNum] = useState("0");
    const [operação, setOperação] = useState(" ");
    const [operado, setOperado] = useState(false);
    const [result, setResult] =useState(0);
    
    function handleClick(e){
        const item = e.target.value;
        if(num === "0"){
            setNum(item)
        }else if (operação==="" && operado){
            setNum(item)
            setOldNum("0")
            setResult("0")
            setOperado(false)
            console.log(num)
        } else if(num!=="0" && operado){
            setNum(num+item)
            console.log(num)
        }else{
            setNum(num+item)
            console.log(num)
        }
     }         
        
        function clear(){
            setOldNum("0")
            setNum("0")
            setResult("0")
            setOperado(false)
        }

        function backspace(e){
                if(e.keyCode === 8){
                    console.log('You must have pressed Enter ')
                    if(num.length ===1){
                        setNum("0")
                        setResult("0")
                        setOldNum("0")
                        setOperado(false)
                    } else {
                        setNum(num.slice(0,num.length-1))
                    }
                }
            }
            
        function operadores(e){
            if(!operado){
            const itemOperação = e.target.value;
            setOperação(itemOperação)
            setOldNum(num)
            setNum("0")
            setResult(num+itemOperação)
            console.log(oldNum)
            console.log(operação)
            } else{
                const itemOperação = e.target.value;
                setOperação(itemOperação)
                setOldNum(result)
                setResult(result+itemOperação)
                setNum("0")
                console.log(operação)
                console.log(num)
                }
            
        }

        function calcular(){
            switch(operação){
                case("+"):
                const resultSoma =Number(oldNum) + Number(num)
                setResult(String(resultSoma))
                setNum(String(resultSoma))
                setOperado(true)
                setOperação("")
                console.log(operação)
                console.log(operado)
                break;
                case("-"):
                const resultSubtração =Number(oldNum) - Number(num)
                setResult(String(resultSubtração))
                setOperado(true)
                setOperação("")
                break;
                case("*"):
                const resultMultiplicação =Number(oldNum) * Number(num)
                setResult(String(resultMultiplicação))
                setOperado(true)
                setOperação("")
                break;
                case("/"):
                const resultDivisão =Number(oldNum) / Number(num)
                setResult(String(resultDivisão))
                setOperado(true)
                setOperação("")
                break;
            }
        }
    

  
    return(
        <div className="box-border h-120 w-80 p-4  m-auto bg-zinc-900 rounded-md" onKeyDown={backspace}>
            <Display display={num}  result={result}/>
            <Teclado handleClick={handleClick} handleClear={clear} handleKeyDown={backspace} handleOperadores={operadores} handleCalcular={calcular}/>
            
        </div>
    )
}

export default Calculadora;