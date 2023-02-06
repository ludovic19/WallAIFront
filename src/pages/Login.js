import { useState } from 'react'
import { login } from '../utils/UserFunctions'
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    let navigate = useNavigate()

    const testLogin = (e) =>{
        e.preventDefault()

        const user = {
            email : email,
            password : password
        }
        login(user).then(res => {
            if(res) {
                navigate('/home')
            } else {
              setError("Wrong Password. Please try again.");
            }
        })

    } 
    return (
      <>
      <div  className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="font-inter front-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Back</Link>
        <Link to="/register" className="font-inter front-medium bg-green-600 text-white px-4 py-2 rounded-md">Register</Link>
      </div>
        <section className="max-w-7xl mx-auto mt-40 ">
          <div>
            <h1 className="font-extrabold text-[#222328] text-center text-[32px]">Please Log in</h1>
          </div>
          <div className="mt-16">
          <form noValidate onSubmit={testLogin}>
          <label>
           <div>
           <h2 className='mt-3'>Email :</h2>
           <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
           type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           </div>
           <div className='mt-8'>
           <h2 className='mt-3'>Password :</h2>
           <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
            type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <div className='text-center'>
           <button className="mt-20 text-white bg-[#6469ff] font-medium rounded-md text-xl w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit">LOGIN</button>
                  {error && <div className='mt-8 font-bold' style={{ color: "red" }}>{error}</div>}

           </div>
         </label>
         
          </form>
          </div>
        </section>
        <footer className="w-full flex justify-between items-center mt-64 sm:px-8 px-4 py-4 border-t border-t-[#e6ebf4]">
        <img src={logo} alt="logo" className="w-28 object-contain"/>
        <h3> © Wall AI 2023 </h3>
        <h2 className='font-bold max-sm:hidden'>Created By :<br/> <span className='font-bold text-[#6449ff] text-xl'>Hicham HAJLA<br/> & Ludovic LEVEQUE</span></h2>
      </footer>
        </>
      )
    }

export default Login