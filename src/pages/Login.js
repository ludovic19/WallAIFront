import { useState } from 'react'
import FormField from '../components/FormField'



const Login = () => {

    const [login, setLogin] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password:""
    })

  return (
    <section className="max-w-7xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-center text-[32px]">Please Log in to your account</h1>
      </div>
      <div className="mt-16">
      <form>
      <label>
       <div>
       <h2>First Name :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="first_name" onChange={(e) => setLogin((prevState) => ({
         ...prevState,
         first_name : e.target.value,
       }))}/>
       </div>
       <div>
       <h2 className='mt-3'>Last Name :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="last_name" onChange={(e) => setLogin((prevState) => ({
         ...prevState,
         last_name : e.target.value,
       }))}/>
       </div>
       <div>
       <h2 className='mt-3'>Email :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
       type="text" name="email" onChange={(e) => setLogin((prevState) => ({
         ...prevState,
         email : e.target.value,
       }))}/>
       </div>
       <div>
       <h2 className='mt-3'>Password :</h2>
       <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
        type="text" name="email" onChange={(e) => setLogin((prevState) => ({
         ...prevState,
         password : e.target.value,
       }))}/>
       </div>
       <div className='text-center'>
       <button className="mt-4 text-white bg-[#6469ff] font-medium rounded-md text-xl w-full sm:w-auto px-5 py-2.5 text-center"
        type="submit" /*onClick={(e) => submit(e)}*/>LOGIN</button>
       </div>
     </label>
     
   </form>
        {/* <FormField
          labelName="First Name"
          type="text"
          name="text"
          placeholder=""
          onChange={(e) => setLogin((prevState) => ({...prevState, first_name : e.target.value,
        }))}
        />  
        <FormField 
          labelName="Last Name"
          type="text"
          name="text"
          placeholder=""
          onChange={(e) => setLogin((prevState) => ({...prevState, last_name : e.target.value,
        }))}
        />  
        <FormField 
          labelName="Email"
          type="text"
          name="text"
          placeholder=""
          onChange={(e) => setLogin((prevState) => ({...prevState, email : e.target.value,
        }))}
        />   
        <FormField 
          labelName="Password"
          type="text"
          name="text"
          placeholder=""
          onChange={(e) => setLogin((prevState) => ({...prevState, password : e.target.value,
        }))}
        />                  */}
      </div>
    </section>
  )
}

export default Login