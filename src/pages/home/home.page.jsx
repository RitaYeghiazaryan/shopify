//  REACT COMPONENTS
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//MY COMPONENTS
import WrapperLoader from "src/Component/wrapper-loader/WrapperLoader.component";
import CategoryItem from "./Component/card-item/CategoryItem.component";
import { setGlobalErrorMessage } from "src/redux/common/common.actions";
// STYLES
import styles from "./homepage.module.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("categories");
        setCategories(response.data);
      } catch (error) {
        // console.log(error.message);
        dispatch(setGlobalErrorMessage(error.message));
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <WrapperLoader isLoading={isLoading}>
      <ul className={styles.container}>
        {categories.map((category) => {
          return <CategoryItem key={category._id} category={category} />;
        })}
      </ul>
    </WrapperLoader>
  );
};

export default Home;
