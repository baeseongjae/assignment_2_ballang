export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";
export const UPDATE_ITEM_COUNT = "cart/updateItemCount";

export const addItemActionCreator = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemActionCreator = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const updateItemCountActionCreator = (item, count) => ({
  type: UPDATE_ITEM_COUNT,
  payload: {
    item,
    count,
  },
});
