import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import Spinner from "../../components/Spinner";
import {toast, ToastContainer} from "react-toastify";


const PostInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [values, setValues] = useState({content: ''})
  const [isLoading, setLoading] = useState(true)
  const {id} = useParams()
  const [post, setPost] = useState({})

  const handleChange = (e) => {
    setValues({content: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/v1/comments', {...values, news: id, user: user._id})
      .then(({data}) => {
        toast.success("Сохранено!!!")
        setValues({content: ''})
      setPost({...post, comments:[...post.comments.data]})
      })
  }
  useEffect(() => {
    axios(`http://localhost:8000/api/v1/news/${id}`)
      .then(({data}) => {
        setPost(data)
        setLoading(false)
      })
  }, [id])
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <Layout>
      <ToastContainer/>
      <h2 className='text-3xl text-bold'>{post.title}</h2>
      <p>{post.description}</p>
      <div>
        {
          post.comments.map(item=>
            <div className='mb-4' key={item._id}>
              <div>Author: {item.user.name}</div>
              <div>{item.content}</div>
            </div>
          )
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-full md:w-full  mb-2 mt-2">
          <h2 className=" pt-3 pb-2 text-gray-800 text-lg">Comments:</h2>

          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="content"
            placeholder='Create comment'
            value={values.content}
            onChange={handleChange}
            required/>
        </div>
        <div className="w-full md:w-full flex items-start md:w-full ">
          <div className="-mr-1">
            <input type='submit'
                   className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                   value='Add comment'


            />
          </div>
        </div>
      </form>

    </Layout>
  )
    ;
};

export default PostInfo;