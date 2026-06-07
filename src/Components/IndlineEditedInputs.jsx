import { useEffect, useRef, useState } from "react"

const products = [
    { id: 1, text: "I-phone" },
    { id: 2, text: "Samsung" },
]



function InlineEditedInputs() {
    const [products, setProducts] = useState([
        { id: 1, text: "I-phone" },
        { id: 2, text: "Samsung" },
    ])
    const [currentEditedID, setCurrentEditedID] = useState(null)
    const [currentEditedValue, setCurrentEditedValue] = useState(null)
    const inputRef = useRef(null)


    useEffect(()=> {
        if (currentEditedID != null && inputRef.current) {
            inputRef.current.focus()
        }
    },[currentEditedID])

    const handleEdit = (id,text) => {
        setCurrentEditedID(id)
        setCurrentEditedValue(text)
    }

    const handleBlur = (event) => {
        if (currentEditedID != null) {
            saveChanges()

        }
    }

    const handleKeyDown = (event) => {
        console.log(event.key)
        if (event.key === 'Enter') {
            saveChanges()
        } else if (event.key === 'Escape'){
            setCurrentEditedID(null)
        }
    }

    const saveChanges = () => {
        if (currentEditedID != null) {
            setProducts(products.map(product => product.id === currentEditedID ? {...product, text: currentEditedValue} : product))
        }
        setCurrentEditedID(null)

    }


    console.log(currentEditedID, currentEditedValue)


    return (
        <div className="flex justify-center items-center flex-col">
            {products.map((product, index) => 
                 currentEditedID == product.id  ? (<input 
                type="text" 
                ref={inputRef}
                value={currentEditedValue} 
                onChange={(event)=> {setCurrentEditedValue(event.target.value)} }
                onBlur={(event)=> {handleBlur(event)}}
                onKeyDown={(event)=> handleKeyDown(event)}
                /> ): ( <div className="bg-red-50 p-10 flex gap-5" key={product.id}
                    >{product.text}
                    <button onClick={()=> handleEdit(product.id, product.text)}>Edit</button>
                </div> )
            )}
        </div>
    )
}

export default InlineEditedInputs