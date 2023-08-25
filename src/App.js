import "./App.css";
import Header from "./containers/Header";
import {Route, Routes } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="">
  
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      
    </div>
  );
}

export default App;
