import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  function handClickMeBtnClick() {
    alert("Click Me!! -- Clicked")
  }

  const handClickMe2BtnClick = () => {
    alert("Click Me2 -- Clicked!!")
  }

  const handleInputTextChange = (e) => {
    const inputText = e.target
    console.log("Text: " + inputText.value)
  }

  const handleChildClick = (e) => {
    console.log("Child Checked!!")
  }

   const handleParentClick = (e) => {
    console.log("Parent Checked!!")
  }


  return (
    <>
     <h3> Event Handling</h3>
     <button onClick={ handClickMeBtnClick}>Click me-1</button>
     <button onClick={ handClickMe2BtnClick}>Click me-2</button>

     <button onClick={() => alert("Click Me-3")}>Click Me-3</button>
     <hr></hr>
     <input type="text" id='input' onChange={handleInputTextChange}></input>
    
     <hr></hr>
     <div id="parent" onClick={handleParentClick}>
     Event Bubbling Demo <br></br>
     <button id="child" onClick={handleChildClick}>Child Button</button>
     </div>
    </>
  )
}

export default App
