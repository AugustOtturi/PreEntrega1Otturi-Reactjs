//!Componenetes
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

//!Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilo.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  //*Greeting
  const Greeting = {
    title: "Welcome to Dev store",
    subtitle: "This is a place for developers",
  };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/cursos"
          element={<ItemListContainer Saludo={Greeting} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
