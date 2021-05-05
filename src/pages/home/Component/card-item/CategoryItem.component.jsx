//STYLES
import { useHistory } from "react-router";
import styles from "./Category.module.scss";
const CategoryItem = (props) => {
  const { category} = props;

  const history=useHistory();

  const handleClick=()=>{
    history.push(`/shop/${category.routeName}`)
  }
return (
    <li className={styles.category} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />

        <div className={styles.content}>
          <div className={styles.title}>{category.title}</div>
          <span className="u-uppercase">Shop Now</span>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
