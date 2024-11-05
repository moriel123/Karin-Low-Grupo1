import { useState } from 'react'
import './App.css'
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx"
import Body from "./components/Body/Body.jsx"
import CategoryPage from "./components/Category/CategoryPage.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Body></Body>}></Route>
                <Route exact path="/contact" element={<Contact></Contact>}></Route>
                <Route exact path="/about" element={<About></About>}></Route>
                <Route exact path="/category/:categoryId" element={<CategoryPage></CategoryPage>}></Route>
                <Route exact path="/products/:productId" element={<ItemDetail></ItemDetail>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </>
  )
}

export default App
