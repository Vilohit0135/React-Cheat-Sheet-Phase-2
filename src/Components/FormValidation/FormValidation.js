import React, { useState } from "react";

function FormValidation(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [nameError,setnameError]=useState(false);
    const [emailError,setemailError]=useState(false);

    const handleName=(e)=>{
            let name = e.target.value
            // setName(name)
            if(name.length<3){
                setnameError(true)
            }else{
                setnameError(false)
            }
    }

    const handleEmail=(e)=>{

    }
    return(
        <div>
            <h1> Form Validation </h1>
            <form>
                <label>Enter name: </label>
                <input type="text" placeholder="Name" name="name" value={name} onChange={handleName} required></input>
                <br/><br/>
                {nameError ? <span style={{color:'red'}}>Enter two or more characte</span> : " "}
                <br/>
                <label>Enter email: </label>
                <input type="email" placeholder="Email" name="email" value={email} onChange={handleName} requiredonChange={handleEmail} required>
                </input><br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default FormValidation;