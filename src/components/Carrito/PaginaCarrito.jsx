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
        <>
            {cart.length === 0 ? (
                <div className='justify-center flex'>
                    <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 231.523 231.523" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <path
                            d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231 l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z"></path>
                            <path
                                d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468 c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468 C147.235,148.377,150.23,152.062,154.351,152.488z"></path>
                            <path
                                d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221 c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523 c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215 C104.494,212.835,100.808,216.523,96.278,216.523z"></path>
                            <path
                                d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221 c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523 c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215 C181.937,212.835,178.251,216.523,173.719,216.523z"></path>
                            <path
                                d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876 c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046 c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z"></path>
                            <path
                                d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607 L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z"></path>
                            <path
                                d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606 c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607 C155.338,54.314,157.256,55.045,159.174,55.045z"></path>
                            <path
                                d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502 c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z"></path> </g> </g></svg>
                    <p className='text-center italic font-serif text-3xl font-semibold'>Tu carrito está vacíoo</p>
                </div>
            ) : (
                <div className="font-sans grid grid-cols-3 mx-auto p-4">

                        {cart.map(item => (
                            <div key={item.id} className="-span-2 space-y-4">

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

                                                    <span
                                                        className="font-bold text-sm leading-[18px]">cantidad: {item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto flex flex-col">
                                        <div className="flex items-start gap-4 justify-end ">
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
                                        <h3 className="text-base text-gray-800 mt-auto font-extrabold">${item.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
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
        </>
    );
}


export default PaginaCarrito;