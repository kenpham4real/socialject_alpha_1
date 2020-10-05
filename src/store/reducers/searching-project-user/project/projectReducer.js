// projectReducer.js

// Firebase database

import { SET_PROJECT_RECRUIT_INFO } from "../../../actions/searching-project-user/project/projectAction";

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
    case SET_PROJECT_RECRUIT_INFO:
      console.log("Project array payload: ", action.payload);
      return {
        ...state,
        projectsData: action.payload,
      };
    default:
      return state;
  }
};

