import sucursal from "../../../public/sucursal.jpg";
import alejandra from "../../../public/alejandra.jpg";
import Dan from "../../../public/Dan.jpg";
import Jessie from "../../../public/Jessie.jpg";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-serif font-bold leading-9 text-brown-700 pb-4">Sobre nosotros.</h1>
                    <p className="font-serif text-base leading-6 text-black text-xl italic">El equipo de Snowfall, creemos en la
                        belleza en todas sus formas. Nuestro objetivo es crear una moda que celebre la diversidad de
                        cuerpos y estilos. Queremos que cada mujer se sienta comoda, segura y empoderada en su propia
                        piel. Diseñamos prendas versátiles y elegantes que adaptan a cualquier ocasión, sin dejar de
                        lado la comodidad y calidad. Contamos con un excelente equipo, que nos permite alcanzar objetivos especificos y es una capacidad muy valorada.</p>
                </div>
                <div className="w-full lg:w-6/12 flex flex-col content-center ">
                    <img className="w-6/12 h-6/12" src={sucursal}
                         alt="A group of People"/>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-serif  font-bold text-brown-700 pb-4">Nuestra historia.</h1>
                    <p className="font-serif text-base leading-6 text-black text-xl italic">Nacimos de un sueño, un mundo donde
                        cada persona pudiera expresar su estilo unico sin limitaciones, con esto nuestros valores son la
                        base de todo lo que hacemos, ya sea, calidad, variedad y accesibilidad, Además, desde nuestros
                        inicios, hemos enfrentado desafíos emocionantes y hemos celebrado grandes triunfos . cada venta
                        es una victoria, cada sonrisa de nuestros clientes nuestra mayor recompensa. Hemos visto a
                        nuestra comunidad crecer día a día, con esto, nuestra vision es clara, convertirnos en la tienda
                        de referencia para aquellos que buscan expresarsar su individualidad a tráves de la moda.   </p>
                </div>
                <div className="w-full lg:w-6/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="m-4 flex justify-center flex-col items-center">
                            <img className="md:block hidden w-9/12" src={alejandra}
                                 alt=" alejandra"/>
                            <img className="md:hidden block  w-2/4" src={alejandra}
                                 alt="alejandra "/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alejandra Smith</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Gerente de tienda</p>
                        </div>
                        <div className="m-4 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={Dan}
                                 alt="Dan"/>
                            <img className="md:hidden block w-2/4" src={Dan}
                                 alt="Dan"/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Dan Jones </p>
                            <p className="font-medium text-xl text-center leading-5 text-gray-800 mt-4">Gerente de producción</p>
                        </div>
                        <div className="m-4 flex justify-center flex-col items-center">
                            <img className="md:block hidden w-9/12" src={Jessie}
                                 alt="Jessie"/>
                            <img className="md:hidden block  w-2/4" src={Jessie}
                                 alt="Jessie"/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Jessie Demir</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Retail director</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                                 alt="Elijah featured img"/>
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                                 alt="Elijah featured img  w-2/4"/>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah Abatino</p>
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Encargado de venta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;