import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/header";
import './App.css'
import HomePage from "./pages/homePage";
import Register from "./component/register";
import SignIn from "./component/signIn";
import CategoryPage from "./pages/categoryPage";
import Category1Page from "./pages/category1Page";
import Category2Page from "./pages/category2Page";
import Category3Page from "./pages/category3Page";
import Footer from "./component/footer";

import {ProductPage} from "./pages/productPage";
import Cart from "./component/cart";
import Product from "./component/product";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store from "../src/redux/combineReducer";
import persistor from "../src/redux/combineReducer";


function App() {
    const stateInCart = useSelector(state => state.shoppingCartReducer);
    console.log("stateInCart app.js,",stateInCart);
    
    const [state, setState] = useState(stateInCart);
    
    return (
        <Router>
            <Header/>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/signIn' exact component={SignIn}/>
                    <Route path='/categoryPage' exact component={CategoryPage}/>
                    <Route path='/category1Page' exact component={Category1Page}/>
                    <Route path='/category2Page' exact component={Category2Page}/>
                    <Route path='/category3Page' exact component={Category3Page}/>
                    <Route path='/productPage' component={ProductPage} />
                    <Route path='/cart' render={(props)=>(
                        <Cart {...props} items = {state} />
                    )}/>
                    <Router path='/product/:id' component={Product}/>
                </Switch>
                <Footer />
        </Router>
    );
}

export default App;
