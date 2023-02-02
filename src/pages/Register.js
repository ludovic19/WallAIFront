import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../utils/UserFunctions'




const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const createUser = (e) => {
      e.preventDefault()
  
      const newUser = { // creates new object with name,email, password
        first_name: firstName,
        last_name : lastName,
        email: email,
        password: password
      }
      register(newUser).then(res => { // calls the register function from UserFunctions.js and passes newUser as argument
        navigate(`/login`) // then navigates to login
      })
    }

  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-center text-[32px]">Please Register</h1>
      </div>
      <div className="mt-16">
      <form noValidate onSubmit={createUser}>
      <label>
       <div>
       <h2>First Name :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
       </div>
       <div>
       <h2 className='mt-3'>Last Name :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
       </div>
       <div>
       <h2 className='mt-3'>Email :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
       type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
       </div>
       <div>
       <h2 className='mt-3'>Password :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="email" value={password} onChange={(e) => setPassword(e.target.value)}/>
       </div>
       <div className='text-center'>
       <button className="mt-4 text-white bg-[#6469ff] font-medium rounded-md text-xl w-full sm:w-auto px-5 py-2.5 text-center"
        type="submit" /*onClick={(e) => submit(e)}*/>Register</button>
       </div>
     </label>
     
      </form>
      </div>
    </section>
  )
}

export default Register