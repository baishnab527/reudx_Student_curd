import { CREATE_STUDENT_FULLFILLED, CREATE_STUDENT_PENDING, GET_STUDENT_FULLFILLED, GET_STUDENT_PENDING, GET_STUDENT_REJECTED } from "./actionType";
import initialState from "./initialState";

// create a studentReducer ;
const studentReducer = (state = initialState, action) =>{

    switch(action.type){
   
        case GET_STUDENT_PENDING:
            return{
               ...state, 
               loading:true,
            };

        case GET_STUDENT_FULLFILLED:
            return{
                ...state,
                loading: false,
                students: action.payload,
                message: "Student Data get success "
            }

        case GET_STUDENT_REJECTED:
            return{
                ...state,
                loading: false,
                error: "Studet data Faild",
            }


            // create student data here;
            case CREATE_STUDENT_PENDING:
                return{
                    ...state, 
                    loading: true,
                }

            case CREATE_STUDENT_FULLFILLED:
                return{
                    ...state,
                    loading: false,
                    
                }
    

        default:
            return state;
    }
}

// export default StudentReducer;
export default studentReducer;