import { useState } from 'react';

const AddProduct = () => {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    // Reset the type when brand changes
    setType('');
  };

  const handleProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const newProduct = { name, brand, type, price, description, rating, image };

    console.log(newProduct);

    fetch(`http://localhost:5000/${brand}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Clear the form and set custom values
        form.reset();
        setBrand(''); // Clear the brand
        setType(''); // Clear the type
      });
      
  };

  // Dummy data for brands and types
  const brands = ['Apple', 'Samsung', 'Sony', 'Google', 'Intel', 'Huawei'];
  const technologyTypes = ['Phone', 'Computer', 'Headphone'];
  const otherTypes = ['Phone','Camara','Tab', 'Laptop', 'Smart TV', 'AirPods','VR Headset','processor','Watch'];

  return (
    <div className="mx-[290px] my-[180px]">
      <div className="bg-base-200">
        <div className="">
          <div className="card w-full">
            <form onSubmit={handleProduct} className="card-body">
              <div className="flex gap-24 my-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input name="name" className="input input-bordered w-[575px]" type="text" placeholder="Enter the name" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <select name="brand" className="input input-bordered w-[575px]" onChange={handleBrandChange} value={brand} required>
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
                  <select name="type" className="input input-bordered w-[575px]" value={type} onChange={(e) => setType(e.target.value)} required>
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
                  <input name="price" className="input input-bordered w-[575px]" type="text" placeholder="Enter the price of product" required />
                </div>
              </div>
              <div className="flex gap-24 mt-20">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input name="description" className="input input-bordered w-[575px]" type="text" placeholder="Enter the product description" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input name="rating" className="input input-bordered w-[575px]" type="text" placeholder="Enter the Rating" required />
                </div>
              </div>
              <div className="form-control my-20">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input name="image" className="input input-bordered" type="text" placeholder="Enter the Image" required />
              </div>
              <div className="form-control my-16">
                <button className="btn btn-primary" type="submit">Add New Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
