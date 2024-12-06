import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getProductById} from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import useCarrito from '../../UseCarrito/Carrito.jsx';

export default function ItemDetail() {
    const {productId} = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);
    const addToCart= useCarrito(state => state.addToCart);
    const addCarrito=()=>{
        console.log("Se añadio un producto");
        console.log(product);
        addToCart(product) };

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const incrementQuantity = () => {
        if (quantity < product.stock) { //
            setQuantity(quantity + 1)
        }
    }
    const precioTotal = product.price * quantity;
    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading/></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="fondoItemDetail">
            <div className="pt-6">
                <div className="mx-auto mt-6 max-w-xl flex items-center">
                    <img src={product.img} alt="imagen ropa"
                         className=" aspect-[3/4] size-full rounded-lg object-cover lg:block"/>
                </div>
                <div
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-[25px] tracking-wide font-bold font-serif">{product.name}</h1>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${precioTotal}</p>
                        <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-medium text-gray-900">Tamaño</h3>
                            </div>
                            {product.sizes.map((size, index) => (
                                <label
                                    key={product.id}
                                    className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-2xl font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">

                                    <span>{size}</span>
                                    <span className="pointer-events-none absolute -inset-px rounded-md"
                                          aria-hidden="true"></span>
                                </label>
                            ))}
                        </div>

                        <button
                           onClick={addCarrito} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-brown-400 px-8 py-3 text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Agregar
                            al carrito
                        </button>
                    </div>

                    <div
                        className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-3xl font-mono text-justify text-gray-900">{product.description}</p>
                            </div>
                        </div>
                        <p className="text-2xl">stock:{product.stock}</p>
                        <div className='flex'>
                            <button onClick={decrementQuantity}
                                    className='rounded-[5px] bg-brown-400 hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> -
                            </button>
                            <p className='text-[20px] px-[10px]'>{quantity}</p>
                            <button onClick={incrementQuantity}
                                    className='rounded-[5px] bg-brown-400 hover:bg-slate-600 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> +
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
        ;
}