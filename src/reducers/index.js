import { combineReducers }         from 'redux';
import { requestTimestampReducer } from './request_timestamp';


const defaultReducer = combineReducers({
  requestTimestamp: requestTimestampReducer
});


export default function(state = {}, action) {
  return defaultReducer(state, action);
}
