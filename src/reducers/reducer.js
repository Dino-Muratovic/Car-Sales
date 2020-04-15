export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


  //Everytime parameter is undefined set the parameter to current state example const reducer = (state = initialState, action) =>
const reducer = (state = initialState, action) => {
    //Switch statement
    //if or else if blocks become cases
    switch(action.type) {
        case "Add Item":
            return {
                ...state,
            }
        case "Remove Item":
            return {
                state
            }  
        case "Update Cost":
            return {
                state
            }  
        default:
            return state;         
    }    
};

export default reducer;