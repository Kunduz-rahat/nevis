import React, {useState} from 'react';
import Layout from "../../components/Layout";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";

import {Redirect} from "react-router-dom";
import {isAuth} from "../../lib/authentication";

const Signup = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios({
      method: "POST",
      url: 'http://localhost:8000/api/v1/signup',
      data: values
    } ).then(({data})=>{

      toast(JSON.stringify(data.message))
      setValues({name:"", password:"", email:""})
    })
      .catch((e)=> toast(JSON.stringify(e.response.data.message)))
  }
  return (
    <Layout>
      {isAuth() ? <Redirect to='/'/> : null}
      <ToastContainer/>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Sign Up
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                value={values.name}
                type="text"
                required
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                onChange={handleChange}
                type="email"
                required
                value={values.email}
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                required
                autoComplete="off"
                value={values.password}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit">Sign Up
              </button>

            </div>
          </form>

        </div>
      </div>
    </Layout>
  );
};

export default Signup;