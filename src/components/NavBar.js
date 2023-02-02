import React from 'react'
import { Link } from "react-router-dom";
import logo  from "../assets/logo.jpg"

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/login" className="font-inter front-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Log Out</Link>
    <Link to="/"><img src={logo} alt="logo" className="w-28 object-contain"/></Link>
    <Link to="/create-post" className="font-inter front-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </div>
  )
}

export default NavBar