import "./TarjetaRopa.css"
const TarjetaRopa = ({urlImagen,precio,descripcion}) => {
    return (
        <>
            <div className="card">
                <img src={urlImagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3>Precio: {precio}</h3>
                    <p className="card-text">Descripcion: {descripcion}</p>
                    <a href="#" className="btn btn-dark">Agregar al carrito</a>
                </div>
            </div>
        </>
    )
}

export default TarjetaRopa;