import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import amount from './amount';

const rootReducer = combineReducers({
  amount,
  form: formReducer
});

export default rootReducer;