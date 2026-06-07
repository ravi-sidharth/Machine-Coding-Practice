import { useState } from 'react'
import Counter from './Components/Counter'
import ClickOusideDropdown from './Components/ClickOutsideDropdown'
import InlineEditedInputs from './Components/IndlineEditedInputs'
import TempConverter from './Components/TempConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex pt-[150px] justify-center flex-col bg-grey-50'>
      {/* <Counter/> */}
      {/* <ClickOusideDropdown/> */}
      {/* <InlineEditedInputs/> */}
      <TempConverter />
      
    </div>
  )
}

export default App
