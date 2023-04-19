import postFirebase from '../../api/firebase';

export const POST_BRIEF_FETCHING = 'GET_MY_PROFILE/FETCHING';
export const POST_BRIEF_SUCCESS = 'GET_MY_PROFILE/SUCCESS';
export const POST_BRIEF_ERROR = 'GET_MY_PROFILE/ERROR';
export const RECOVER_CODE = 'RECOVER_CODE';

const briefFetching = () => ({
  type: POST_BRIEF_FETCHING,
});

const briefSuccess = (code) => ({
  type: POST_BRIEF_SUCCESS,
  payload: code,
});

const briefError = (error) => ({
  type: POST_BRIEF_ERROR,
  payload: error,
});

export const recoverCode = () => ({
  type: RECOVER_CODE,
});

export const postBrief = (data) => async (dispatch) => {
  dispatch(briefFetching());
  try {
    const { data: response } = await postFirebase.post('/answers.json', { data });

    dispatch(briefSuccess(response ? '200' : ''));
  } catch (error) {
    dispatch(briefError(error));
  }
};
