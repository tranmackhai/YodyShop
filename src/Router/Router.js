import React from 'react'
import HomePage from "../Pages/HomePage/HomePage";
import {BrowserRouter, Routes, Route,} 
from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Like from "../Pages/LikePage/Content/LikeProduct/Like";
import DefaultLayout from "../Layouts/DefaultLayout";
import RecentlyViewed from "../Pages/LikePage/Content/RecententlyViewed/RecentlyViewed";
import TypeLayout from "../Layouts/TypeLayout";
import SwitchPage from "../Pages/TypePage/SwitchPage/SwitchPage";
import LikeLayout from "../Layouts/LikeLayout/LikeLayout";
import ProductDetail from '../Pages/ProductDetail/ProductDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/cart" element={<DefaultLayout><Cart /></DefaultLayout>} />
        <Route path="/like" element={<LikeLayout><Like /></LikeLayout>} />
        <Route path="/recently-viewed" element={<LikeLayout><RecentlyViewed /></LikeLayout>} />
        <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
        <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
        <Route path="/:slug" element={<TypeLayout><SwitchPage /></TypeLayout>} />
        <Route path='/product/:id' element = {<DefaultLayout ><ProductDetail/></DefaultLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

