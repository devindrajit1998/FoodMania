import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<SingleProduct/>} path="/pages/SingleProduct/SingleProduct:id"/> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
