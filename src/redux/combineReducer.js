import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import shoppingCartReducer from '../redux/reducer/shoppingCartReducer';

const reducers = combineReducers({
    shoppingCartReducer: shoppingCartReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store; 