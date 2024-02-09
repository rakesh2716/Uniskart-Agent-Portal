import {NEW_STUDENT_REQUEST,NEW_STUDENT_SUCCESS,NEW_STUDENT_FAILED,GET_ALL_STUDENT_REQUEST,GET_ALL_STUDENT_SUCCESS} from '../_types';
const initialState = {
  newStudentRes: {},
  loading: false,
  error: null,
};

const NewStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case NEW_STUDENT_SUCCESS:
      alert("ddd")
      return {
        ...state,
        newStudentRes: action.payload,
        loading: false,
        error: null,
      };

    case NEW_STUDENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case GET_ALL_STUDENT_REQUEST:
    
        return {
          ...state,
          loading: true,
          error: null,
        };
        case GET_ALL_STUDENT_SUCCESS:
          return {
            ...state,
            newStudentRes: action.payload,
            loading: false,
            error: null,
          };

    default:
      return state;
  }
};

export default NewStudentReducer;
