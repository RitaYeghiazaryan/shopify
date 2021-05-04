import styles from "./Oops.module.scss";
import ErrorIMg from "src/assets/errorbug.gif";

const Oops = (props) => {
  const { errorMessage, children } = props;

  return errorMessage ? (
    <div className={styles.container}>
      <div>{errorMessage}</div>
      <img src={ErrorIMg} alt="" className={styles.ooo} />
    </div>
  ) : (
    children
  );
};

export default Oops;
