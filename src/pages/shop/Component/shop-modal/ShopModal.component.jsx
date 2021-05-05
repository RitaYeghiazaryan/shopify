//ASSETS

import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import modal from "src/assets/modal.jpg";
import { setModalState } from "src/redux/shop/shop.actions";
//STYLES
import styles from "./ShopModal.module.scss";

const ShopModal = () => {
  const history = useHistory();
  
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(setModalState(false));
};

// const stop = (event) => event.stopPropagation();

const goToSignIn = () => {
    dispatch(setModalState(false));
    history.push("/auth");
};
return ReactDOM.createPortal (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> WelCome to Ray Shop</h1>
        <div>
          <img src={modal} alt="ModalImg" className={styles.image} />
        </div>

        <div className={styles.submit} onClick={goToSignIn}>
          Go To Submit
        </div>
        <div  className={styles.submit} onClick={handleBackClick}>Close</div>
      </div>
    </div>,
      document.getElementById("root")
  );
};

export default ShopModal;
