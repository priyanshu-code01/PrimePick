import { Link, NavLink } from 'react-router'
import { assets } from '../assets/assets'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const { setShowSearch, getCartCount } = useContext(ShopContext)

    const navClasses = ({ isActive }) => `flex flex-col items-center gap-1 hover:text-black ${isActive ? 'border-b-2 border-gray-700 text-black' : 'border-none'}`

    const sidebarNavClasses = ({isActive}) => `py-2 pl-6 hover:text-black ${isActive ? 'border-b-2 border-gray-700 text-black' : 'border-none'}`

    const [visible, setVisible] = useState(false)

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className={navClasses}>
                    <p>HOME</p>
                </NavLink>

                <NavLink to='/collection' className={navClasses}>
                    <p>COLLECTION</p>
                </NavLink>

                <NavLink to='/about' className={navClasses}>
                    <p>ABOUT</p>
                </NavLink>

                <NavLink to='/contact' className={navClasses}>
                    <p>CONTACT</p>
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className="group relative">
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className="absolute -right-1.5 -bottom-1.5 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>

                <img src={assets.menu_icon} onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar menu */}
            <div className={`absolute top-0 right-0 rounded-2xl bg-white border-2 border-black/10 overflow-hidden transition-all ${visible ? 'w-full' : 'w-0 hidden'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={() => setVisible(false)} className={sidebarNavClasses} to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={sidebarNavClasses} to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={sidebarNavClasses} to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className={sidebarNavClasses} to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
