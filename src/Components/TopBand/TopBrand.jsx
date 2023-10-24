import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    
    fetch('brands.json') 
      .then((response) => response.json())
      .then((data) => setBrands(data.brands))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="my-28 shadow-md p-16">
      <h1 className="text-7xl font-extrabold text-center mb-28">Our Top Brands</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 ml-8">
        {brands.map((brand) => (
          <Link to={`/${brand.name}`} key={brand.id} className="brand-link">
            <div className="card w-64 h-80 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-3xl w-full h-[220px]"
                  src={brand.image}
                  alt={brand.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title card-actions justify-center text-2xl font-bold">
                  {brand.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBrand;
