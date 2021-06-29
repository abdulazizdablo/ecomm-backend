import { render } from '@testing-library/react'
import React , {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

 function Register(){
useEffect(() => {

if(localStorage.getItem('user-info'))

{
history.push("/add")

}


// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const[name,setName]=useState("")
const [password,setPassword]=useState("")
const[email,setEmail]=useState("")
const history= useHistory();

async function signUp() {
    let item ={name,email,password}
 
  
    console.warn(item)
     
  let result= await  fetch("https://abdulazizecom.herokuapp.com/api/register",{
method:'POST',
body:JSON.stringify(item),
headers:{
 "Content-Type": 'application/json',
 "Accept": 'application/json'
}}

  )
  
  result=await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/add")
};
// eslint-disable-next-line no-lone-blocks

    return(
<>

<div className="col-sm-6 offset-sm-3">        

<h1>Register</h1>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />

<br></br>


<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"  />
<br></br>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />

<br></br>
<button  onClick={signUp} className="btn btn-primary">Sign Up</button>

</div>
 </>
  
    );
  }


export default Register