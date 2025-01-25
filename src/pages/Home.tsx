import { FC } from 'react'
import { Link } from 'react-router-dom'
import headImage from '../images/headImage.jpg'

const Home: FC = () => {

    return (
        <div className='w-[1150px] mx-auto'>
            <div className='w-[1150px] mx-auto flex justify-between mt-20'>
                <div className='w-[500px]'>
                    <h2 className='text-6xl font-bold text-slate-900 mb-5 opacity-80'>We are changing the way people shop</h2>
                    <p className='w-[550px] mb-20 leading-9 text-xl	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                    <Link to={'/product'} className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mt-8'>OUR PRODUCTS</Link>
                </div>
                <div>
                    <img src={headImage} alt="header image" className='w-[500px]' />
                </div>
            </div>
            <div className='mb-20'>
                <div>
                    <h2 className='border-b text-3xl font-medium pb-3 '>Featured Products</h2>
                </div>
                <div className='mt-16 flex  justify-between'>
                    <div className='shadow-xl w-[370px] p-4 rounded-xl cursor-pointer hover:shadow-2xl'>
                        <img src={headImage} className='w-[350px] h-[200px] rounded-md' alt="" />
                        <h3 className='text-center mt-5 text-2xl font-medium mb-1'>nomi </h3>
                        <p className='text-center text-blue-900'>4365,1</p>
                    </div>
                    <div className='shadow-xl w-[370px] p-4 rounded-xl cursor-pointer hover:shadow-2xl'>
                        <img src={headImage} className='w-[350px] h-[200px] rounded-md' alt="" />
                        <h3 className='text-center mt-5 text-2xl font-medium mb-1'>nomi </h3>
                        <p className='text-center text-blue-900'>4365,1</p>
                    </div>
                    <div className='shadow-xl w-[370px] p-4 rounded-xl cursor-pointer hover:shadow-2xl'>
                        <img src={headImage} className='w-[350px] h-[200px] rounded-md' alt="" />
                        <h3 className='text-center mt-5 text-2xl font-medium mb-1'>nomi </h3>
                        <p className='text-center text-blue-900'>4365,1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
