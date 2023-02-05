import {useState, useEffect } from 'react'
import logo from "../assets/logo.jpg"
import preview from "../assets/preview.png"
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import Loader from '../components/Loader'
import Card from '../components/Card'
import jwt_decode from "jwt-decode";


const RenderCards = ({data , title}) => {
    if(data?.length > 0) {
        return (
          data.map((post) => <Card key={post._id} {...post}/>)
        );
      }
        return (
            <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase' >{title}</h2>
        )}

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [searchedResults, setSearchedResults] = useState(null)
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [details, setDetails] = useState({
        username : "",
        first_name : "",
        last_name: "",
        email: "",
        _id : ""
      });

    const getProfil = async  () => {
        const token = await localStorage.usertoken;
        const decoded = await jwt_decode(token);
        setDetails({
          username : decoded.user.username,
          first_name : decoded.user.first_name,
          last_name: decoded.user.last_name,
          email: decoded.user.email,
          _id : decoded.user._id
        })
    
      };

    const fetchPosts = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:8080/api/post/${details._id}`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
          },
        })
        if(response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
      }
        } catch (error) {
          alert(error)
        } finally {
        setLoading(false)
        }
      }
  
      useEffect(() => {
        fetchPosts()
        getProfil();
      }, [])

      const handleSearch = (e) => {
        clearTimeout(searchTimeout);
  
        setSearchText(e.target.value);
    
        setSearchTimeout(
          setTimeout(() => {
            const searchResult = allPosts.filter((item) => 
            item.name.toLowerCase().includes(searchText.toLowerCase()) || 
            item.prompt.toLowerCase().includes(searchText.toLowerCase()));
            setSearchedResults(searchResult);
          }, 500),
        );
      };


  return (
    <>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/home"  className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md">Back</Link>
    <Link to="/home"><img src={logo} alt="logo" style={{width:"180px"}} className="object-contain sm:w-auto"/></Link>
    <Link to="/create-post" className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <section className="max-w-7xl mx-auto">
    <div className="text-left flex justify-around">
        <div>
        <h1 className='font-extrabold text-[#222328] text-[32px] mt-8'>{details.username}</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>{details._id}</p>
        <h2 className='font-extrabold text-[#222328] text-[24px] mt-8'>{details.first_name} {details.last_name}</h2>
        <h2 className='font-extrabold text-[#222328] text-[24px] mt-8'>{details.email}</h2>
        </div>
        <div>
            <img src={preview} alt="logo" style={{width:"180px"}} className="object-contain sm:w-auto mt-16"/>
        </div>
      </div>
      <div className="mt-16">
        <FormField 
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search by user or keyword"
          value={searchText}
          handleChange={handleSearch}
        />      
      </div>
      <div className="mt-10">
        {loading ?(
          <div className="flex justify-center items-center">
            <Loader/> 
          </div>
         ) : (
          <>
            {searchText &&(
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing results for <span className='text-[#222328]'>{searchText}</span>
              </h2>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 '>
                    {searchText ? (
                        <RenderCards data={searchedResults} title="No search results found" />
                    ) : (
                        <RenderCards data={allPosts} title="No posts found" />
                    )}
            </div>
          </>
         ) 
       }
      </div>
    </section>
    </>
  )
}

export default Profile