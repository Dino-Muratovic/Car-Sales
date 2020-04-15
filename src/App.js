import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {initialState} from './reducers/reducer';
import { connect } from 'react-redux'; // part of STEP 2


//STEP 2 --CONNECT THE COMPONENT TO THE REDUX STORE

const App = () => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={initialState.car} />
        <AddedFeatures car={initialState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={initialState.additionalFeatures} />
        <Total car={initialState.car} additionalPrice={initialState.additionalPrice} />
      </div>
    </div>
  );
};

//wrap the component export in the connect function 
// call connect twice!
//Pass the component that we want to connect into the second call
// The first call will take in a function and an object
//The function returns an object
//Any property on the returned object gets added to the component props!
//the function is normally "abstracted" out of connect call
//and named mapStateToProps

const mapStateToProps = state => { // this state object here comes from REDUX STORE
  console.log(`this is state`, state)
return {
  additionalFeatures: state.additionalFeatures,
  additionalPrice: state.additionalPrice,
  car: state.car
 };
}



export default connect(
    //  state => { // this state object here comes from REDUX STORE // this function is passed to mapStateProps
    //    console.log(`this is state`, state)
    //  return {
    //    additionalFeatures: state.additionalFeatures,
    //    additionalPrice: state.additionalPrice,
    //    car: state.car
    //   };
    //  }
    mapStateToProps,
     {}
     )(App); // this is called function currying in JS
