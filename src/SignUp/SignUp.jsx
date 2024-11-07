import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import img from '../../bistro-boss-restaurant-resources-main/assets/others/authentication2.png'


const SignUp = () => {
  
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const {createUser}=useContext(AuthContext);
  const onSubmit = data => 
    

    createUser( data.email,data.password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      reset()
      
    })
  
  
    return (
        <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-5xl font-bold text-center text-[#D1A054]">Sign Up</h1>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" required />
          {errors.name && <span>Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" required />

          
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Sign Up" className="btn bg-[#D1A054] text-white" />
          <p className="mt-2 text-[#D1A054]">Already registered ? <Link className="font-semibold text-[#D1A054]" to='/login'>Go to log in</Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;