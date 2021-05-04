import axios from "axios";
import { useState, useEffect } from "react";
import ShopItems from "../shop-items/ShopItems.component";

const ShopCategory = (props) => {
  const [shopItems, setShopItems] = useState([]);
  const category = props.match.params.category;
  useEffect(() => {
    const getShopCategoryData = async () => {
      try {
        const response = await axios.get(`/shop/${category}`);
        setShopItems(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getShopCategoryData();
  }, [category]);

  return <ShopItems category={category} data={shopItems} />;
};

export default ShopCategory;
