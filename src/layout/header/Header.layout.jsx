// REACT COMPONENTS
import { ReactComponent as CrownSvg } from "src/assets/crown.svg";
import { ReactComponent as BagSvg } from "src/assets/shopping-bag.svg";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
//COMPONENT CREATE BY  ME
import CartDropDown from "./component/cart-dropdown/CartDropDown.component";
import countShopItems from "./utils/countShopItems.util";
import { clearUserData } from "src/redux/auth/auth.actions";
//STYLES
import styles from "./header.module.scss";

const Header = (props) => {
  const history = useHistory();
  const { shopItemsCount, user, clearUserData } = props;

  const handleClick = () => {
    history.push("/home");
  };
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);
  const handleSignInSignOutClick = () => {
    if (!user) {
      history.push("/auth");
    } else {
      //TO DO CLEAR USER  DATA
      clearUserData();
    }
  };
 
  return (
    <header className={styles.header}>
      <CrownSvg onClick={handleClick} className="u-cursor--pointer" />
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.item}>
          Shop
        </Link>
        <Link to="/contacts" className={styles.item}>
          Contacts
        </Link>
        <div className={styles.item} onClick={handleSignInSignOutClick}>
          {!user ? "Sign In" : "Sign Out "}
        </div>
        {user && (
          <OutsideClickHandler
            disabled={!cartIsOpen}
            onOutsideClick={toggleCartDropdown}
          >
            <div className={styles.item}>
              <div className={styles.cart} onClick={toggleCartDropdown}>
                <BagSvg className={styles.bag} />
                {!!shopItemsCount && (
                  <span className={styles.count}>{shopItemsCount}</span>
                )}
              </div>
              {cartIsOpen && <CartDropDown toggleCartDropdown={toggleCartDropdown} />}
            </div>
          </OutsideClickHandler>
        )}
      </nav>
    </header>
  );
};
const mapStateToProps = (store) => ({
  shopItemsCount: countShopItems(store.shop.favorites),
  user: store.auth.user,
});
const mapDispatchToProps = { clearUserData };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
