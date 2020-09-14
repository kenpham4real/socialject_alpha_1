import { CHANGE_TEXT } from "../../../actions/posting-project-user/profile/profileAction";
import { fetchProfile_ppu } from "../../../actions/posting-project-user/profile/profileAction";

const initialState = {
  profileData: [],
  profileKey: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      console.log("Text payload: ", action.payload);
      return {
        ...state,
        profileData: action.payload,
      };
    case "CHANGE_KEY":
      console.log("Key payload: ", action.payload);
      return {
        ...state,
        profileKey: action.payload,
      };
    default:
      return { profileData: action.type, profileKey: undefined };
  }
};
