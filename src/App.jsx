
import './App.css'
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx"
import Body from "./components/Body/Body.jsx"
import CategoryPage from "./components/Category/CategoryPage.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import PaginaCarrito from "./components/Carrito/PaginaCarrito.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/category/:categoryId" element={<CategoryPage/>}/>
                <Route path="/products/:productId" element={<ItemDetail/>}/>
                <Route path='/carrito' element={<PaginaCarrito/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
