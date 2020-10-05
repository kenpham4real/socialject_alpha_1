// Actions
import { FETCH_USER } from "../../actions/auth/autoLoginAction";

const initialState = {
  userData: {
    authenticatedMethod: "",
    userAvatar: "",
    userEmail: "",
    userId: undefined,
    userName: "",
    userType: "",
  },
};

export const autoLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log("User data dispatched:", action.payload);
      if (action.payload) // bro =.= just a min
        return {
          ...state,
          userData: action.payload,
        };
      else return state;
    default:
      return state;
  }
};
