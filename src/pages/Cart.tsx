import { FC, useEffect, useState } from 'react'
import axios from 'axios'

const Cart: FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('') // Rasmni yuklash uchun holat

  useEffect(() => {
    // Rasm URL
    const imageUrl = 'https://example.com/path-to-image.jpg'

    // Axios orqali rasmni olish
    axios
      .get(imageUrl, { responseType: 'blob' }) // Blob formatida olish
      .then(response => {
        // Rasmni ko‘rsatish uchun blobni URL yaratish
        const imageBlobUrl = URL.createObjectURL(response.data)
        setImageSrc(imageBlobUrl)
      })
      .catch(error => {
        console.error('Rasm yuklashda xato:', error)
      })

    // Tozalanadigan efekt
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc) // Xotirani tozalash
      }
    }
  }, [])

  return (
    <div className='w-[1150px] mx-auto'>
      <div className='mt-16'>
        <div className='border-b mb-5'>
          <h2 className='pb-4 text-3xl font-medium text-black text-opacity-60'>
            Shopping Cart
          </h2>
        </div>
        <div className='flex justify-between'>
          <div>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt='Product'
                className='w-[120px] rounded-xl'
              />
            ) : (
              <p>Rasm yuklanmoqda...</p>
            )}
          </div>
          <div>
            <h2 className='font-medium text-md mb-2'>chair char</h2>
            <h4 className='text-gray-300 font-medium mb-2'>company name</h4>
            <p>Color:</p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='label' className='mb-2'>
              Amount
            </label>
            <select
              id='label'
              className='border-2 shadow-md mb-2 px-2 py-1 rounded-xl'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <button className='text-blue-500 hover:underline'>remove</button>
          </div>
          <div>
            <p className='font-medium'>$44325</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
