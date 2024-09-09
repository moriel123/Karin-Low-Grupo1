import "./Body.css";
import principal from '../Imagenes/principal.jpg'
import snow2 from '../Imagenes/snow2.jpg'
import principal3 from '../Imagenes/principal3.jpg'
import ropita from '../Imagenes/ropita.jpg'
import ropita2 from '../Imagenes/ropita2.jpg'
import jersey from '../Imagenes/jersey.jpg'
import sueter from '../Imagenes/sueter.jpg'
import sueter2 from '../Imagenes/sueter2.jpg'
import cardigan from '../Imagenes/cardigan.jpg'
import TarjetaRopa from "../Tarjeta/TarjetaRopa.jsx";

function Body() {
    return (
        <main>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={principal} className="h-75 d-block w-100" alt="ropa"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-black bg-white">ENTREGA GRATIS POR COMPRA SOBRE LOS $56.990 </h1>
                            <h3 className="text-black bg-white">Descubre la nueva coleccion y tendencias de la temporada con diseños inigualables</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={snow2} className="d-block w-100" alt="promocion"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-black bg-white">HASTA 35%, LLEGARON LOS DESCUENTOS A SNOWFALL ¡NO TE LO PUERDAS!</h2>
                            <h3 className="text-black bg-white">Nuevos conjuntos para tu guardaropa. Aprovecha nuestras ofertas</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={principal3} className="d-block w-100" alt="ropa2"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-black bg-white"></h5>
                            <h3 className="text-black bg-white" >Despierta tu lado mas sofisticado con nuestra coleccion exclusiva. Diseños unicos para mujeres unicas.</h3>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h3 className="m-lg-5 text-center">Descubre un mundo de posibilidades en nuestra tienda. Te ofrecemos una variedad de estilos y tallas para que encuentres las prendas perfecta para mujeres </h3>
            <h2 className="text-center">¡EXPRESATE A TRAVES DE LA MODA!</h2>
            <div className="tarjetas row justify-content-center">
                <TarjetaRopa urlImagen={ropita} precio={"$ 14,000"} descripcion={"cardigan verde"}/>
                <TarjetaRopa urlImagen={ropita2} precio={"$ 14,650"} descripcion={"cardigan blanco"}/>
                <TarjetaRopa urlImagen={jersey} precio={"$ 13,500"} descripcion={"jersey blanco"}/>
                <TarjetaRopa urlImagen={sueter} precio={"$ 11,500"} descripcion={"jersey de zorro"}/>
                <TarjetaRopa urlImagen={sueter2} precio={"$ 12,500"} descripcion={"jersey de abeja"}/>
                <TarjetaRopa urlImagen={cardigan} precio={"$ 15,500"} descripcion={"cardigan marron"}/>
            </div>

        </main>
    )
}

export default Body;