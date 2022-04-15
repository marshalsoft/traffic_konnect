import { createStore, combineReducers } from 'redux';
import Reducer from './Reducer';

const rootReducer = combineReducers({
    Reducer: Reducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;