import postFirebase from '../../api/firebase';

export const GET_BRIEF_FETCHING = 'GET_MY_PROFILE/FETCHING';
export const GET_BRIEF_SUCCESS = 'GET_MY_PROFILE/SUCCESS';
export const GET_BRIEF_ERROR = 'GET_MY_PROFILE/ERROR';

const answersFetching = () => ({
  type: GET_BRIEF_FETCHING,
});

const answersSuccess = (data) => ({
  type: GET_BRIEF_SUCCESS,
  payload: data,
});

const answersError = (error) => ({
  type: GET_BRIEF_ERROR,
  payload: error,
});

export const getAnswers = () => async (dispatch) => {
  dispatch(answersFetching());
  try {
    const { data } = await postFirebase.get('/answers.json');

    dispatch(answersSuccess(data));
  } catch (error) {
    dispatch(answersError(error));
  }
};
