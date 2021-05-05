//REACT COMPONENTS
import { useSelector } from "react-redux";
import { Route } from "react-router";
//MY COMPONENTS
import ShopCategory from "./Component/shop-category/ShopCategory.component.jsx";
import ShopModal from "./Component/shop-modal/ShopModal.component.jsx";
import ShopPreview from "./Component/shop-preview/ShopPreview.component.jsx.jsx";

//STYLES
import styles from "./shop.module.scss";

const Shop = () => {
  const { modalIsShown } = useSelector((store) => store.shop);
  return (
    <div className={styles.container}>
      <Route exact path="/shop" component={ShopPreview} />
      <Route path="/shop/:category" component={ShopCategory} />
      {modalIsShown && <ShopModal />}
    </div>
  );
};

export default Shop;
