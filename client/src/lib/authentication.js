import Cookies from "js-cookie";

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

