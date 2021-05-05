//React component
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Component By Me
import WrapperLoader from "src/Component/wrapper-loader/WrapperLoader.component";
import ShopItems from "../shop-items/ShopItems.component";
import { getShopDataAsync } from "src/redux/shop/shop.actions";
//STYLES
import styles from "./shop-preview.module.scss";

const Shop = ({ history }) => {
  const { categories, isLoading, shopIsLoading, shopData } = useSelector(
    (store) => store.shop
  );
  // const [shopState, setShopState] = useState([]);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getShopData = async () => {
  //       try {
  //           const result = await axios.get("shop");
  //           const { data } = result;
  //           setShopState(data);
  //       } catch (error) {
  //         dispatch(setGlobalErrorMessage())

  //           console.log(error.message);
  //       } finally {
  //           // TODO --> TURN OFF LOADER
  //       }
  //   };
  //   getShopData();
  // })

  useEffect(() => {
    dispatch(getShopDataAsync());
  }, [dispatch]);

  const handleShopCategoryClick = (category) => {
    history.push(`/shop/${category}`);
  };

  //const categories = [ "mens","womens",  "jackets", "sneakers","hats"  ];

  const categoriesList = categories.map((category) => category.routeName);

  return (
    <WrapperLoader isLoading={isLoading || shopIsLoading}>
      <div className={styles.container}>
        {categoriesList.map((category) => {
          const filteredData = shopData.filter(
            (shopItem) => shopItem.category === category
          );
          return (
            <ShopItems
              key={category}
              category={category}
              data={filteredData.slice(0, 4)}
              handleShopCategoryClick={() => {
                handleShopCategoryClick(category);
              }}
            />
          );
        })}
      </div>
    </WrapperLoader>
  );
};

export default Shop;
