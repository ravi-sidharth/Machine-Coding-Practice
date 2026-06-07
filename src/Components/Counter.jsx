import { useState } from "react"

function Counter() {

    const [history,setHistory] = useState([0])
    const [position, setPosition] = useState(0)

    const currentValue = history[position]

    const addValueToHistory = (newValue) => {
        const newHistory = history.slice(0, position+1)
        setHistory([...newHistory, newValue])
        setPosition(position+1)
    }

    const increment = () => {
        addValueToHistory(currentValue + 1)
    }
    const decrement = () => {
        addValueToHistory(currentValue - 1)   
    }

    const undo = () => {
        if (position > 0 ){
            setPosition(position-1)
        }
    }
    const redo = () => {
        if(position < history.length -1 ) {
            setPosition(position+1)
        }
    }

    console.log(history, position)

    return (
        <div className="flex pt-[150px] justify-center flex-col bg-grey-50">
            <h1 className="text-center text-7xl">{currentValue}</h1>
            <div className="flex justify-center gap-5 mt-10">
                <button onClick={increment}>Increment</button>
                <button disabled={currentValue===0} onClick={decrement}>Decrement</button>
            </div>
            <div className="flex justify-center gap-5 mt-10">
                <button onClick={undo} >Undo</button>
                <div>{(position+1)} / {history.length }</div>
                <button onClick={redo}>Redo</button>
            </div>
        </div>
    )
}


export default Counter;