/*
 * Action Types
 */
export const types = {
  HYDRATE: 'HYDRATE'
};


/*
 * Action Creators
 */
export function hydrate() {
  return {
    type: types.HYDRATE
  };
};
