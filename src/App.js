import HomePage from "./Pages/HomePage/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Like from "./Pages/LikePage/Content/LikeProduct/Like";
import DefaultLayout from "./Pages/LikePage/DefaultLayout";
import LikeLayout from "./Pages/LikePage/LikeLayout/LikeLayout";
import RecentlyViewed from "./Pages/LikePage/Content/RecententlyViewed/RecentlyViewed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/cart" element={<DefaultLayout><Cart /></DefaultLayout>} />
        <Route path="/like" element={<LikeLayout><Like /></LikeLayout>} />
        <Route path="/recently-viewed" element={<LikeLayout><RecentlyViewed /></LikeLayout>} />
        <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
        <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
