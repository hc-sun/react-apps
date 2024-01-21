import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // check if item already exists in cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // a copy of the existing items
    const updatedItems = [...state.items];

    // if item already exists in cart, update quantity
    if (existingCartItemIndex !== -1) {
      const existingCartItems = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItems,
        quantity: existingCartItems.quantity + 1,
      };

      // replace existing item with updated item quantity
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // if new action tem doesn't exist in cart, add it with quantity of 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    // overwrite existing state with updated items
    return { ...state, items: updatedItems };
  }
}

export function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
