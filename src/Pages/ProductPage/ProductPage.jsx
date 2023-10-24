import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ brandsData }) => {
  const { brandName } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the brand and its products from the data
    const brand = brandsData.brands.find((brand) => brand.name === brandName);
    if (brand) {
      setBrandProducts(brand.products);
      setIsLoading(false);
    }
  }, [brandName, brandsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products by {brandName}</h1>
      {/* Slider with at least 3 advertisement images */}
      <div className="slider">
        {/* Add your advertisement images here */}
      </div>
      {/* List of products */}
      <ul>
        {brandProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            {/* Display other product details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
