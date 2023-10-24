
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const cartData = useLoaderData();
    console.log(cartData);

    return (
        <div>
            
            {cartData.length === 0 ? (
                <p className="text-4xl text-center font-bold lg:my-96 md:my-72 my-36">Your cart is empty.</p>
            ) : (
                <div className="lg:mx-44 md:mx-10 mx-10">
                    {cartData.map((product) => (
                        <div key={product._id} className="card lg:card-side md:card-side lg:gap-20 gap-5 bg-base-100  my-20 rounded-lg shadow-lg h-full w-full">
                            <div>
                                
                                <figure>
                                    <img className="lg:h-[350px] lg:w-[330px] md:h-[220px] md:w-[150px]" src={product.image} alt={product.name} />
                                </figure>
                            </div>
                            
                            <div className=" lg:w-[350px] md:w-[350px]">
                            <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Product Name </h1>
                                <h2 className="card-title text-center lg:text-2xl">{product.name}</h2>
                            </div>
                            <div className=" lg:w-[350px] md:w-[150px]">
                            <h1 className="lg:text-xl text-center  font-bold lg:my-9 md:my-4 my-2">Brand Name </h1>
                                <h2 className="text-center lg:text-2xl">{product.brand}</h2>
                            </div>
                            <div className=" lg:w-[350px] md:w-[100px] ">
                            <h1 className="lg:text-xl text-center  font-bold lg:my-9 md:my-4 my-2">Price </h1>
                                <h2 className="items-center text-center  lg:text-2xl">{product.price}</h2>
                            </div>
                            <div className="card-actions md:justify-end justify-center lg:justify-end items-center lg:p-5 p-3 md:mt-20 md:mr-2">
                                <button className="btn btn-error text-white">Delete Product</button>
                            </div>
                        </div>
                    ))};
                </div>
            )}
        </div>
    );
};

export default MyCart;
