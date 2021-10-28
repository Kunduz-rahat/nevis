import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";
import {isAuth} from "../../lib/authentication";
import axios from "axios";
import './style.css';
import Spinner from "../../components/Spinner";

const Blog = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios('http://localhost:8000/api/v1/news')
      .then(({data}) => {
        setNews(data)
        setIsLoading(false)
      })
  })
  if (isLoading) {
    return <div className='flex justify-center items-center'>
      <Spinner/>
    </div>
  }
  return (
    <Layout>
      <div className='flex justify-between items-center'>
        <h2>My blog</h2>

        {isAuth() &&
        <Link to='/create-post'
              className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg">
          Create post
        </Link>}
      </div>
      {
        news.map(post =>
          <div className='mt-2' key={post._id}>
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-xl">{post.description}</p>
            <Link className='gray-200' to={`/user/${post?.user?._id}`}>{post?.user?.name}</Link>
          </div>
        )
      }
    </Layout>
  );
};

export default Blog;