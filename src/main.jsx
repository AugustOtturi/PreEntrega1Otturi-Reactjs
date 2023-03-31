import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer
      title="Welcome to Hand Left Store"
      subtitle="This is a place for left handed people"
    />
  </React.StrictMode>
);
