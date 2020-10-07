// Firebase database
import { FETCH_LANDING } from "../../../actions/searching-project-user/landing/landingAction";

//Initial state:
const initialState = {
  projectData: [],
};

/******************************** REDUCER ********************************/
//Save the data onto global store
export const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANDING:
      console.log("Project array payload: ", action.payload);
      return {
        ...state,
        projectData: action.payload,
      };
    default:
      return {
        projectData: [],
      };
  }
};
