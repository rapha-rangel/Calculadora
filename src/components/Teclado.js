

const Teclado=({handleClick, handleClear, handleKeyDown, handleOperadores, handleCalcular})=>{

    const arr = [1,2,3,4,5,6,7,8,9,0]
    return(
        <div className="grid grid-cols-4 gap-4 py-6">
            <button onClick={handleOperadores}  value='+' className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">+</button>
            <button onClick={handleOperadores}  value="-" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">-</button>
            <button onClick={handleOperadores}  value="*" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">*</button>
            <button onClick={handleOperadores}  value="/" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-orange-500 text-white hover:outline outline-offset-2 outline-blue-500">/</button>
            {arr.map((i) => <button onClick={handleClick} value={i} key={i}  className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">{i}</button>)}
            <button onClick={handleClear} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">AC</button>
            <button onKeyDown={handleKeyDown} className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white hover:outline outline-offset-2 outline-blue-500">BS</button>
            <button onClick={handleCalcular}  value="=" className="text-3xl box-border h-15 w-15 p-2 border-1 rounded-md text-slate-600 bg-zinc-700 text-white col-span-4 hover:outline outline-offset-2 outline-blue-500">=</button>
            


        </div>
    )
}

export default Teclado;
