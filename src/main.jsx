import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./store/CartProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider >
//        <App />
//     </CartProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <App />
    </Provider>
  
);
