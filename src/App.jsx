//!Componenetes
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

//!Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/estilo.css";

//!Router-DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:cid" element={<ItemListContainer />} />
        <Route path="/item/:pid" element={<ItemDetailContainer />} />

        {/*  ARMAR UN 404 // FINALIZAR LAS PAGINAS */}
        <Route path="/contacto" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
