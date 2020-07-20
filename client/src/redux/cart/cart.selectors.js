import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accum, carItem) => accum + carItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (carrItems) =>
  carrItems.reduce(
    (accum, carItem) => accum + carItem.quantity * carItem.price,
    0
  )
);
