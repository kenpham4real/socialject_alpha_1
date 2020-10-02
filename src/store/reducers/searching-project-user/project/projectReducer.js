// Firebase database

import { PROJECT_DETAILS } from "../../../actions/searching-project-user/project/projectAction";

//Initial state:
const initialState = {
  projectsData: {
    projectInfo: {},
    projectDetail: {
      benefits: [],
      requirements: [],
      questions: [],
    },
    projectProgress: [],
  },
  upDataForm: [],

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
      return state;
  }
};

