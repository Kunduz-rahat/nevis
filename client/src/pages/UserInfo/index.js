import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {useParams} from "react-router-dom"
import axios from "axios";
import Spinner from "../../components/Spinner";

const UserInfo = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    axios(`http://localhost:8000/api/v1/user/${id}`)
      .then(({data})=> {
        setUser(data)
        setIsLoading(false)
      })
  })
  if (isLoading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>


  }
  return (
    <Layout>
     <div>
       User info
      <h1>Email: {user?.user?.email}</h1>
      <h1>Name: {user?.user?.name}</h1>
       {
         user?.user?.news?.map(item => (
           <div>
             <h1>{item.title}</h1>
           </div>
         ))
       }
      <h1>{user?.user?.news?.title}</h1>
     </div>
    </Layout>
  );
};

export default UserInfo;