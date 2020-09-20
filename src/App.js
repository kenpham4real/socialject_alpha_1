import React from "react";
import MainRoute from "./routes/MainRoute";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import { projectReducer } from "./store/reducers/posting-project-user/project/project";
import { activityReducer } from "./store/reducers/posting-project-user/activity/activity";
import { CreatePageReducer } from "./store/reducers/posting-project-user/profile/CreatePageReducer";
import { landingReducer } from "./store/reducers/searching-project-user/landing/landingReducer";
import { profileReducer } from "./store/reducers/posting-project-user/profile/profileReducer";

// Adding reducers here
const rootReducer = combineReducers({
  projectReducer: projectReducer,
  activityReducer: activityReducer,
  createPageReducer: CreatePageReducer,
  landingReducer: landingReducer,
  profileReducer: profileReducer,
});

// Initialize Redux store
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
