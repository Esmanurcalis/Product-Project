import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {


    return (
        <>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product-detail/:id" element={<ProductDetail/>}/>
                </Routes>


            </BrowserRouter>

        </>
    )
}

export default App