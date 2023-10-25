import { Link, useLoaderData } from "react-router-dom";

const AppleProduct = () => {
    const brandData = useLoaderData();

    if (!brandData || brandData.length === 0) {
        return (
            <div className="my-[650px]">
            <h2 className=" my-10 text-red-500 text-center text-5xl font-bold align-middle ">No products available for this brand......</h2>
            <p className="text-red-500 text-center text-5xl font-bold align-middle">------- Please Product Add ---------</p>
        </div>
        );
    }



    return (
        <div>
            <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full ">
                <img className="w-full h-[900px]" src="https://i.ibb.co/RB7WXGq/images-3.jpg" alt="images-3" border="0"/>                </div>
                <div id="item2" className="carousel-item w-full ">
                <img className="w-full h-[900px]" src="https://i.ibb.co/b5sGBtf/images-4.jpg" alt="images-4" border="0"/>                </div>
                <div id="item3" className="carousel-item w-full ">
                    <img className="w-full h-[900px]" src="https://i.ibb.co/2PCqLMc/apple-iphone-11-billboard-in-shoreditch-city-of-london-uk-2-AAXXDT.jpg" alt="apple-iphone-11-billboard-in-shoreditch-city-of-london-uk-2-AAXXDT" border="0" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-10 lg:mx-28 mx-20 my-10">
                {brandData.map((product) => (
                    <div key={product._id} className="card lg:w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img src={product.image} alt={product.name} />
                            <h3 className="text-2xl font-bold">{product.name}</h3>
                            <p className="text-xl font-semibold"> Brand Name: {product.brand}</p>
                            <p className="text-xl font-semibold">Type: {product.type}</p>
                            <p className="text-xl font-semibold">Price: ${product.price}</p>
                            <p className="text-xl font-semibold">Rating: {product.rating}</p>
                            <Link to={`/${product.brand}/details/${product._id}`}><button className="btn btn-primary w-full" >Details</button>
                            </Link>
                            <Link to={`/${product.brand}/update/${product._id}`}><button className="btn btn-error w-full" >Update</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppleProduct;
