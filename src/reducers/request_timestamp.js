import { types } from '../actions/request_timestamp';


function setRequestTimestamp(state, action) {
  return action.requestTimestamp;
}


export function requestTimestampReducer(state = 0, action) {
  if (action.type === types.SET_REQUEST_TIMESTAMP) {
    return setRequestTimestamp(state, action);
  }

  return state;
}
