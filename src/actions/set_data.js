/*
 * Action Types
 */
export const types = {
  SET_DATA: 'SET_DATA'
};


/*
 * Action Creators
 */
export function setData(data) {
  return {
    type: types.SET_DATA,
    data
  };
}
