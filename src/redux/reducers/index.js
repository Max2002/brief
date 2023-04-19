import { combineReducers } from 'redux';
import postBrief from './postBrief';
import getAnswers from "./getAnswers";

export const rootReducer = combineReducers({ postBrief, getAnswers });