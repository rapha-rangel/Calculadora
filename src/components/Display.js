

const Display =({display, result})=>{

    return(
        <div className="box-border h-30 w-120 p-2 rounded0md flex flex-col bg-zinc-700">
            <span className="flex flex-row-reverse text-3xl text-yellow-400">{display}</span>
            <span className="flex flex-row-reverse text-3xl text-green-500">{result}</span>
        </div>
        
    )
}

export default Display;