import "./App.css";
import { Nav } from "./components/header/nav";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { ProductsPage } from "./pages/products-page/products-page";
import { Wishlist } from "./pages/wishlist/wishlist";
import { Profile } from "./pages/profile/profile";
import { Cart } from "./pages/checkout-page/cart";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "/ProductsPage" element = {<ProductsPage/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Profile" element = {<Profile/>} />
        <Route path="/Cart" element = {<Cart/>} />
        <Route path = "/ProductsPage" element = {<ProductsPage/>}/>
      </Routes> 
    </div>
  );
}

export default App;
