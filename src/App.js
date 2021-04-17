import React from "react";
import MainRoute from "./routes/MainRoute";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { projectReducer } from "./store/reducers/posting-project-user/project/project";
import { projectReducerSPU } from "./store/reducers/searching-project-user/project/projectReducer";
import { activityReducer } from "./store/reducers/posting-project-user/activity/activity";
import { landingReducer } from "./store/reducers/searching-project-user/landing/landingReducer";
import { profileReducer } from "./store/reducers/posting-project-user/profile/profileReducer";
import { authReducer } from "./store/reducers/auth/auth";
import { autoLoginReducer } from "./store/reducers/auth/autoLoginReducer";

// Adding reducers here
const rootReducer = combineReducers({
  projectReducer: projectReducer,
  projectReducerSPU: projectReducerSPU,
  activityReducer: activityReducer,
  landingReducer: landingReducer,
  profileReducer: profileReducer,
  authReducer: authReducer,
  autoLoginReducer: autoLoginReducer,
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
