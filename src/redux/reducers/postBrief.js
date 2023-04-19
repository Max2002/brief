import {
  POST_BRIEF_ERROR,
  POST_BRIEF_SUCCESS,
  POST_BRIEF_FETCHING,
  RECOVER_CODE,
} from '../actionCreator/postBrief';

const initialState = {
  code: '',
  loading: false,
  error: null,
};

const postBrief = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_BRIEF_FETCHING: {
      return { ...state, loading: true, error: null };
    }
    case POST_BRIEF_SUCCESS: {
      return {
        ...state,
        code: payload,
        loading: false,
        error: null,
      };
    }
    case POST_BRIEF_ERROR: {
      return { ...state, payload, code: '404', loading: true };
    }
    case RECOVER_CODE: {
      return { ...state, code: '' };
    }
    default:
      return initialState;
  }
};

export default postBrief;