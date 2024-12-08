import "./Header.css";
import Logo from "../../../public/Logo.png"
import useCarrito from "../../UseCarrito/Carrito.jsx";
import {Link} from "react-router-dom";
function Header(){
    const totalItem=useCarrito(state => state.cart.length)

    return (
        <header>
            <div className="container-hero">
                <div className="container hero">
                    <div className="customer-support">
                        <i className="fa-solid fa-headset"></i>
                        <div className="content-customer-support">
                            <span className="text">Soporte al cliente</span>
                            <span className="number">(212)123-456</span>
                        </div>
                    </div>
                    <div className="container-logo">
                        <img src={Logo} alt="logo" className="Logo"/>
                        <h1 className="logo"><Link to="/">Snowfall</Link></h1>
                    </div>
                    <div className="container-user">
                        <Link to='/carrito'>
                            <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                            <div className="content-shopping-cart">
                                <span className="text">Carrito </span>
                                <span className="number">{totalItem}</span>
                            </div>

                </div>
                </div>
            </div>
            <div className="container-navbar">
                <nav className="navbar container">
                    <nav className="nav visible">
                    <ul className="menu ">
                        <li className='font-serif text-xl italic font-semibold'><Link to="/">Inicio</Link></li>
                        <li className='font-serif text-xl italic font-semibold'><Link to="/about">About</Link></li>
                        <li className='font-serif text-xl italic font-semibold'><Link to="/category/cardigan">Cardigans</Link></li>
                        <li className='font-serif text-xl italic font-semibold'><Link to="/category/pantalon">Pantalones</Link></li>
                        <li className='font-serif text-xl italic font-semibold'><Link to="/category/vestido">Vestidos</Link></li>
                        <li className='font-serif text-xl italic font-semibold'><Link to="/contact">Contacto</Link></li>
                    </ul>
                    </nav>
                </nav>
            </div>
        </header>
    )
}


export default Header;