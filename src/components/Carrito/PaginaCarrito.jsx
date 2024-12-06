import useCarrito from "../../UseCarrito/Carrito.jsx";
import "./PaginaCarrito.css";

const PaginaCarrito = () => {
    const cart = useCarrito(state => state.cart);
    const total = useCarrito(state => state.total);
    const removeFromCart = useCarrito(state => state.removeFromCart);
    const clearCart = useCarrito(state => state.clearCart);

    console.log(cart.length);
    console.log(cart);
    return (
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 ">
            {cart.length === 0 ? (
                <p>Tu carrito está vacíoo</p>
            ) : (
                <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
                    <h1 className="text-2xl font-extrabold text-gray-800">Tú carrito</h1>
                    <div className="grid md:grid-cols-3 gap-4 mt-8">

                        {cart.map(item => (
                            <div key={item.id} className="md:col-span-2 space-y-4">

                                <div
                                    className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                                    <div className="flex gap-4">
                                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                            <img src={item.img} alt={item.name}
                                                 className="w-full h-full object-contain"></img>
                                        </div>

                                        <div className="flex flex-col gap-4">

                                            <div>
                                                <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                                                <div className="mt-auto flex items-center gap-3">
                                                    <button type="button"
                                                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="w-2 fill-white"
                                                             viewBox="0 0 124 124">
                                                            <path
                                                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                                data-original="#000000"></path>
                                                        </svg>
                                                    </button>
                                                    <span
                                                        className="font-bold text-sm leading-[18px]">{item.quantity}</span>
                                                    <button type="button"
                                                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="w-2 fill-white"
                                                             viewBox="0 0 42 42">
                                                            <path
                                                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                                data-original="#000000"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto flex flex-col">
                                        <div className="flex items-start gap-4 justify-end">
                                            <button onClick={() => removeFromCart(item)}>eliminar
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="w-4 cursor-pointer fill-gray-400 inline-block"
                                                     viewBox="0 0 24 24">
                                                    <path
                                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                        data-original="#000000"></path>
                                                    <path
                                                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                        data-original="#000000"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-800 mt-auto">${item.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            }
            {cart.length > 0 && (
                <div className="bg-gray-200 rounded-md px-4 py-6 h-max shadow-2xl my-9 mx-9">
            <ul className="text-gray-800 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span
                    className="ml-auto font-bold">${total}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Envio <span
                    className="ml-auto font-bold">$2.00</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Impuestos <span
                    className="ml-auto font-bold">$4.00</span></li>
                <hr className="border-gray-300"/>
                <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span
                    className="ml-auto">${total}</span></li>
            </ul>

            <div className="mt-8 space-y-2">
                <button type="button"
                        className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Buy
                    Now
                </button>
                <button type="button"
                        onClick={clearCart}
                        className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md">Vaciar
                    carrito
                </button>
            </div>

        </div>
        )}
        </div>
    );
}


export default PaginaCarrito;