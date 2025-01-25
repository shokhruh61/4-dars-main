import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import skale from '../images/skale.jpg'
import burger from '../images/burger.jpg'

interface Product {
  id: number
  attributes: {
    company: string
    description: string
    category: string
    name: string
    price: number
    image: string
  }
}

const Products: FC = () => {
  const [price, setPrice] = useState<number>(500)
  const [products, setProducts] = useState<Product[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }

  useEffect(() => {
    axios
      .get('https://strapi-store-server.onrender.com/api/products')
      .then(response => {
        const fetchedProducts = response.data.data
        console.log(fetchedProducts)
        setProducts(fetchedProducts)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className='w-[1150px] mx-auto'>
      <div className='bg-blue-100 p-5 mt-16 rounded-md shadow-xl mb-10'>
        <div className='flex justify-between mb-8'>
          <form className='flex flex-col'>
            <label htmlFor='search'>Search Product</label>
            <input
              type='text'
              id='search'
              className='mt-2 rounded-md border-3 focus:outline-none py-1 px-3 shadow-md'
            />
          </form>
          <div className='flex flex-col'>
            <label htmlFor='category'>Select Category</label>
            <select
              id='category'
              className='mt-2 rounded-md border-3 focus:outline-none py-1 px-3 shadow-md w-[230px]'
            >
              <option value='all'>all</option>
              <option value='Tables'>Tables</option>
              <option value='Chairs'>Chairs</option>
              <option value='Kids'>Kids</option>
              <option value='Sofas'>Sofas</option>
              <option value='Beds'>Beds</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='company'>Select Company</label>
            <select
              id='company'
              className='mt-2 rounded-md border-3 focus:outline-none py-1 px-3 shadow-md w-[230px]'
            >
              <option value='all'>all</option>
              <option value='Modenza'>Modenza</option>
              <option value='Luxora'>Luxora</option>
              <option value='Artifex'>Artifex</option>
              <option value='Comfora'>Comfora</option>
              <option value='Homestead'>Homestead</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='sort'>Sort By</label>
            <select
              id='sort'
              className='mt-2 rounded-md border-3 focus:outline-none py-1 px-3 shadow-md w-[230px]'
            >
              <option value='a-z'>a-z</option>
              <option value='z-a'>z-a</option>
              <option value='high'>high</option>
              <option value='low'>low</option>
            </select>
          </div>
        </div>
        <div className='flex justify-between'>
          <form className='w-[120px] text-center p-1 border rounded-sm shadow-xs'>
            <h2 className='text-xs font-normal mb-1'>Price</h2>
            <input
              type='range'
              min='0'
              max='1000'
              step='10'
              value={price}
              onChange={handleInputChange}
              className='w-full appearance-none bg-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
            <p className='text-xs font-normal mt-1'>${price}</p>
          </form>
          <div className='flex flex-col items-center space-y-2 text-center w-[230px]'>
            <label
              htmlFor='checkbox'
              className='text-lg font-semibold text-gray-700 cursor-pointer'
            >
              Free Shipping
            </label>
            <input
              type='checkbox'
              id='checkbox'
              className='w-6 h-6 text-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 hover:border-blue-500 transition duration-200'
            />
          </div>
          <div>
            <button className='bg-blue-500 py-1 rounded-md shadow-md cursor-pointer text-white w-[230px]'>
              SEARCH
            </button>
          </div>
          <div>
            <button className='bg-pink-500 py-1 rounded-md shadow-md cursor-pointer text-white w-[230px]'>
              RESET
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-between border-b mb-10'>
        <h3 className='pb-5'>21 products</h3>
        <div className='flex gap-3'>
          <img
            src={skale}
            alt='skale'
            className='cursor-pointer w-[30px] h-[30px]'
          />
          <img
            src={burger}
            alt='burger'
            className='cursor-pointer w-[30px] h-[30px]'
          />
        </div>
      </div>
      <div>
        <div className='mt-16 flex flex-wrap justify-between mb-12'>
          {products.map(product => (
            <Link
              to={`/details/${product.id}`}
              key={product.id}
              className='shadow-xl w-[370px] p-4 rounded-xl cursor-pointer hover:shadow-2xl mb-8'
            >
              <img
                src={product.attributes.image}
                className='w-[350px] h-[200px] rounded-md'
                alt={product.attributes.name}
              />
              <h3 className='text-center mt-5 text-2xl font-medium mb-1'>
                {product.attributes.category}
              </h3>
              <p className='text-center text-blue-900'>
                ${product.attributes.price / 100}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
