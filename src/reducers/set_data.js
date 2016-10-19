import request   from 'superagent';

import { setData as setDataAct, types } from '../actions/set_data';


function setData(state, action) {
  return action.data;
}


export function setDataReducer(state = [], action) {
  if (action.type === types.SET_DATA) {
    return setData(state, action);
  }

  return state;
}


export function receiveCollection(collection) {
  return function(dispatch) {
    dispatch(
      setDataAct(collection)
    );
  }
}


export function fetchData(url) {
  return function(dispatch) {
    request
      .get(url)
      .end((err, res) => {
        if (!err) {
          const photos = JSON.parse(res.text);
          dispatch(receiveCollection(photos));
        }
      });
  }
}
