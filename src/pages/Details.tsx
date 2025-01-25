import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import headImage from '../images/headImage.jpg';

const Details: FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then((response) => {
          setProduct(response.data.data);
        })
        .catch((error) => console.error('Error fetching product details:', error));
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[1150px] mx-auto mt-16">
      <div>
        <div className="flex gap-3 mb-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <p>/</p>
          <Link to="/product" className="hover:underline">
            Products
          </Link>
        </div>
        <div className="mb-12 flex justify-between">
          <div>
            <img
              src={product.attributes.image}
              alt={product.attributes.name || "Product"}
              className="w-[450px] h-[450px] rounded-md"
            />
          </div>
          <div className="w-[650px]">
            <h2 className="text-4xl text-black font-bold text-opacity-70 mb-4">
              {product.attributes.category}
            </h2>
            <h3 className="text-2xl font-bold text-gray-300 mb-3">{product.attributes.company}</h3>
            <p className="text-xl mb-4">${product.attributes.price / 100}</p>
            <p className="w-[500px] leading-8 mb-4">{product.attributes.description}</p>
            <h4 className="mb-2 font-medium">Colors</h4>
            <div className="flex space-x-2 mb-4">
              {product.attributes.colors.map((color: string, index: number) => (
                <div
                  key={index}
                  className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <div className="flex flex-col">
              <label htmlFor="label">Amount</label>
              <select id="label" className="border-2 w-[300px] py-3 px-2 mt-3 rounded-xl mb-4">
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <button className="w-[150px] rounded-xl bg-blue-800 text-gray-300 hover:bg-blue-900 mt-5 py-3 px-2">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
