
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../Hooks/useCart';

const Navbar = () => {
   const {user,logOut}=useContext(AuthContext)
   const [cart]=useCart();
   const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
   }
    const navigation=
    <>
    <li> <Link to='/'>Home</Link> </li>
    <li> <Link to='/menu'>Our Menu</Link> </li>
    <li> <Link to='/Order/salad'>Order Food</Link> </li>

   <li>
   <Link to='/deshboard/cart'>
    <button className="btn btn-ghost">
      <FaShoppingCart></FaShoppingCart>
    < div className="badge badge-secondary">+{cart.length}</div>
    </button>
    </Link>
   </li>

    




    {
      user ? <>
      <button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button>
      </> 
       :
      <>
      <li> <Link to='/login'>Login</Link> </li>
      </>
    }
    
    </>
       
    
    
    return (
        <div className="navbar max-w-7xl  fixed z-20 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" btn lg:hidden ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 ">
          {navigation}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navigation}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;