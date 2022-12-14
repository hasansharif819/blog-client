import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };

    const menuItems = <>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/addBlog">Add Blog</Link></li>
        <li><Link to="/user">user_id</Link></li>
        <li><Link to="/myBlog">My Blog</Link></li>
        

        <li>{user ? <button className="btn btn-ghost font-bold"  onClick={logout} >Sign Out <img className='rounded-xl' height={20} width={20}  src={user.photoURL} alt="" /> <span> {user.displayName}</span></button> : <Link to="/login">Login</Link>}</li>
        { !user && <li><Link to="/register">Register</Link></li>}

    </>
    return (
        <div>
            <div className="navbar bg-base-100 bg-secondary font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Blog</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
            </div>
            </div>
            
        </div>
    );
};


export default Navbar;