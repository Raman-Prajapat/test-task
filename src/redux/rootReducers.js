import { combineReducers } from 'redux';
import toastReducer from "./reducers/toastReducer";
import productReducer from "./reducers/productReducer"

const rootReducer = combineReducers({
  toastReducer,
  productReducer,
});

export default rootReducer;

