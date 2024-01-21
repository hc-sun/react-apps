import { useContext } from "react";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const cartItemsCount = cartCtx.items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="FoodShop" />
        <h1>FoodShop</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart ({cartItemsCount})</Button>
      </nav>
    </header>
  );
}
