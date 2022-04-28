import HomePage from "./Pages/HomePage/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  </BrowserRouter>
  );
  
}

export default App;
