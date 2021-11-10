import axios from "axios";
import Cookies from "js-cookie";
import {history} from "../../lib/history";



export const signIn = (data) => {

  return (dispatch) => {
    axios.post('http://localhost:8000/api/v1/signin', data)
      .then(({data}) => {
        Cookies.set("token", data.token, {expires: 1})
        dispatch({type: "USER_SIGNIN", payload: data.user})
        history.push('/')
      })

  }
}
