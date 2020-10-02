import {
  SET_ORGANIZATION_PROFILE,
  CREATE_PROFILE,
  FETCH_PROFILE
} from '../../../actions/posting-project-user/profile/profileAction';

//Initial state:
const initialState = {
  projectArray: [],
  profileData: {},
};

/******************************** REDUCER ********************************/
//Save the data onto global store
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      let count = 0;
      let arrayToPush = [];
      console.log("Project filtered payload: ", action.payload.projectArray);
      console.log("Profile data fetched: ", action.payload.profileData);
      const tempId = action.payload.profileData.orgId;
      console.log("Temp Id: ", tempId);
      action.payload.projectArray.map((tempo) => {
        console.log("Project has the Id: ", tempo.orgId);
        if (tempo.orgId == tempId) {
          console.log("Saved");
          arrayToPush[count] = tempo;
          count++;
        }
      });
      console.log("Array to push is:", arrayToPush);

      return {
        ...state,
        profileData: action.payload.profileData,
        projectArray: arrayToPush,
      };
      case CREATE_PROFILE:
        return({
            ...state,
            profileData: action.orgProfile,
        })
      case SET_ORGANIZATION_PROFILE:
        return{
          ...state,
          profileData: action.profileData,
          projectData: action.profile_projectData
        }
    default:
      return {
        projectData: {},
        profileData: {},
        projectArray: [],
      };
  }
};
