import {
  GET_BRIEF_FETCHING,
  GET_BRIEF_SUCCESS,
  GET_BRIEF_ERROR,
} from '../actionCreator/getAnswers';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const getAnswers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRIEF_FETCHING: {
      return { ...state, loading: true, error: null };
    }
    case GET_BRIEF_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    }
    case GET_BRIEF_ERROR: {
      return { ...state, payload, loading: true };
    }
    default:
      return initialState;
  }
};

export default getAnswers;