import {persistReducer} from "redux-persist";
import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer.";

import commonReducer from "./common/common.reducer";
import { authPersistConfig, shopPersistConfig } from "./persist.config";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  //shop: shopReducer,
  // auth: authReducer,
  shop: persistReducer(shopPersistConfig, shopReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
