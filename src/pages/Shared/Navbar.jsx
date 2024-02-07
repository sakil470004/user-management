import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { FaRegUserCircle } from 'react-icons/fa';
import { CiDark } from 'react-icons/ci';
import { BsLightningCharge } from 'react-icons/bs';
import { AuthContext } from '../../providers/AuthProvider';
import {AiOutlineLogout } from "react-icons/ai";
const Navbar = () => {

    const { user, logOut, setDark, dark } = useContext(AuthContext);

    const handleChange = (e) => {
        setDark(e.target.checked)
    }
    const handleLogout = () => {
        logOut()
            .then()
    }
    // this is toggle button custom made by sakil
    const darkButton = <label className='badge badge-error my-auto select-none flex justify-center items-center'>{dark ? <CiDark/> : <BsLightningCharge/>}
        <input type="checkbox" className="toggle toggle-error border-2 hidden" onChange={handleChange} defaultValue={dark} />
    </label>
    const navElement = <>
        <li><NavLink className='md:ml-4 hover:bg-red-200 hover:text-white' to={'/'}>Home</NavLink></li>
        <li><NavLink className='md:ml-4 hover:bg-red-200 hover:text-white' to={'/table'}>User Table</NavLink></li>
    </>
    return (
        <div className="navbar justify-center  max-h-20 shadow-md rounded-md md:px-4 m-0  py-2 md:py-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost   lg:hidden ">
                       |||
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[9999]">
                        {navElement}
                        {darkButton}
                    </ul>

                </div>
                <NavLink to={'/'} ><div className=' md:text-xl text-error font-semibold text-2xl'>User Management</div></NavLink>
            </div>
            

                <div className="navbar-center hidden lg:flex my-auto">
                    <ul className="menu menu-horizontal px-1">
                        {navElement}
                    </ul>

                {darkButton}
                </div>
            
            <div className="navbar-end">




                {user ? <div className='flex gap-4 items-center justify-center'>
                    {user?.photoURL ?
                        <div className="avatar">
                            <div className="w-11 md:w-14  rounded-full">
                                <img title={user?.displayName} src={user.photoURL} />
                            </div>
                        </div> :
                        <p title={user?.displayName} className="text-2xl md:text-3xl"><FaRegUserCircle /></p>}
                    <button className='btn btn-error btn-outline' onClick={handleLogout}><AiOutlineLogout/></button>
                </div>
                    :
                    <Link className='btn btn-sm btn-error md:btn-md text-white' to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;