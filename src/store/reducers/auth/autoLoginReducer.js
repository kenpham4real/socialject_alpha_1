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
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
