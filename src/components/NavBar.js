import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo  from "../assets/logo.jpg"

const NavBar = () => {

  let navigate = useNavigate()

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    navigate(`/`)
  }

  return (
    <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <a href="/" onClick={logOut} className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md">Log Out</a>
    <Link to="/home"><img src={logo} alt="logo" style={{width:"180px"}} className="object-contain sm:w-auto"/></Link>
    <Link to="/create-post" className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md">Create</Link>
    </div>
  )
}

export default NavBar