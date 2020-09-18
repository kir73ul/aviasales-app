import { combineReducers } from 'redux';
import transfersFilter from './transfersFilter';
import priorityFilter from './priorityFilter';
import * as ticketsReducers from './ticketsReducers';

const rootReducer = combineReducers({ transfersFilter, priorityFilter, ...ticketsReducers });

export default rootReducer;
