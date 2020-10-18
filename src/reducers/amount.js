import { UPDATE_AMOUNT } from '../constant/actionTypes';

const initState = {
  hunreds: 0,
  fifties: 0,
  twenties: 0,
  tens: 0,
  fives: 0,
  ones: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
}

const amount = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default amount;