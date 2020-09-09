import React from "react";
import MainRoute from "./routes/MainRoute";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

// This reducer is just an example. Take a look at the guide in the store/reducers/guide.doc
import { projectReducer } from "./store/reducers/posting-project-user/project/example";

const rootReducer = combineReducers({
  // An example
  projectReducer: projectReducer,
});

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
