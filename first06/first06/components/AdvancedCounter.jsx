import { useEffect, useState } from "react"

function AdvancedCounter( ){
   const [count,useCount] = useState(0)
   const [color,setColor] = useState('lightgreen')



   useEffect(() => {
    console.log("like componentDidUpdate() for 'count' .")
    if(count%2 == 0){
        setColor('lightgreen')
    }else{
        setColor('lightblue')
    }
   },[count])

useEffect(() => {
    console.log("like componentDidUpdate() for Color.")
},[color])

return <div style={{backgroundColor:color ,padding:'5px',display:"inline-block"}}>
    <h3>Advanced Counter</h3>
    <h4>Count: {count}</h4>
    <button onClick={() => useCount(count+1)}>Incr</button>
</div>
       
}

export default AdvancedCounter