import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const cartData = useLoaderData();
    console.log(cartData);
    const [product, setProduct] = useState(cartData);

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mycart/${_id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        // Remove the deleted product from the state
                        setProduct(product.filter((item) => item._id !== _id));
                    }
                });
            }
        });
    }

    useEffect(() => {
        setProduct(cartData);
    }, [cartData]);

    return (
        <div>
            {product.length === 0 ? (
                <p className="text-4xl text-center font-bold lg:my-96 md:my-72 my-36">Your cart is empty.</p>
            ) : (
                <div className="lg:mx-44 md:mx-10 mx-10">
                    {product.map((productItem) => (
                        <div
                            key={productItem._id}
                            className="card lg:card-side md:card-side lg:gap-20 gap-5 bg-base-100  my-24 rounded-lg shadow-lg h-full w-full"
                        >
                            <div>
                                <figure>
                                    <img
                                        className="lg:h-[350px] lg:w-[330px] md:h-[220px] md:w-[150px]"
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </figure>
                            </div>

                            <div className="lg:w-[350px] md:w-[350px]">
                                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Product Name</h1>
                                <h2 className="card-title text-center lg:text-2xl">{productItem.name}</h2>
                            </div>
                            <div className="lg:w-[350px] md:w-[150px]">
                                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Brand Name</h1>
                                <h2 className="text-center lg:text-2xl">{productItem.brand}</h2>
                            </div>
                            <div className="lg:w-[350px] md:w-[100px]">
                                <h1 className="lg:text-xl text-center font-bold lg:my-9 md:my-4 my-2">Price</h1>
                                <h2 className="items-center text-center  lg:text-2xl">{productItem.price}</h2>
                            </div>
                            <div className="card-actions md:justify-end justify-center lg:justify-end  lg:p-5 md:mt-32 p-3 md:mr-2">
                                <button onClick={() => handleDelete(productItem._id) } className="btn btn-error text-white">
                                    Delete Product
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCart;
