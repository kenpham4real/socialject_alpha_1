import React from "react";
import MainRoute from "./routes/MainRoute";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// This reducer is just an example. Take a look at the guide in the store/reducers/guide.doc
import { projectReducer } from "./store/reducers/posting-project-user/project/example";
import { profileReducer } from "./store/reducers/posting-project-user/profile/profileReducer";
import { activityReducer } from "./store/reducers/posting-project-user/activity/activity";


// Adding reducers here
const rootReducer = combineReducers({
  // Profile
  profileReducer: profileReducer,
  // Project
  projectReducer: projectReducer,
  // Activity
  activityReducer: activityReducer
});

})


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
