import {React} from "react";
import "./../../base.css";
import "./../../utility.css";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../context/auth-context";
import authImage from "../../assets/Untitled.avif";
import {useForm} from 'react-hook-form';
import "./signup.css";

export function SignUp(){
  const navigate = useNavigate();
  const form = useForm();
  const{register,handleSubmit,watch,formState} = form;
  const {errors} = formState;
  const {signupHandler,loginHandler} = useAuth();

  const submitHandler = ({name, username, password,email}) =>{
    console.log("email",email,"name",name,"username",username,"password",password);
    signupHandler(username, password,email,name);
    navigate("/home");
  }

    return(
      <div className="flex flex-column flex-center h-full w-full  ">
      <h2 className="fw-black mb-m gen-btn " onClick={()=>{navigate("/")}}>
        <span className="primary-color">Social</span> Circle
      </h2>
      <div className="auth-page-wrapper w-full h-full d-flex">
        <div className="landing-img-wrapper w-50 flex flex-column flex-left">
          <img src={authImage} alt="img"  />

        </div>
        <div className="br-m p-l flex  flex-column flex-center auth-tile-wrapper" >
        <h3 className="txt-center mb-s txt-m">Signup</h3>

      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="flex flex-column">
          <input
            type="text"
            name="name"
            id="name"
            className="p-xs txt-s black-color br-s mb-s primary-bg"
            style={{ border: '1px solid grey' }}
            placeholder="Name" {...register("name",{required:{value:true,message:"Name is Required"}})}
          />
          <p className="error-msg">{errors.name?.message}</p>
        </div>
        <div className="flex flex-column">
          <input
            type="text"
            name="username"
            id="username"
            className="p-xs txt-s black-color br-s mb-s primary-bg"
            style={{ border: '1px solid grey' }}
            placeholder="Username" {...register("username",{required:{value:true,message:"Username is Required"}})}
          />
           <p className="error-msg">{errors.username?.message}</p>
        </div>
        <div className="flex flex-column">
          <input
            type="text"
            name="email"
            id="email"
            className="p-xs txt-s black-color br-s mb-s primary-bg"
            style={{ border: '1px solid grey' }}
            placeholder="Email" {...register("email",{pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }})}
          />
           <p className="error-msg">{errors.email?.message}</p>
        </div>
        <div className="flex flex-column">
          <input
            type="password"
            name="password"
            id="password"
            className="p-xs txt-s black-color br-s flex mb-s items-center primary-bg"
            style={{ border: '1px solid grey' }}
            placeholder="Password" {...register("password")}
          />
           <p className="error-msg">{errors.password?.message}</p>
        </div>
        <div className="flex flex-column">
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className="p-xs txt-s black-color br-s mb-s flex items-center primary-bg"
            style={{ border: '1px solid grey' }}
            placeholder="Confirm Password" {...register("confirmpassword",  { 
              required: true,
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
           <p className="error-msg">{errors.confirmpassword?.message}</p>
        </div>
        
       
        <button type="submit" className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Create New Account
        </button>
     </form>
        <p className="txt-center w-full mt-m" style={{ display: 'block',cursor:"pointer" }}onClick={()=>navigate("/login")}>
          Already have an account ?
        </p>
        <button className="pl-xs primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s " onClick={()=>loginHandler("adarshbalika","1")}>
              Login As Test User
            </button>
      </div>
      </div>
      
    </div>
    )
    }