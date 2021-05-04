import styles from "./ShopItem.module.scss";
const ShopItem = (props) => {
  const { shopItem,handleShopItemClick } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={shopItem.imageUrl} alt="shopImg"  className={styles.image}/>
        <button className={styles.btn} onClick={handleShopItemClick}>Add To Cart</button>
      </div>
      <div className={styles.info}>
        <span>{shopItem.name}</span>
        <span>{shopItem.price}</span>
      </div>
    </div>
  );
};

export default ShopItem;
