import { createSelector } from 'reselect';

const briefSelector = (state) => state.postBrief;

export const codeSelector = createSelector(
  briefSelector,
  (postBrief) => postBrief.code,
);