import {
  SET_PROJECT,
  ADD_NAME,
  ADD_DESCRIPTION,
  ADD_LOCATION,
  ADD_DEADLINE,
  ADD_QUESTION,
  ADD_BENEFIT,
  ADD_REQUIREMENT,
  ADD_AVATAR,
} from "../../../actions/posting-project-user/project/project";

const initialState = {
  projects: [],
  name: null,
  description: null,
  location: null,
  deadline: null,
  question: null,
  benefit: null,
  requirement: null,
  avatar: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        projects: action.projectData,
      };
    case ADD_NAME:
      console.log("Name dispatched.");
      return {
        ...state,
        name: action.payload,
      };
    case ADD_DESCRIPTION:
      console.log("Description dispatched.");
      return {
        ...state,
        description: action.payload,
      };
    case ADD_LOCATION:
      console.log("Location dispatched.");
      return {
        ...state,
        location: action.payload,
      };
    case ADD_DEADLINE:
      console.log("Deadline dispatched.");
      return {
        ...state,
        deadline: action.payload,
      };
    case ADD_QUESTION:
      return {
        ...state,
        question: action.payload,
      };
    case ADD_BENEFIT:
      return {
        ...state,
        benefit: action.payload,
      };
    case ADD_REQUIREMENT:
      return {
        ...state,
        requirement: action.payload,
      };
    case ADD_AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};
