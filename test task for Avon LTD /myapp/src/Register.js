import React from "react"
import { useState } from "react"
import { useEffect } from "react"
 function Register () {
   const [firstName, setFirstName] = useState("")
   const [firstNameErr, setFirstNameErr] = useState("First name cannot be empty!")
   const [firstNameIsDerty, setFirstNameIsDerty] = useState(false)
   
   const [lastName, setLastName] = useState("")
   const [lastNameErr, setLastNameErr]= useState("Last name cannot be empty!")
   const [ lastNameIsDerty, setLastNameIsDerty]= useState(false)

   const [email, setEmail] = useState("")
   const [emailErr, setEmailErr] = useState(" Email  cannot be empty!")
   const [emailDerty, setEmailDerty] = useState(false)

   const [password , setPassword]= useState("")
   const [passwordErr, setPasswordErr] = useState("Password  cannot be empty!")
   const [passwordDerty, setPasswordDerty]= useState(false)
   const [isFormValid, setIsFormValid]=useState(false)
   const [modalIsOpen, setModalIsOpen] = useState(false)

   



   const onFirstNameChange = (e)=>{
    setFirstName(e.target.value)
    if(e.target.value.length<1 || e.target.value.length>20){
        setFirstNameErr("Name must be from 1 to 20 symbols")
        }else{
            setFirstNameErr("")
        }
   }

   const onEmailAdresChange=(e)=>{
    setEmail(e.target.value)
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   if (!re.test(String(e.target.value).toLocaleLowerCase())) {
       setEmailErr("Incorect email or password")
   } else{
       setEmailErr("")

   }
   }

   const onLastNameChange=(e)=>{
    setLastName(e.target.value)
    if(e.target.value.length<1 || e.target.value.length>20){
        setLastNameErr("Name must be from 1 to 20 symbols")
        }else{
            setLastNameErr("")
        }

   }

   const  onPasswordChange = (e)=>{
    setPassword(e.target.value)
    if(e.target.value.length<3 || e.target.value.length>10){
        setPasswordErr("Password maut be from 3 to 10 symbols")

        }else{
            setPasswordErr("")
        }
   }
   
   
   const blurHendler = (e)=>{
    switch(e.target.name){
        case "firstName":
        setFirstNameIsDerty(true)
        break;
        case "lastName":
        setLastNameIsDerty(true)
        break;
        case "emailAdress":
        setEmailDerty(true)
        break;
        case "password":
          setPasswordDerty(true)
          break;
          default:
         setPasswordDerty("")
        


    }
}
useEffect(()=>{
  if(emailErr||passwordErr||firstNameErr||lastNameErr ){
      setIsFormValid(false)

  }else{
      setIsFormValid(true)
  }

}, [emailErr, passwordErr,firstNameErr, lastNameErr])

const willOpenModal=()=>{
  setModalIsOpen(true)
}
   
       return (
      <div className="input-group">
         <label htmlFor="name"> First Name:</label>
        <div className="input-wraper">
        <input className=" input"onChange={ e =>onFirstNameChange(e)} onBlur={e=>blurHendler(e)} type="text" value={firstName} placeholder="Enter your Name" name="firstName"/>
        </div>
        <div>
        {(firstNameIsDerty&& firstNameErr)&& <span style={{color:"red"}}>{firstNameErr} </span>}</div>
        <label  htmlFor="name">Last Name:</label>
        <div className="input-wraper">
        <input className=" input" onChange={ e =>onLastNameChange(e)} onBlur={e=>blurHendler(e)} type="text" value={lastName} placeholder="Enter your last Name" name="lastName"/>
        </div>
        <div>
        {(lastNameIsDerty&& lastNameErr)&& <span style={{color:"red"}}>{lastNameErr} </span>}</div>
        <label  htmlFor="name">Email:</label>
        <div className="input-wraper">
        <input className=" input" onChange={ e =>onEmailAdresChange(e)} onBlur={e=>blurHendler(e)} type="email" value={email} placeholder="Enter your Email Address" name="emailAdress"/>
        </div>
        <div>
        {(emailDerty&& emailErr)&& <span style={{color:"red"}}>{emailErr} </span>}</div>
        <label htmlFor="name">Password:</label>
        <div className="input-wraper">
        <input className=" input" onChange={ e =>onPasswordChange(e)} onBlur={e=>blurHendler(e)}  type="password"  value={password} placeholder="Enter your Password" name="password"/>
        </div>
        <div>
        {(passwordDerty&& passwordErr)&& <span style={{color:"red"}}>{passwordErr} </span>}</div>
        <button className="button" onClick={willOpenModal}  disabled ={!isFormValid}  type="submit">Register</button>
        {modalIsOpen&&
        <div className="modal">
          <p> Congratulations, you successfully passed the registration</p>
        <ul>
          <li> Your Name: {firstName}</li> 
          <li>  Your last Name: {lastName} </li>
          <li>Your Email: {email}</li>
        <li> Your Password: {password}</li> 
        </ul></div>}
        
      </div>
      
    )
   }
   export default Register