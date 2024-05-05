import { Fragment } from "react";
import classes from "./Header.module.css";
import logo from "../../assests/avc.png";
import mainheaderImage from "../../assests/Group 2 (9).png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <div className={classes["logo"]}>
            <img src={logo} alt="A table full of delicious food!" />
          </div>
        </h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;
