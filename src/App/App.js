//rEACT COMPONENT
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { connect, useDispatch } from "react-redux";
//MY COMPONENTS
import Header from "src/layout/header/Header.layout";
import HomePage from "../page/home/home.page";
import ShopPage from "src/page/shop/Shop.page";
import AuthPage from "src/page/auth/Auth.page";
import Oops from "src/Component/oops/Oops.component";

//STYLES
import styles from "./app.module.scss";
import Checkout from "src/page/checkout/Checkout.page";
import { useEffect } from "react";
import { getCategoriesAsync } from "src/redux/shop/shop.actions";
import Contacts from "src/page/contacts/Contacts.page";

const App = (props) => {
  const { globalErrorMessage } = props;
  const dispatch=useDispatch()
 useEffect(()=>{
   dispatch(getCategoriesAsync())

 },[dispatch])
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.pages}>
          <Oops errorMessage={globalErrorMessage}>
            <Switch>
              <Route component={HomePage} path="/home" />
              <Route component={AuthPage} path="/auth" />
              <Route component={ShopPage} path="/shop" />
              <Route component={Checkout} path="/checkout" />
              <Route component ={Contacts} path="/contacts"/>
              <Redirect exact from="/" to="/home" />
            </Switch>
          </Oops>
        </div>
      </main>
    </div>
  );
};
const mapStateToProps = (store) => ({
  globalErrorMessage: store.common.globalErrorMessage,
});

export default connect(mapStateToProps)(App);
