import { useState } from 'react'
import { login } from '../utils/UserFunctions'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            }
        })

    } 
    return (
        <section className="max-w-7xl mx-auto ">
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
           <div>
           <h2 className='mt-3'>Password :</h2>
           <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
            type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>
           <div className='text-center'>
           <button className="mt-4 text-white bg-[#6469ff] font-medium rounded-md text-xl w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit" /*onClick={(e) => submit(e)}*/>LOGIN</button>
           </div>
         </label>
         
          </form>
          </div>
        </section>
      )
    }

export default Login