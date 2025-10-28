import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [passwd,setPasswd] = useState('')


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePassChange = (e) => {
        setPasswd(e.target.value)
    }
    //function handleEmailChange(e) {
      //  return setEmail(e.target.value)
    //}
    const handleSubmitClick = () => {
        const msg = `Email: ${email} + Password: ${passwd}`
        alert(msg)
    }

    return <div style={{
        border:'1px solid black',padding:'5px'
    }}>
        <h3>Login Form</h3>
        <div>
            Email: <input type="text" id="email" onChange={handleEmailChange}/>
        </div>
        <div >
            Password: <input type="text" id="pass" onChange={handlePassChange}/>
         </div>
        <div>
            <button id="submitbtn" onClick={handleSubmitClick}>Sign In</button>
        </div>
    </div>



}

export default LoginForm