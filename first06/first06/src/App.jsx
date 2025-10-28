import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionCounter from '../components/FunctionCounter'
import AdvancedCounter from '../components/AdvancedCounter'
function App() {
  const [visible,setVisible] = useState(true)
  const [count, setCount] = useState(0)

  return (
    
    <>
     {/*<FunctionCounter/>*/}
     {/*<AdvancedCounter/>*/}
     <button onClick={() => setVisible(!visible)}>Toggle</button>
     <br></br>
     { visible && <AdvancedCounter/>}
    </>
  )
}

export default App
