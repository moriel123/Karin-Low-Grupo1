import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx"
import Body from "./components/Body/Body.jsx"

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
  )
}

export default App
