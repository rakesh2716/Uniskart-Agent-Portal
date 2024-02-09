import * as actionTypes from '../_types';
const initialState = {
  searchData: '',
  loading: false,
  error: null,
};

const searchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PROGRAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.SEARCH_PROGRAM_SUCCESS:
      return {
        ...state,
        searchData: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.SEARCH_PROGRAM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchDataReducer;
