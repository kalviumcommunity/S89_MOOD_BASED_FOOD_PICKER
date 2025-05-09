import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div onClick={()=>{
        navigate("/Mood")
    }}>
        <button style={{background:"black",color:"white"}}>Get Started</button>

    </div>

    <div onClick={()=>{
        navigate("/")
    }}>
        <button style={{background:"black",color:"white"}}>About</button>

    </div>


<div onClick={()=>{
  navigate("/food")
}}>
  <button style={{background:"black",color:"white"}}>Mood</button>

</div>

<div onClick={()=>{
  navigate("/addfood")
}}>
  <button style={{background:"black",color:"white"}}>Add Food</button>

</div>
<div onClick={()=>{
        navigate("/userData")
    }}>
        <button style={{background:"black",color:"white"}}>UserData</button>

    </div>

    <div onClick={()=>{
        navigate("/login")
    }}>
        <button style={{background:"black",color:"white"}}>Login</button>

    </div>

    <div onClick={()=>{
        navigate("/register")
    }}>
        <button style={{background:"black",color:"white"}}>Signup</button>

    </div>

    </div>
    
  )
}

export default Navbar