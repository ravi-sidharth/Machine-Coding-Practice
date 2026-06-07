import { useEffect, useRef, useState } from "react";



function ClickOusideDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropDownRef = useRef(null)

    const dropDownToggle = () => {
        setIsOpen(prev=> !prev)
    }

    useEffect(() => {
        if (!isOpen) return 

        const handClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                console.log(event.target, dropDownRef.current)
                setIsOpen(false)
            }
        } 
        document.addEventListener("mousedown", handClickOutside)

        return ()=> {
            document.removeEventListener("mousedown", handClickOutside)
        }

    },[isOpen])


    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Close Dropdown On Outside Click</h1>
            <div ref={dropDownRef} className="relative">
                <button onClick={dropDownToggle}>Select an option</button>

                    { isOpen && (
                        <div className="absolute">
                            {['option 1', 'option 2', 'option 3', 'option 4'].map((option, index) => {
                        return  <div key={index}>{option}</div>
                    })}
                        </div>
                    
                    
                )
                }
    
                
            </div>
        </div>
    )
}

export default ClickOusideDropdown;