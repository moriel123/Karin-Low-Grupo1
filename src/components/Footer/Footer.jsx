import "./Footer.css";
import Logo from "../../../public/Logo.png";
function Footer(){
    return (
        <footer className="footer">
            <div className="container container-footer">
                <div className="menu-footer">
                    <div className="contact-info">
                        <p className="title-footer">Contacto</p>
                        <ul>
                            <li>
                                Ubaldo Mansilla 131
                            </li>
                            <li>Teléfono: 123-456-789</li>

                            <li>EmaiL:Snowfall@gmail.com</li>
                        </ul>
                    </div>

                    <div className="information">
                        <p className="title-footer">Información</p>
                        <ul>
                            <li><a href="#">Politicas de Privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="/contact">Contactános</a></li>
                        </ul>
                    </div>

                    <div className="my-account">
                        <p className="title-footer">Servicio al cliente</p>

                        <ul>
                            <li><a href="#">Mi cuenta</a></li>
                            <li><a href="#">Historial de ordenes</a></li>
                            <li><a href="#">Forma de pago</a></li>
                            <li><a href="#">Reembolsos</a></li>
                        </ul>

                    </div>
                    <div className="Logo">
                        <img src={Logo} alt="logo" className="footer-Logo"></img>

                    </div>

                </div>

            </div>
        </footer>
    )
}
export default Footer;
