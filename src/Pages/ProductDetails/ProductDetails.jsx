import  { useState, useEffect } from "react";
import { useParams ,useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = () => {
    const { productId } = useParams();
    const brandData = useLoaderData();
    const [cart, setCart] = useState([]);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [addedToCartMessage, setAddedToCartMessage] = useState("");
    const product = brandData.find((p) => p._id === productId);

    useEffect(() => {
        fetch("http://localhost:5000/mycart", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setCart(data);
            })
            .catch((error) => {
                console.error("Error fetching cart:", error);
            });
    }, []);

    const isProductInCart = cart.some((item) => item._id === productId);

    const addToCart = (product) => {
        if (isAddingToCart) {
            return;
        }

        setIsAddingToCart(true);

        if (isProductInCart) {
            toast.info("This product is already in your cart", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            setIsAddingToCart(false);
        } else {
            fetch(`http://localhost:5000/mycart/${product._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    toast.success(`Added ${product.name} to the cart`, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });

                    setAddedToCartMessage("Added to Cart");
                    setIsAddingToCart(false);
                    setCart([...cart, product]);
                })
                .catch((error) => {
                    console.error("Error adding to cart:", error);
                    toast.error("Failed to add the product to the cart", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });

                    setIsAddingToCart(false);
                });
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 justify-center">
                <div className="card lg:w-1/3 lg:mx-[620px] mx-5 my-44 lg:mb-44 lg:mt-18 bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-full lg:h-full object-cover" src={product.image} alt={product.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title lg:text-3xl md:text-3xl text-xl font-bold mb-2">{product.name}</h2>
                        <h2 className="lg:text-3xl md:text-3xl text-xl font-bold mb-2">Brand: {product.brand}</h2>
                        <p className="lg:text-xl md:text-xl text-base font-bold mb-2">Product description: <br />{product.description}</p>
                        <p className="text-2xl text-orange-500 font-bold mb-2">{product.price} TK</p>
                        <div className="card-actions justify-end">
                            
                                <button
                                    className="btn btn-active btn-accent lg:px-32"
                                    onClick={() => addToCart(product)}
                                >
                                    {addedToCartMessage || "Add to Cart"}
                                </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
