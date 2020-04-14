import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {initialState} from './reducers/reducer';


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

export default App;
