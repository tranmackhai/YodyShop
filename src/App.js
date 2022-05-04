import HomePage from "./Pages/HomePage/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  );
  
}

export default App;
