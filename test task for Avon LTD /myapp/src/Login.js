import React, { useEffect } from "react"
import { useState} from "react"
 function Login (){
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [emailDerty, setEmailDerty]= useState(false)
     const [passwordDerty, setPasswordDerty]= useState(false)
     const [emailError, setEmailError]= useState("Email cannot be empty!")
     const [passwordError, setPasswordError]= useState("Password cannot be empty!")
     const [isFormValid, setIsFormValid]=useState(false)
     const [modalIsOpen, setModalIsOpen] = useState(false)
    

     const emailHandler = (e)=>{
         setEmail(e.target.value)
         const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError("Incorect email or password!")
        } else{
            setEmailError("")

        }
     }

     const passwordHandler = (e)=>{
         setPassword(e.target.value)
         if(e.target.value.length<3 || e.target.value.length>10){
             setPasswordError("Pasword mast be from 3 to 10 symbols!")

             }else{
                 setPasswordError("")
              
             }


         }
     
      

     const blurHendler = (e)=>{
         switch(e.target.name){
             case "email":
             setEmailDerty(true)
             break;
             case "password":
                 setPasswordDerty(true)
                 break;
                 default:
                     setPassword('')
    

         }
     }

     useEffect(()=>{
         if(emailError||passwordError){
             setIsFormValid(false)

         }else{
             setIsFormValid(true)
         }

     }, [emailError, passwordError])

    const willOpenModal=()=>{
       setModalIsOpen(true)
    
        
     

    }
    
      
  


     return (
        <div className="input-group">
             <label htmlFor="name"> Email:</label>
        <div className="input-wraper">
        <input  className=" input"onChange={e=>emailHandler(e)} value={email} onBlur={e=>blurHendler(e)} type="text" placeholder="Enter your email" name="email"/>
        </div>
        <div>
        {(emailDerty&&emailError)&& <span style={{color:"red"}}>{emailError} </span>}</div>
        <label htmlFor="name">Password:</label>
        <div className="input-wraper">
        <input  className=" input" onChange={e=>passwordHandler(e)} value={password} onBlur={e=>blurHendler(e)} type="password" placeholder="Enter your Password" name="password"/>
        </div>
        <div>{(passwordDerty&&passwordError)&& <span style={{color:"red"}}>{passwordError} </span>}</div>
        <button className="button" onClick={willOpenModal} disabled ={!isFormValid}   type="submit">Login</button>
        {modalIsOpen&&<div className="modal">
            <p>You successfully login</p>
            <ul>
            <li>Your Email: {email}</li>
        <li>Your Password: {password}</li>
        </ul></div>}
        </div>
    )
   }
   export default Login