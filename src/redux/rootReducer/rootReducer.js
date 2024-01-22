import { combineReducers } from "redux";
import studentReducer from "../student/studentReducer";

// create a root reducer ;
const rootReducer = combineReducers(
    {
       student: studentReducer, 
    }
);


// export default rootReducer ;
export default rootReducer;