/*
 * Action Types
 */
export const types = {
  SET_REQUEST_TIMESTAMP: 'SET_REQUEST_TIMESTAMP'
};


/*
 * Action Creators
 */
export function setRequestTimestamp(timestamp) {
  return {
    type: types.SET_REQUEST_TIMESTAMP,
    timestamp
  };
}

