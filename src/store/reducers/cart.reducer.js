import { ADD_ITEM, REMOVE_ITEM } from "../actions/cart.actions";

const initialState = {
  items: [],
  totalPrice: 0,
  discountAmount: 0,
  amountToPay: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const ItemToAddCart = action.payload;
      const newItems = [...state.items, ItemToAddCart];

      const newState = {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + action.payload.consumer,
        discountAmount:
          state.discountAmount +
          (action.payload.consumer * action.payload.sale_percent) / 100,
        amountToPay: state.amountToPay + action.payload.price,
      };
      return newState;
    }
    case REMOVE_ITEM: {
      const ItemIdToRemove = action.payload;
      const newItems = state.items.filter((item) => item !== ItemIdToRemove);

      const newState = {
        ...state,
        items: newItems,
      };
      return newState;
    }
    default:
      return state;
  }
}
