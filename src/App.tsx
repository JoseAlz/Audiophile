import { useAppSelector } from 'app/hooks';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import GlobalStyle from 'shared/globalStyle';

import Home from 'pages/Home';
import Speakers from 'pages/Speakers';
import Headphones from 'pages/Headphones';
import Earphones from 'pages/Earphones';
import Details from 'pages/Details';
import Checkout from 'pages/Checkout';
import NotFound from 'pages/NotFound';

import Header from 'components/Header/Header';
import Categories from 'components/Categories/Categories';
import Brand from 'components/Brand/Brand';
import Footer from 'components/Footer/Footer';

function App() {
  const { pathname } = useLocation();
  const isHome = pathname.slice(1) === 'home';
  const isCheckout = pathname === '/checkout';
  const { totalCost } = useAppSelector((state) => state.cart);
  const headerClass = isHome ? 'home-header' : '';
  return (
    <>
      <GlobalStyle />
      <Header className={headerClass} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="products/:id" element={<Details />} />
          <Route path="checkout" element={totalCost ? <Checkout /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isCheckout && (
          <>
            {!isHome && <Categories />}
            <Brand />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
