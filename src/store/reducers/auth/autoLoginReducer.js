// Actions
import { FETCH_USER } from "../../actions/auth/autoLoginAction";

const initialState = {
  userData: {
    authenticatedMethod: "",
    userAvatar: "",
    userEmail: "",
    userId: "",
    userName: "",
    userType: "",
  },
};

export const autoLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      const user = action.payload;
      // console.log("User data dispatched:", user);
      
      if (action.payload){

        if (!user.orgName) {
          user.orgName = user.userName;
          user.orgAvatar = user.userAvatar;
        }
        // bro =.= just a min
        return {
          ...state,
          userData: action.payload,
        };
      }else return state;
    default:
      return state;
  }
};
