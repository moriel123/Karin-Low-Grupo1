import "./Body.css";
import principal from '../../../public/principal.jpg'
import snow2 from '../../../public/snow2.jpg'
import principal3 from '../../../public/principal3.jpg'
import ItemList from "../ItemList/ItemList.jsx";
import { Carousel, Typography } from "@material-tailwind/react";

function Body() {
    return (
        <main>
            <Carousel className="rounded-xl max-h-[360px]">
                <div className="relative h-full w-full">
                    <img
                        src={principal}
                        alt="image 1"
                        className="max-h-[360px] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                ¡EXPRESATE A TRAVÉS DE LA MODA!
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 font-serif"
                            >
                                Remueva tú armario con estilo
                            </Typography>

                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={snow2}
                        alt="image 2"
                        className="max-h-[360px] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                ¡No te pierdas nuestros descuento!
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 font-serif"
                            >ropa de alta calidad a precios accesibles, hasta el 35% de descuento

                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src={principal3}
                        alt="image 3"
                        className="max-h-[360px] w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl  "
                            >
                                VISTE TU CONFIANZA, VIVE TU ESTILO
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 font-serif"
                            >La moda es una forma de arte, tú eres la obra de arte.

                            </Typography>
                        </div>
                    </div>
                </div>
            </Carousel>
            <h1 className="text-4xl text-center font-serif italic"> Te ofrecemos una variedad de estilos y tallas para que encuentres las prendas perfecta para mujeres </h1>
            <h2 className="font-bold text-2xl text-center font-serif">¡Compra ahora y lucir estilo!</h2>
            <ItemList/>
        </main>
    )
}

export default Body;