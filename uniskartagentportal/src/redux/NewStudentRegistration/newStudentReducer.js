import * as actionTypes from '../_types';
const initialState = {
  newStudentRes: {},
  loading: false,
  error: null,
};

const NewStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.NEW_STUDENT_SUCCESS:
      return {
        ...state,
        newStudentRes: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.NEW_STUDENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default NewStudentReducer;
