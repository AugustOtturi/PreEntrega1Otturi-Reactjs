//!Componenetes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

//!Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilo.css';

//!Router-DOM
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

//!context

import { CartContexProvider } from './context/CartContext';

const App = () => {
    return (
        <CartContexProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:cid"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/item/:pid"
                        element={<ItemDetailContainer />}
                    />

                    <Route path="/contacto" element={<NotFound />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<Navigate to="/notfound" />} />
                </Routes>
                <Footer />
            </Router>
        </CartContexProvider>
    );
};

export default App;
