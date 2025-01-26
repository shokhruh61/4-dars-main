import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'

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
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }

  const fetchProducts = (page: number) => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products?page=${page}`)
      .then(response => {
        const fetchedProducts = response.data.data
        const totalItems = response.data.meta.pagination.total
        const itemsPerPage = response.data.meta.pagination.pageSize
        setTotalPages(Math.ceil(totalItems / itemsPerPage))
        setProducts(fetchedProducts)
      })
      .catch(error => console.error('Error:', error))
  }

  useEffect(() => {
    fetchProducts(currentPage)
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() })
  }

  return (
    <div className='w-[1150px] mx-auto'>
      <div className='bg-blue-100 p-5 mt-16 rounded-md shadow-xl mb-10'>
        {/* Filtering UI */}
        <div className='flex justify-between mb-8'>
          <form className='flex flex-col'>
            <label htmlFor='search'>Search Product</label>
            <input
              type='text'
              id='search'
              className='mt-2 rounded-md border-3 focus:outline-none py-1 px-3 shadow-md'
            />
          </form>
          {/* Other Filters */}
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
            src='https://via.placeholder.com/30'
            alt='Comfy Store'
            className='cursor-pointer w-[30px] h-[30px]'
          />
          <img
            src='https://via.placeholder.com/30'
            alt='Comfy Store'
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
        {/* Pagination Buttons */}
        <div className='flex justify-center space-x-2'>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  page === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
