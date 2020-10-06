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
      const project = action.payload;
      console.log("Project array payload: ", project);
      if (!project.projectDetail.benefits) project.projectDetail.benefits = [];
      if (!project.projectDetail.requirements)
        project.projectDetail.requirements = [];
      if (!project.projectDetail.questions)
        project.projectDetail.questions = [];
      return {
        ...state,
        projectsData: project,
      };
    default:
      return state;
  }
};
