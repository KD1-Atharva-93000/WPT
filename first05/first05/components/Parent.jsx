//import useState from 'react'
import { useState } from 'react'
import Child from './Child'
import GrandChild from './Grandchild'
function Parent() {
    const [count,setCount] = useState(0)
    return <>
    <div style={{border:'2px solid blue',padding:'5px',display:'inline-block'}}>
    <h3>Parent: {count}</h3>
    <Child>
        <GrandChild count={count} setCount={setCount}/>
    </Child>
    </div>
    </>
}
export default Parent