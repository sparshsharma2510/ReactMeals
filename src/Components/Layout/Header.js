import { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food images" />
      </div>
    </Fragment>
  );
};

export default Header;
