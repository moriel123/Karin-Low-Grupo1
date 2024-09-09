import "./Header.css";
import Logo from "../Imagenes/Logo.png"
function Header(){
    return (
        <header>
            <div className="container-hero">
                <div className="container hero">
                    <div className="customer-support">
                        <i className="fa-solid fa-headset"></i>
                        <div className="content-customer-support">
                            <span className="text">Soporte al cliente</span>
                            <span className="number">123-456-789</span>
                        </div>
                    </div>
                    <div className="container-logo">
                        <img src={Logo} alt="logo" className="Logo"></img>
                        <h1 className="logo"><a href="/public">Snowfall</a></h1>
                    </div>
                    <div className="container-user">

                            <i className="fa-solid fa-user"></i>
                            <i className="fa-solid fa-basket-shopping"></i>
                            <div className="content-shopping-cart">
                                <span className="text">Cesta </span>
                                <span className="number">(0)</span>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container-navbar">
                <nav className="navbar container">
                    <i className="fa-solid fa-bars"></i>
                    <ul className="menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">ayuda</a></li>
                        <li><a href="#">Ajustes</a></li>
                        <li><a href="#">notificaciones</a></li>
                    </ul>
                    <form className="search-form">
                    <input type="search"  placeholder="Buscar.." />
                        <button className="btn-search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}


export default Header;