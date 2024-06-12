import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import SliceData from "./redux/SliceData";
import Header from "./component/Header";
import Footer from "./component/Footer";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      {/* <SliceData /> */}
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>
);
