import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const [brande, setBrande] = useState('');
    const [type, setType] = useState('');
    console.log(brande);

    const product = useLoaderData();
    const { _id, name, brand, price, rating } = product;
    console.log(product);

    const handleBrandChange = (event) => {
        setBrande(event.target.value);
        
        setType('');
    };

    const handleProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedProduct = { name, brand, type, price, rating, image };

        console.log(updatedProduct);

        fetch(`http://localhost:5000/apple/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Clear the form and set custom values
                form.reset();
                setBrande(''); // Clear the brand
                setType(''); // Clear the type
            });
    };

    // Dummy data for brands and types
    const brands = ['Apple', 'Samsung', 'Sony', 'Google', 'Intel', 'Huawei'];
    const technologyTypes = ['Phone', 'Computer', 'Headphone'];
    const otherTypes = [
        'Phone',
        'Camera',
        'Tablet',
        'Laptop',
        'Smart TV',
        'AirPods',
        'VR Headset',
        'Processor',
        'Watch',
    ];

    return (
        <div className="mx-[290px] my-[180px]">
            <h1 className="text-center text-5xl font-bold my-10">Update Product</h1>
            <div className="bg-base-200">
                <div className="">
                    <div className="card w-full">
                        <form onSubmit={handleProduct} className="card-body">
                            <div className="flex gap-24 my-20">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        name="name"
                                        defaultValue={name}
                                        className="input input-bordered w-[575px]"
                                        type="text"
                                        placeholder="Enter the name"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <select
                                        name="brand"
                                        defaultValue={brand}
                                        className="input input-bordered w-[575px]"
                                        onChange={handleBrandChange}
                                        required
                                    >
                                        <option value="">Select Brand</option>
                                        {brands.map((brandName) => (
                                            <option key={brandName} value={brandName}>
                                                {brandName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-24 my">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type</span>
                                    </label>
                                    <select
                                        name="type"
                                        defaultValue={type}
                                        className="input input-bordered w-[575px]"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        {brand === 'Technology and Electronics'
                                            ? technologyTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))
                                            : otherTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        name="price"
                                        defaultValue={price}
                                        className="input input-bordered w-[575px]"
                                        type="text"
                                        placeholder="Enter the price of the product"
                                        
                                    />
                                </div>
                            </div>
                            <div className="flex gap-24 mt-20">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                        name="rating"
                                        defaultValue={rating}
                                        className="input input-bordered w-[575px]"
                                        type="text"
                                        placeholder="Enter the Rating"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control my-20">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input
                                    name="image"
                                    className="input input-bordered"
                                    type="text"
                                    placeholder="Enter the Image"
                                    required
                                />
                            </div>
                            <div className="form-control my-16">
                                <button className="btn btn-primary" type="submit">
                                    Update Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
