import "./Item.css"
import {Link} from "react-router-dom";
const Item = (prod ) => {
    return (
        <>
            <div key={prod.id} className="group relative">
                <Link className="group relative" to={`/products/${prod.id}`}>
                <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        alt={prod.imageAlt}
                        src={prod.img}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between text-center">
                    <div>
                        <h3 className=" font-serif text-2xl font-bold text-brown-700 ">
                            <a href={prod.href}>
                                <span aria-hidden="true" className="absolute inset-0"/>
                                {prod.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{prod.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${prod.price}</p>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Item;