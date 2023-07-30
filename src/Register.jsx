import React, {useState} from "react";
import axios from 'axios'

export const Register = (props) => {
    const [Name,setName] = useState('');        //user's data to be sent in state for top 
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [valid,setValid] = useState('');      // switch form when invalid

    const handleSubmit = (e) => {
        //send a request after submission
        fetch('http://172.31.92.44:80/HRX/log.php',{
            method : 'post',
            header : {
                'Content-Type' : 'application/json'
            },
            body : {
                'save' : true,
                'user_id' : document.getElementById("name"),
                'email': document.getElementById("emailId"),
                'pass': document.getElementById("passId")
            }
    })
     .then(
        (response) => {
            //checking
            setValid("You can login now")
            console.log(response)
        })
     .catch((err) => {
        setValid("Internal Server Error")
        console.log("error: ",err)
     })
        
    }
    const checkPasswordStrength= (txt)=>{
        let count=0;
        let invaliddiv = document.getElementById("invalid");

        if(txt.length < 8){
            //if the password is not long enough
            invaliddiv.style.opacity = 1;
            setValid("too short");
        }
            
        else {
            // if password is long enough, validate password
            if(txt.match(/[A-Z]+/g)){
                count++;
            }else{
                setValid("No capital letters bachha?");
                invaliddiv.style.opacity = 1;
            }
            if(txt.match(/[a-z]+/g)){
                count++;
            }else{
                setValid("Put some small letters Yar...");
                invaliddiv.style.opacity = 1;
            }
            if(txt.match(/\d+/g)){
                count++;
            }else{
                setValid("Let's add some numbers too!");
                invaliddiv.style.opacity = 1;
            }
            if(txt.match(/[@#$%^&*.]+/g)){
                count++;
            }else{
                setValid("Special characters? mhm...");
                invaliddiv.style.opacity = 1;
            }
            if(count===4){
                invaliddiv.style.opacity = 0;
            }
            
        }
            
    }
    return (
        <div className = "auth-form-container">
            <div className= "register-form" >
                
                <input value={Name} onChange = {(e) => setName(e.target.value)} 
                type="text"
                 name = "user_id"
                 placeholder = "Name" 
                 id = "name" />
                <input value={email}
                onChange = {(e) => setEmail(e.target.value)}
                type="email"
                name = "email" 
                placeholder = "Email"
                id = "emailId" />


                {/*password field needs to be hashed */}


                <input value={pass}
                    name="pass" onChange = {(e) => {
                    checkPasswordStrength(e.target.value)
                    setPass(e.target.value)
                    }}
                    type="password"
                    placeholder = "Create Password"
                    id = "passId" />

                <label id="invalid">{valid}</label>
                <button name = "save" 
                onClick = {handleSubmit}>
                    Register
                </button>

            </div>


            {/*if the form is switched*/}

            <button className= "linkButton" 
            onClick = {()=>props.onFormSwitch('Login')}> 
            Already a user? Log in here
            </button>
            
        </div>
    )
}