import React from "react";
import { useState } from "react";
import Display from "./Display";
import Teclado from "./Teclado";

const Calculadora = () =>{
    const [oldNum, setOldNum] = useState("0");
    const [num, setNum] = useState("0");
    const [operacao, setOperacao] = useState(" ");
    const [operado, setOperado] = useState(false);
    
    function handleClick(e){
        const item = e.target.value;
        if(num === "0"){
            setNum(item)
        }else if (operacao==="" && operado){
            setNum(item)
            setOldNum("0")
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
            setOperado(false)
        }

        function porcentagem(){
            const porcem = parseFloat(num)/100
                setNum(String(porcem))
                setOldNum("0")
                setOperado(true)
        }
        
        function menosemais(){
            const result = parseFloat(num) * -1
            setNum(String(result))
            setOperado(true) 
        }

        function fracao(){
            if(num.includes(".")){
                
            }else {
                const result = num+"."
                setNum(result)
            }
        }

        function operadores(e){
            if(!operado){
            const itemOperacao = e.target.value;
            setOperacao(itemOperacao)
            setOldNum(num)
            setNum("0")
            console.log(oldNum)
            console.log(operacao)
            } else{
                const itemOperacao = e.target.value;
                setOperacao(itemOperacao)
                setOldNum(num)
                setNum("0")
                console.log(operacao)
                console.log(num)
                }
            
        }

        function calcular(){
            switch(operacao){
                case("+"):
                const resultSoma =parseFloat(oldNum) + parseFloat(num)
                setNum(String(resultSoma))
                setOperado(true)
                setOperacao("")
                console.log(oldNum)
                console.log(num)
                console.log(operacao)
                console.log(operado)
                break;
                case("-"):
                const resultSubtracao =parseFloat(oldNum) - parseFloat(num)
                setNum(String(resultSubtracao))
                setOperado(true)
                setOperacao("")
                break;
                case("*"):
                const resultMultiplicacao =parseFloat(oldNum) * parseFloat(num)
                setNum(String(resultMultiplicacao))
                setOperado(true)
                setOperacao("")
                break;
                case("/"):
                const resultDivisao =parseFloat(oldNum) / parseFloat(num)
                setNum(String(resultDivisao))
                setOperado(true)
                setOperacao("")
                break;
                default:
                break;
            }
        }
    

  
    return(
        <div className="box-border h-120 w-80 p-4 pb-0 m-auto bg-zinc-900 rounded-md">
            <Display display={num}/>
            <Teclado handleClick={handleClick} handleFracao={fracao} handleMaisMenos={menosemais} handleClear={clear} handlePorcentagem={porcentagem} handleOperadores={operadores} handleCalcular={calcular}/>
            
        </div>
    )
}

export default Calculadora;
