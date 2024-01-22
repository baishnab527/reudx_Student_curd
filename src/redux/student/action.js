import axios from "axios";
import { GET_STUDENT_FULLFILLED, GET_STUDENT_PENDING, GET_STUDENT_REJECTED } from "./actionType"

// get student data form data base;
 export const getAllStudent = () => async (dispatch) =>{
   try{
    dispatch({type: GET_STUDENT_PENDING});

    const response  = await axios.get("http://localhost:5050/students");
    dispatch({type: GET_STUDENT_FULLFILLED, payload: response.data});
    
    console.log(response);

   }catch (error) {
    dispatch({type: GET_STUDENT_REJECTED});
   }
}

