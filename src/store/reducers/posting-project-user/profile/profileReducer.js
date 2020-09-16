import {
  CHANGE_TEXT, 
  SET_ORGANIZATION_PROFILE, 
  SET_ORGANIZATION_PROJECT 
} from "../../../actions/posting-project-user/profile/profileAction";
import { fetchProfile_ppu } from "../../../actions/posting-project-user/profile/profileAction";

const initialState = {
  projectData: [],
  profileData: [],
  profileKey: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "public-projects":
      console.log("Project payload: ", action.payload);
      return {
        ...state,
        projectData: action.payload,
      };
    case "organization":
      console.log("Profile payload: ", action.payload);
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
    case SET_ORGANIZATION_PROFILE:
      return{
        ...state,
        profileData: action.profileData,
        projectData: action.profile_projectData
      }
    
    default:
      return {
        projectData: action.type,
        profileData: action.type,
        profileKey: undefined,
      };
  }
};
