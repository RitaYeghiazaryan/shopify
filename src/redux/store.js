
// import { createStore, applyMiddleware} from "redux";
// import rootReducers from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { persistStore } from "redux-persist";

// import thunkMidleWhere from 'redux-thunk'

//  export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMidleWhere)));

//  export const persistor = persistStore(store);

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

import thunk from "redux-thunk";

import { persistStore } from "redux-persist";

import { createLogger } from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger({ collapsed: true });

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

