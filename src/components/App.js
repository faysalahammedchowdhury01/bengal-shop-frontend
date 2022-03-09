import { BrowserRouter } from 'react-router-dom';
import CartState from '../contexts/cart/CartState';
import Footer from './Footer';
import Header from './Header';
import OurAttributesSection from './OurAttributesSection';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <CartState>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <main>
                    <Routes />
                    <OurAttributesSection />
                </main>
                <Footer />
            </BrowserRouter>
        </CartState>
    );
}

export default App;
