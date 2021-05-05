import { useSelector } from "react-redux";
import TableRow from "./table-row/TableRow.component";
import styles from "./checkout.module.scss";
import Button from "src/Component/Button/button.component";
import EmptyDataMessage from "./component/EmptyDataMessage.component";


const Checkout = (props) => {
  const{message, hasData}=props
  const favorites = useSelector((state) => state.shop.favorites);
  let initialValue=0;
  let totalPrice=favorites.reduce(function(accumlator,currentValue){
    return accumlator+currentValue.price*currentValue.count;
  }, initialValue)





  return (
    <div className={styles.container}>
      <EmptyDataMessage  message={message} hasData={hasData}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((rowData) => (
            <TableRow rowData={rowData} />
          ))}
        </tbody>
      </table>
      <div className={styles.bottom}>
        <div className={styles.total}>TOTAL: ${totalPrice}</div>
        <Button>Pay Now</Button>
      </div>
      </EmptyDataMessage>
    </div>
  );
};

export default Checkout;
