import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import shoppingCartReducer from '../redux/reducer/shoppingCartReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e);
    }
}

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined
        }else{
            return JSON.parse(serializedState)
        }
    }catch(e){
        console.log(e);
        return undefined
    }
}

const reducers = combineReducers({
    shoppingCartReducer: shoppingCartReducer
})

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;