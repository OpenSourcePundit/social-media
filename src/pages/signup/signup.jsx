import React from "react";
import "./../../base.css";
import "./../../utility.css";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../context/auth-context";

import {useForm} from 'react-hook-form';

export function SignUp(){
  const navigate = useNavigate();
  const form = useForm();
  const{register,handleSubmit,watch,formState} = form;
  const {errors} = formState;
  const {signupHandler} = useAuth();

  const submitHandler = ({name, username, password,email}) =>{
    console.log("email",email,"name",name,"username",username,"password",password);
    signupHandler(name, username, password,email);
  }

    return(
      <div className="flex flex-column flex-center h-full w-full">
      <h2 className="fw-black mb-m gen-btn " onClick={()=>{navigate("/")}}>
        <span className="primary-color">My</span> Website
      </h2>
      <div className="white-bg br-m p-xxl pt-l pb-l" style={{ width: '30rem' }}>
        <h3 className="txt-center mb-s txt-l">Signup</h3>

      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="flex flex-column">
          <label htmlFor="name" className="txt-s">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-xs txt-s black-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="Name" {...register("name",{required:{value:true,message:"Name is Required"}})}
          />
          <p className="error-msg">{errors.name?.message}</p>
        </div>
        <div className="flex flex-column">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-xs txt-s black-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="Username" {...register("username",{required:{value:true,message:"Username is Required"}})}
          />
           <p className="error-msg">{errors.username?.message}</p>
        </div>
        <div className="flex flex-column">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-xs txt-s black-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="shashank@neog.camp" {...register("email",{pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }})}
          />
           <p className="error-msg">{errors.email?.message}</p>
        </div>
        <div className="flex flex-column">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="p-xs txt-s black-color br-s flex mb-s items-center"
            style={{ border: '1px solid grey' }}
            placeholder="************" {...register("password")}
          />
           <p className="error-msg">{errors.password?.message}</p>
        </div>
        <div className="flex flex-column">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className="p-xs txt-s black-color br-s mb-s flex items-center"
            style={{ border: '1px solid grey' }}
            placeholder="************" {...register("confirmpassword",  { 
              required: true,
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
          />
           <p className="error-msg">{errors.confirmpassword?.message}</p>
        </div>
        <div className="flex flex-align-center flex-space-between mt-m mb-m">
          <div className="txt-s flex flex-align-center">
            <input className="p-s txt-cursor" type="checkbox" name="accept-terms" id="" />
            <label className="pl-xs txt-cursor" htmlFor="accept-terms">
              I accept all Terms &amp; Conditions
            </label>
          </div>
        </div>
        <button type="submit" className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Create New Account
        </button>
     </form>
        <p className="txt-center w-full mt-m" style={{ display: 'block',cursor:"pointer" }}onClick={()=>navigate("/login")}>
          Already have an account ?
        </p>
      </div>
    </div>
    )
    }