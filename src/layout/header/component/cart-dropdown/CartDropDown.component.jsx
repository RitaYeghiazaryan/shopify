// REACT COMPONENTS
import { connect } from "react-redux";
import { useHistory } from "react-router";
//BASE COMPONENT
import Button from "src/Component/Button/button.component";

//STYLES
import styles from "./CartDropDown.module.scss";

//ASSETS
import happyGirl from "src/assets/shopGirl.jpg";

const CartDropDown = (props) => {
  const { shopItems,toggleCartDropdown } = props;
  const history = useHistory();
  const handleCheckoutClick = () => {
    history.push("/checkout");
    toggleCartDropdown()
  };

  return (
    <div className={styles.container}>
      {shopItems.length ? (
        <>
          <div className={styles.itemsWrapper}>
            {shopItems.map((shopItem) => {
              return (
                <div key={shopItem._id} className={styles.cartItem}>
                  <img
                    className={styles.image}
                    src={shopItem.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className={styles.name}>{shopItem.name}</div>
                    <div>
                      {shopItem.count} x ${shopItem.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Button onClick={handleCheckoutClick}> Go To Checkout</Button>
        </>
      ) : (
        <div className={styles.emptyWrapper}>
          <div className={styles.text}>Your Cart Is Empty</div>
          <img src={happyGirl} className={styles.womenImg} alt="" />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => ({
  shopItems: store.shop.favorites,
});
export default connect(mapStateToProps)(CartDropDown);
