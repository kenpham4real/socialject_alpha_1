// Actions
import { AUTHENTICATE } from "../../actions/auth/auth";

// Models
import { User } from "../../../models/user";

const initialState = {
  userData: {
    userName: "",
    userEmail: "",
    userAvatar: "",
    uid: "",
    token: "",
    userType: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      const authenticatedUser = new User(
        action.userData.userId,
        action.userData.userToken,
        action.userData.userType,
        action.userData.userEmail,
        action.userData.userAvatar,
        action.userData.userName
      );

      return {
        ...state,
        userData: authenticatedUser,
      };
    default:
      return state;
  }
};
