import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import RegisterSuccess from "./views/RegisterPage/RegisterSuccess";
import FindUserInfoPage from "./views/FindUserInfoPage/FindUserInfoPage";
import ProductsUploadPage from './views/ProductsUploadPage/ProductsUploadPage';
import ShopPage from './views/ShopPage/ShopPage';
import ProductDetailPage from './views/ProductDetailPage/ProductDetailPage';
import CartPage from "./views/CartPage/CartPage";
import SearchResultPage from "./views/SearchResultPage/SearchResultPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='all-page'>
        <Header />
        <div className="page-content">
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/register/success" component={Auth(RegisterSuccess, false)} />
            <Route exact path="/findUserInfo/:findWhat" component={Auth(FindUserInfoPage, false)} />
            <Route exact path="/product/upload" component={Auth(ProductsUploadPage, true, true)} />
            <Route exact path="/shop/:category" component={Auth(ShopPage, null)} />
            <Route exact path="/product/:productId" component={Auth(ProductDetailPage, null)} />
            <Route exact path="/user/cart" component={Auth(CartPage, true)} />
            <Route exact path="/searchResult/:searchText" component={Auth(SearchResultPage, null)} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
