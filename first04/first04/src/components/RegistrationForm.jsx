
import { useState } from "react"
function RegistrationForm() {
    const [userInfo,setUserInfo] = useState({
        firstName:'',
        lastName : '',
        email:'',
        passwd:'',
        confirmpasswd:'',
        mobile:'',
        address:'',
        birth:''
    })

    const Submit = () =>{
        let msg = ""
        if(userInfo.firstName===""){
            msg+="first name cannot be empty\n"
        }
        if(userInfo.lastName===""){
            msg+="last name cannot be empty\n"
        }
        if(userInfo.email===""){
            msg+="Email cannot be empty\n"
        }
        if(userInfo.passwd===""){
            msg+="Password cannot be empty\n"
        }
        if(userInfo.confirmpasswd===""){
            msg+="Confirm Password cannot be empty\n"
        }
        if(userInfo.mobile===""){
            msg+="Mobile No cannot be empty\n"
        }
        if(userInfo.address===""){
            msg+="Address cannot be empty\n"
        }
        if(userInfo.birth===""){
            msg+="Birth date cannot be empty\n"
        }
        if(userInfo.passwd!==userInfo.confirmpasswd){
            msg+="Password and confirm password has to be equal\n"
        }
        if(msg){
            alert(msg)
        }
        else{
            alert("Registration successful")
        }
    }

    const handleChange = (e) => {
        const newUserInfo = {
            ...userInfo,
            [e.target.id] : e.target.value
        }
        setUserInfo(newUserInfo)
    }

    return (
        <>
    <div>
        <h3>Registration form</h3>
        <div>
            First Name: <input type="text" id="firstName" onChange={handleChange}></input>
         </div>
         <div>
            Last Name: <input type="text" id="lastName" onChange={handleChange}></input>
         </div>
         <div>
            Email: <input type="text" id="email" onChange={handleChange}></input>
         </div>
         <div>
            Password: <input type="text" id="passwd" onChange={handleChange}></input>
         </div>
         <div>
           Confirm  Password: <input type="text" id="confirmpasswd" onChange={handleChange}></input>
         </div>
         <div>
            Mobile: <input type="text" id="mobile" onChange={handleChange}></input>
         </div>

           <div>
            Address: <input type="text" id="address" onChange={handleChange}></input>
         </div>
           <div>
            Birth-Date: <input type="Date" id="birth" onChange={handleChange}></input>
         </div>
         <div>
            <button id="submit" onClick={Submit}>Sign Up </button>
         </div>
    </div>
    </>
    )
    
} 

export default RegistrationForm