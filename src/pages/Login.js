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
    <section className="max-w-7xl mx-auto text-center">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Please Log in to your account</h1>
      </div>
      <div className="mt-16">
        <FormField
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
        />                 
      </div>
    </section>
  )
}

export default Login