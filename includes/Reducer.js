import { ADD_RIDER } from './actions';

const initialState = {
    username:"Welcome",
    nickname:"",
    version:"0.1",
    room:{
      country:"",
      address:"",
      city:"",
      postal_code:""
    },
    chatroom:"",
    darkmode:true
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}

export default AppReducer;