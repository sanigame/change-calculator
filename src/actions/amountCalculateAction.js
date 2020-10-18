import { UPDATE_AMOUNT } from '../constant/actionTypes';

const tenLogic = (amount) => {
  if (amount >= 90) {
    return 9
  } else if (amount >= 70) {
    return 7
  } else if (amount >= 50) {
    return 5
  } else if (amount >= 40) {
    return 4
  } else {
    return 2
  }
}

const amountCalculateAction = (amount) => {
  return dispatch => {
    const data = {
      hunreds: Number.parseFloat(Math.floor(amount / 100).toFixed(2)),
      fifties: Number.parseFloat(Math.floor((amount / 50) % 2).toFixed(2)),
      twenties: Number.parseFloat(Math.floor((amount / 20) % 2.5).toFixed(2)),
      tens: Number.parseFloat(Math.floor((amount / 10) % tenLogic(+amount % 100)).toFixed(2)),
      fives: Number.parseFloat(Math.floor((amount / 5) % 2).toFixed(2)),
      ones: Number.parseFloat(Math.floor(amount % 5).toFixed(2)),
      quarters: Number.parseFloat(Math.floor(((amount * 100) % 100) / 25).toFixed(2)),
      dimes: Number.parseFloat(Math.floor((((amount * 100) % 100) % 25) / 10).toFixed(2)),
      nickels: Number.parseFloat(Math.floor(((((amount * 100) % 100) % 25) % 10) / 5).toFixed(2)),
      pennies: Number.parseFloat(Math.floor((amount * 100) % 5 + 0.01).toFixed(2))
    }

    dispatch({ type: UPDATE_AMOUNT, payload: data });
  }
}

export default amountCalculateAction;