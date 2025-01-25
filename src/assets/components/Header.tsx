import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='bg-slate-900 text-white text-md gap-5 text-opacity-60	 py-2 flex justify-end  pr-[200px]'>
                <Link to="/signin" className="hover:underline">
                    Sign in/Guest
                </Link>

                <Link to={'/signup'} className='hover:underline'>Create Accout</Link>
            </div>
            <header className="bg-blue-100">
                <div className="w-[1200px] mx-auto px-5 py-3 flex items-center justify-between">
                    <div>
                        <NavLink
                            to="/"
                            className="bg-blue-600 text-white px-4 py-1 rounded-md text-3xl font-medium"
                        >
                            C
                        </NavLink>
                    </div>

                    <nav className="flex gap-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-2 py-1 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-2 py-1 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                `px-2 py-1 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `px-2 py-1 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-gray-300'}`
                            }
                        >
                            Cart
                        </NavLink>
                    </nav>

                    <div className="flex gap-4 items-center">
                        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                            Dark Mode
                        </button>
                        <h2>Products</h2>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
