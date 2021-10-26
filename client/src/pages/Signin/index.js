import React, {useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Redirect, useHistory} from "react-router-dom";

import {toast, ToastContainer} from "react-toastify";
import {authentication, isAuth} from "../../lib/authentication";


const Signin = () => {
  const history = useHistory()
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: 'http://localhost:8000/api/v1/signin',
      data: values
    }).then(({data}) => {
      if (values.email) {
        authentication(data)
        isAuth() && isAuth().role === "admin" ? history.push('/admin') : history.push('/private')
        const name = ((data.user.name))
        toast.success(`Добро пожаловать, ${name}`)
        setValues({password: "", email: ""})
      }
    })
      .catch((e) => toast.error((e.response.data.message)))
    setValues({password: "", email: ""})
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
              Sign In
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
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                type="submit">Sign In
              </button>

            </div>
          </form>

        </div>
      </div>


    </Layout>
  );
};

export default Signin;