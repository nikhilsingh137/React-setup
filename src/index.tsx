import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
// import SliceData from "./redux/SliceData";
import Header from "./component/Header";
import router from "./Router";
import Footer from "./component/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      {/* <SliceData /> */}
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  </React.StrictMode>
);
