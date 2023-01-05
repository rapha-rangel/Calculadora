

const Display =({display})=>{

    return(
        <div className="box-border h-30 w-120 p-2 rounded0md flex flex-col bg-zinc-700">
            <span className="flex flex-row-reverse text-3xl text-yellow-400">{display}</span>
        </div>
        
    )
}

export default Display;