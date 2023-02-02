import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className="max-w-7xl mx-auto text-center">
    <div className="flex flex-col mt-16">
    <h1 className='font-extrabold text-[#222328] text-[32px]'>Welcome to</h1>
    <img className="mt-16" src={logo} alt="logo"/>
    </div>
    <div className="flex flex-col items-center">
        <Link to="/login" className="mt-16 text-white bg-[#6469ff] font-medium rounded-md text-xl h-14 w-80 px-5 py-3.5 text-center">
            LOGIN
        </Link>
        <Link to="/register" className="mt-12 text-white bg-green-600 font-medium rounded-md text-xl h-14 w-80 px-5 py-3.5 text-center">
            Create a new account
        </Link>
    </div>
    </section>
  )
}

export default Landing