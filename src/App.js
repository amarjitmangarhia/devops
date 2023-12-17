import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { ProductProvider } from "./components/ProductContext";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import About from "./components/about/About";
import Contact from "./components/Contact";
function App() {
  return (
    <ProductProvider>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </ProductProvider>
  );
}

export default App;
