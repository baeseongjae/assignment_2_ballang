import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_COUNT,
} from "../actions/cart.actions";

const initialState = {
  items: [],
  totalPrice: 0,
  discountAmount: 0,
  amountToPay: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      // 카운트 속성 초기화
      const itemToAddCart = {
        ...action.payload,
        count: 1,
      };

      // 기존 상품데이터 복사본
      const newItems = [...state.items];

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemToAddCart.id
      );

      // 기존 상품과 일치한다면
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          count: existingItem.count + 1,
        };
        newItems[existingItemIndex] = updatedItem;
      } else {
        newItems.push({ ...itemToAddCart, count: 1 });
      }

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
      const itemIdToRemove = action.payload;
      const newItems = state.items.filter((item) => item !== itemIdToRemove);

      const newState = {
        ...state,
        items: newItems,
      };
      return newState;
    }

    case UPDATE_ITEM_COUNT: {
      const { item, count } = action.payload;
      const newItems = state.items.map((prev) => {
        if (prev.id === item.id) {
          return { ...prev, count: count };
        }
        return prev;
      });

      // 금액 계산로직
      const totalPrice = newItems.reduce(
        (total, item) => total + item.consumer * item.count,
        0
      );
      const discountAmount = newItems.reduce(
        (total, item) =>
          total + ((item.consumer * item.sale_percent) / 100) * item.count,
        0
      );
      const amountToPay = totalPrice - discountAmount;

      const newState = {
        ...state,
        items: newItems,
        totalPrice,
        discountAmount,
        amountToPay,
      };

      return newState;
    }
    default:
      return state;
  }
}
