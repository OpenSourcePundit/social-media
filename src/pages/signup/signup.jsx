import React from "react";
import "./../../base.css";
import "./../../utility.css";
import {useNavigate} from 'react-router-dom'

import {useForm} from 'react-hook-form';

export function SignUp(){
  const navigate = useNavigate();
  const form = useForm();
  const{register,handleSubmit,control} = form;

  const submitHandler = (data) =>{
    console.log(data);

  }

    return(
      <div className="flex flex-column flex-center h-full w-full">
      <h2 className="fw-black mb-m">
        <span className="primary-color">My</span> Website
      </h2>
      <div className="white-bg br-m p-xxl pt-l pb-l" style={{ width: '30rem' }}>
        <h3 className="txt-center mb-s txt-l">Signup</h3>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-column">
          <label htmlFor="name" className="txt-s">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-xs txt-s lynx-white-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="Name" {...register("name")}
          />
        </div>
        <div className="flex flex-column">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-xs txt-s lynx-white-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="Username" {...register("username")}
          />
        </div>
        <div className="flex flex-column">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            className="p-xs txt-s black-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="shashank@neog.camp" {...register("email")}
          />
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
        </div>
        <div className="flex flex-column">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="p-xs txt-s black-color br-s flex items-center"
            style={{ border: '1px solid grey' }}
            placeholder="************" {...register("confirm-password")}
          />
        </div>
        <div className="flex flex-align-center flex-space-between mt-m mb-m">
          <div className="txt-s flex flex-align-center">
            <input className="p-s txt-cursor" type="checkbox" name="accept-terms" id="" />
            <label className="pl-xs txt-cursor" htmlFor="accept-terms">
              I accept all Terms &amp; Conditions
            </label>
          </div>
        </div>
        <button onClick={()=>handleSubmit(submitHandler)} className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Create New Account
        </button>
     </form>
        <p className="txt-center w-full mt-m" style={{ display: 'block' }}onClick={()=>navigate("/login")}>
          Already have an account ?
        </p>
      </div>
    </div>
    )
    }