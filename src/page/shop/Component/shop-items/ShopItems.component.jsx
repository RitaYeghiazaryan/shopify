import classNames from "classnames";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorites, setModalState } from "src/redux/shop/shop.actions";
import ShopItem from "../shop-item/ShopItem.component";

//STYLES
import styles from "./ShopItems.module.scss";

const ShopItems = (props) => {
  const { category, data, handleShopCategoryClick, user } = props;
  const dispatch = useDispatch();
  const titleClasses = classNames({
    [styles.title]: true,
    "u-cursor--pointer": !!handleShopCategoryClick,
  });
  const handleAddClick = (shopItem) => {
    if (user) dispatch(addToFavorites(shopItem));
    else dispatch(setModalState(true));
  };

  return (
    <div className={styles.container}>
      <h1 onClick={handleShopCategoryClick} className={titleClasses}>
        {category}
      </h1>
      <div className={styles.list}>
        {data.map((shopItem) => {
          return (
            <div>
              <ShopItem
                key={shopItem._id}
                shopItem={shopItem}
                handleShopItemClick={() => handleAddClick(shopItem)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (store) => ({
  user: store.auth.user,
});

export default connect(mapStateToProps)(ShopItems);
