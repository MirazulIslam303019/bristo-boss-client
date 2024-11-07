import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import img2 from '../../../bistro-boss-restaurant-resources-main/assets/others/authentication2.png'

const Login = () => {
    
    const [disabled,setDisabled]=useState(true)
    const navigate=useNavigate()
    const location=useLocation();

    const from=location.state?.from?.pathname || "/";
  

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const {signIn}=useContext(AuthContext);

    const handleToLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password}
        console.log(user)

        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)

            Swal.fire("Login Successfully");
       
        })
        navigate(from,{replace:true})
       
    }
    const handleToValidateCapcha=(e)=>{
        const value=e.target.value;
        if(validateCaptcha(value)){
            setDisabled(false)
        }
        else{
          setDisabled(true)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content  ">
    <div className="text-center md:w-1/2 lg:text-left">
     
      <img src={img2} alt="" />
    </div>
    <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
      <form className="card-body" onSubmit={handleToLogin}>
      <h1 className="text-5xl font-bold text-center text-[#D1A054]">Login now!</h1>
      

        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label"> 
          <LoadCanvasTemplate />
          </label>
          <input type="text" name='capcha' onBlur={handleToValidateCapcha} placeholder="type the capcha above" className="input input-bordered" required />
            
        </div>
        <div className="form-control mt-6">
          
          <input disabled={disabled} className="btn bg-[#D1A054] text-white"  type="submit" value="Login" />
          <p className="mt-2  text-[#D1A054]">New here? <Link className="font-semibold text-[#D1A054]" to='/signUp'> Create a New Account</Link> </p>
        </div>
        
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;