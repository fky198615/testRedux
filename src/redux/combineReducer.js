import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import shoppingCartReducer from '../redux/reducer/shoppingCartReducer';

const middleware = [thunk];

const reducers = combineReducers({
    shoppingCartReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; 