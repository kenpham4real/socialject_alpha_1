// Firebase database
import { UP_DATA_FORM } from "../../../actions/searching-project-user/project/project";
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

//Save the data of the Application Form to global store
export const upDataFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UP_DATA_FORM:
      console.log("Project array payload: ", action.upDataForm);
      return {
        ...state,
        projectData: action.upDataForm,
      };
    default:
      return state;
  }
};
