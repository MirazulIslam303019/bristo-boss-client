
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';


import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({item}) => {
    const {name,recipe,price,image,_id}=item;
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()
     const nagigate=useNavigate()
     const location=useLocation();
     const [refetch]=useCart();
     
     
    const handleToCart=()=>{
      if(user && user.email){
        // TODO:Send cart item to the database
        
        const cartItem={
          menuId:_id,
          email:user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart
            refetch()
            
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged In",
          text: "Please login to add to the cart ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,Login"
        }).then((result) => {
          if (result.isConfirmed) {
           nagigate('/login',{state:{from:location}} ) 
          }
        });
      }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={image}
      alt="Shoes" />
      
  </figure>
  <p className='bg-slate-900 text-white absolute right-0 top-2 end-3 px-2'>{price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='text-start'>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={handleToCart}
       className="btn btn-outline bg-base-100 border-0 border-b-4 border-orange-500">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;