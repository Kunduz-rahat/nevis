const initialState = {
  user:{}
}

export const userReducer = (state=initialState, action)=>{
  switch (action.type){
    case "USER_SIGNIN":
      return {...state, user:action.payload}
    default:
      return state
  }
}