import Item from '../Item/Item.jsx';
import {getProducts} from "../../data/asyncMock.jsx";
import React, { useEffect, useState } from 'react';
import Loading from "../Loading/Loading.jsx";


function ItemList({products: initialProducts}) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);
    return (
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
        <div className="lista">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-mono"></h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((prod) => (
                <Item {...prod} key={prod.id} />
            ))}
                </div>
            </div>
        </div>
            )}
            </>
    );
};

export default ItemList
