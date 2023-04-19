import { createSelector } from 'reselect';

const answersSelector = (state) => state.getAnswers;

export const allAnswersSelector = createSelector(
  answersSelector,
  (getAnswers) => getAnswers.data,
);