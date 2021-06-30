import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  const numberOfCartItems = items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
