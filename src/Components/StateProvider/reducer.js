export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; //basket copy
      if (index >= 0) {
        newBasket.splice(index, 1); //why do we use splice?
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id} as it is not in basket!)`
        ); //what is the use of this?
      }
      return {
        ...state,
        basket: newBasket,
      };
      case 'SET_USER':
        return{
          ...state,
          user: action.user,
        }

        case 'EMPTY_BASKET':
          return{
            ...state, 
            basket: [],
          }

    default:
      return state;
  }
};
export default reducer;

//... this speread operator also called rest operator if it is used inside a function.
