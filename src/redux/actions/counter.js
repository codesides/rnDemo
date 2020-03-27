import * as types from '../actionTypes';

export const _increment = (number = 1) => ({
  type: types.INCREMENT,
  payload: {
    number,
  },
});

export const _decrease = (number = 1) => {
  return dispatch => {
    dispatch({
      type: types.DESCREASE,
      payload: {
        number,
      },
    });
  };
};
