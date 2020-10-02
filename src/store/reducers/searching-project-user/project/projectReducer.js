// Firebase database

import { PROJECT_DETAILS } from "../../../actions/searching-project-user/project/projectAction";

//Initial state:
const initialState = {
  projectsData: {},
};

/******************************** REDUCER ********************************/
//Save the data onto global store
export const projectReducerSPU = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_DETAILS:
      console.log("Project array payload: ", action.payload);
      return {
        ...state,
        projectsData: action.payload,
      };
    default:
      return {
        projectsData: {
          projectInfo: {},
          projectDetail: {
            benefits: [],
            requirements: [],
            questions: [],
          },
          projectProgress: [],
        },
      };
  }
};

