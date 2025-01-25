import { FC } from 'react'
import { Link } from 'react-router-dom'

const Login: FC = () => {
    return (
        <div className='w-[350px] mx-auto shadow-xl rounded-xl    mt-20 p-5'>
            <form className='flex flex-col'>
                <h2 className='text-3xl font-bold text-center mb-4'>Register</h2>
                <label htmlFor="user">Username</label>
                <input type="text" id="user" className='border focus:outline-none shadow-md py-2 px-3 mt-1 mb-5' />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className='border focus:outline-none shadow-md py-2 px-3 mt-1 mb-5' />
                <label htmlFor="passwd">Password</label>
                <input type="number" id="passwd" className='border focus:outline-none shadow-md py-2 px-3 mt-1 mb-5' />
                <Link to={'/'} className='bg-blue-500 text-center text-white py-3 rounded-md hover:bg-blue-600 mb-3 font-medium'>Register</Link>
            </form>
            <div className='flex text-center mx-auto gap-5 ml-10'>
                <p>Already a member?</p>
                <Link to={'/signin'} className='text-blue-900 hover:underline'>LOGIN</Link>
            </div>
        </div>
    )
}

export default Login
