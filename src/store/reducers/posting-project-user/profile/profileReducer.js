import {
  SET_ORGANIZATION_PROFILE,
  CREATE_PROFILE
} from '../../../actions/posting-project-user/profile/profileAction';

const initialState = {
  projectData: [],
  profileData: [],
  profileKey: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return({
          ...state,
          createProfile: action.finishCreate,
      })
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
