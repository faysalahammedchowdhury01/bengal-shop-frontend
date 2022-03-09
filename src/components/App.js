import { BrowserRouter } from 'react-router-dom';
import CartState from '../contexts/cart/CartState';
import WishlistState from '../contexts/wishlist/WishlistState';
import Footer from './Footer';
import Header from './Header';
import OurAttributesSection from './OurAttributesSection';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <CartState>
            <WishlistState>
                <BrowserRouter>
                    <ScrollToTop />
                    <Header />
                    <main>
                        <Routes />
                        <OurAttributesSection />
                    </main>
                    <Footer />
                </BrowserRouter>
            </WishlistState>
        </CartState>
    );
}

export default App;
