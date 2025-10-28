import { useState } from "react"
import { useEffect } from "react"

function FunctionCounter () {
    const [count,useCount] = useState(0)


    useEffect(() => {
        console.log("like componentDisMount(),")
        return () => {
            console.log("like componentWillUnmount().")
        }
    },[])

    useEffect(() => {
        console.log("like componentDidUpdate().")
    },[count])

    useEffect(() => {
        console.log("post render().")
    })

    return <div>
        <h3>Function Counter</h3>
        <h4>Count: {count}</h4>
        <button onClick={() => useCount(count+1)}>Incr</button>
    </div>



}

export default FunctionCounter