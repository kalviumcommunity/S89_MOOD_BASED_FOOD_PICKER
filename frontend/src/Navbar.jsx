import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>{
        navigate("/Mood")
    }}>
        <button style={{background:"black",color:"white"}}>Get Started</button>

    </div>
  )
}

export default Navbar