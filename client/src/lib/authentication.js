import Cookies from "js-cookie";
import axios from "axios";

export const authentication = (data)=>{
  Cookies.set("token", data.token, {expires: 1})
  localStorage.setItem("user", JSON.stringify(data.user))
}


export const isAuth = () => {
  const token = Cookies.get("token")
  if (token) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"))
    } else {
      return false
    }
  }
}

export const clearUser =()=>{
   Cookies.remove("token")
  localStorage.removeItem("user")

}


export const starUp =()=>{
  const token = Cookies.get('token')
  axios.post('http://localhost:8000/api/v1/authentication', {token})
    .then(({data}) => console.log(data))
    .catch(()=>{
      clearUser()
    })
}

