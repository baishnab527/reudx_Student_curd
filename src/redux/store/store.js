import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";


// create all midler were ;
const middleWare = [thunk];

// create a store;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

// export defualt store;
export default store;
