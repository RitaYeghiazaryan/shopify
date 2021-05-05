import { useSelector } from "react-redux";
import styles from "./emptyMessage.module.scss"

import emptyImg from "src/assets/empyyImg.png"
const EmptyDataMessage = (props) => {
    const {children}=props
  
    const favorites = useSelector((state) => state.shop.favorites);
    const hasData=!!favorites.length
    const message="There is no selected items"
    return  hasData?(
        children
    ):(<div className={styles.container}>
         <div>{message}</div>
        <img className={styles.img} src={emptyImg} alt=""/>
       
        </div>)

}

export default EmptyDataMessage
