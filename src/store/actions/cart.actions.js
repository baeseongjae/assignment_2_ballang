export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";

export const addItemActionCreator = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemActionCreator = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});
