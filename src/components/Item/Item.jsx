import "./Item.css"
import {Link} from "react-router-dom";
import Carrito from "../../UseCarrito/Carrito.jsx";

const Item = (prod) => {
    const addToCart = Carrito(state => state.addToCart);
    return (
        <>
            <div key={prod.id} className="group relative">
                <Link className="group relative" to={`/products/${prod.id}`}>
                    <div
                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
                        <img
                            alt={prod.imageAlt}
                            src={prod.img}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-brown-700">
                                <a href={prod.href}>
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    {prod.name}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{prod.color}</p>
                        </div>
                        <p className="text-m font-medium text-black">${prod.price}</p>
                    </div>
                </Link>
                <button
                    className="mt-4 bg-brown-400 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
                    onClick={() => addToCart(prod)}
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default Item;
