import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'; // we need createStore // part of STEP 1
import reducer from './reducers/reducer'; // we need reducer // part of STEP 1
import { Provider } from 'react-redux'; // bridge piece -- this is to get the stuff from REDUX store // part of STEP 1

import 'bulma/css/bulma.css';
import './styles.scss';



//STEP 1 - SET UP REDUX STORE
//Create redux store and connect it to our React App
const store = createStore(reducer);
console.log(`this is REDUX store :`, store);
console.log(`this is our STATE stored in REDUX :`, store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>, rootElement);
