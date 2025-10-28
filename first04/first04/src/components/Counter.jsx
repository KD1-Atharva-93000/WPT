import { useState} from "react"

function Counter() {
    const [count,setCount] = useState(0)

    function handleIncrClick ()  {
        setCount(count + 1)
        console.log("Incr Clicked: "+ count)
    }

    function handleDecrClick() {
        setCount(count-1)
        console.log("Decr Clicked: " + count)
    }

    return <div style={{
        border:'2px solid black',padding:'5px',margin:'5px',display:'inline-block'
    }}>
        <h3>Counter: {count}</h3>
    <button id='incr' onClick={handleIncrClick}>Incr</button>
    <button id='Decr' onClick={handleDecrClick}>Decr</button>
    </div>
}
export default Counter