import { combineReducers } from 'redux';
import checkboxSwitcher from './checkboxSwitcher';
import priorityFilter from './priorityFilter';
import * as ticketsReducers from './ticketsReducers';

const rootReducer = combineReducers({ checkboxSwitcher, priorityFilter, ...ticketsReducers });

export default rootReducer;
