import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import Card from "../components/Card";
import axios from "axios";


const PostDetails = () => {
    const { _id } = useParams();
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)


    const fetchPost = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8080/api/post/${_id}`, {
            headers : {
              'content-type' : 'multipart/form-data'
            }
          })
          console.log(response)
          setPost(response.data.photo);
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      };
  
      useEffect(() => {
        fetchPost()
      }, [])




  return (
    <section className="max-w-7xl mx-auto text-center">
      <div className="w-full flex justify-between items-center bg-[#f9fafe] sm:px-8 px-4 py-4 ">
        <Link to="/home" className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md"> Home</Link>
        <Link to="/profile" className="font-inter front-medium bg-[#6469ff] w-25 text-white px-4 py-2 rounded-md"> My Wall</Link>
      </div>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Post Details</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>paragraph</p>
        <img src={post} alt="post"/>
      </div>
    </section>
  );
};

export default PostDetails;
