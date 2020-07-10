const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  console.log(action, 'reducerPizzas');
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default pizzas;
