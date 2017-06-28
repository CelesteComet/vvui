import { createStore, combineReducers } from 'redux';
import DefectReducer from './reducers/defectReducers';

const RootReducer = combineReducers({
  DefectReducer
});

const Store = createStore(RootReducer);

export default Store;