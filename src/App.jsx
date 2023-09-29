import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import "./App.css";
import ProductDetails from "../components/ProductDetails";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default App;
