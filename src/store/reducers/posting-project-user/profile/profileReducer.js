import {
  SET_ORGANIZATION_PROFILE,
  CREATE_PROFILE,
} from '../../../actions/posting-project-user/profile/profileAction';
// Firebase database
import { PROJECT_FILTER } from "../../../actions/posting-project-user/profile/profileAction";

//Initial state:
const initialState = {
  projectArray: [],
  profileData: {},
};

/******************************** REDUCER ********************************/
//Save the data onto global store
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_FILTER:
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

      /*if (temporary[count].orgId != tempId) {
          temporary.splice(count, 1);
          count--;
        }*/

      return {
        ...state,
        profileData: action.payload.profileData,
        projectArray: arrayToPush,
      };
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
        projectData: undefined,
      };
  }
};
