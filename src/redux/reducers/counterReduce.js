import * as types from '../actionTypes';

const initialState = {
  counter: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT: {
      const {number} = action.payload;
      let counter = state.counter + number;
      return {...state, counter};
    }
    case types.DESCREASE: {
      const {number} = action.payload;
      let counter = state.counter - number;
      return {...state, counter};
    }
    default:
      return state;
  }
}
