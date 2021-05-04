// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.scss';
// // import App from "./App/App"
// // import "src/configs/axios.config"
// // import reportWebVitals from './reportWebVitals';
// // import { BrowserRouter } from 'react-router-dom';
// // import { PersistGate } from "redux-persist/integration/react";
// // import { Provider } from 'react-redux';
// // import store from './redux/store';

// // ReactDOM.render(
// //   <Provider store={store}>
// //       <PersistGate persistor={persistor}></PersistGate>
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>
// //   <PersistGate/>
// //   </Provider>,

// //   document.getElementById('root')

// // );

// // reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.scss";
// import "./configs/axios.config";
// import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";


// import App from "./App/App";
// import { persistor, store } from "src/redux/store";

// ReactDOM.render(
//   <Provider store={store}>
   
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>

//   </Provider>,

//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./configs/axios.config";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "src/redux/store";

import App from "./App/App";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,

    document.getElementById("root")
);