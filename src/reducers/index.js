import { combineReducers }         from 'redux';
import { requestTimestampReducer } from './request_timestamp';
import { setDataReducer } from './set_data';


const defaultReducer = combineReducers({
  requestTimestamp: requestTimestampReducer,
  data:             setDataReducer
});


export default function(state = {}, action) {
  return defaultReducer(state, action);
}
