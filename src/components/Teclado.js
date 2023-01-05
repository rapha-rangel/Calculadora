

const Teclado=({handleClick, handleClear, handlePorcentagem, handleOperadores, handleCalcular, handleMaisMenos, handleFracao})=>{

    return(
        <div className="grid grid-cols-4 gap-4 py-6">
            <button onClick={handleClear} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">AC</button>
            <button onClick={handlePorcentagem} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">%</button>
            <button onClick={handleMaisMenos}  className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">+/-</button>
            <button onClick={handleOperadores}  value='+' className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">+</button>
            <button onClick={handleClick} value={9} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">9</button>
            <button onClick={handleClick} value={8} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">8</button>
            <button onClick={handleClick} value={7} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">7</button>
            <button onClick={handleOperadores}  value="-" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">-</button>
            <button onClick={handleClick} value={6} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">6</button>
            <button onClick={handleClick} value={5} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">5</button>
            <button onClick={handleClick} value={4} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">4</button>
            <button onClick={handleOperadores}  value="*" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">*</button>
            <button onClick={handleClick} value={3} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">3</button>
            <button onClick={handleClick} value={2} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">2</button>
            <button onClick={handleClick} value={1} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">1</button>
            <button onClick={handleOperadores}  value="/" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">/</button>
            <button onClick={handleClick} value={0} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white col-span-2 hover:outline outline-offset-2 outline-blue-500">0</button>
            <button onClick={handleFracao}  className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">.</button>
            <button onClick={handleCalcular}  value="=" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">=</button>
            
            


        </div>
    )
}

export default Teclado;
