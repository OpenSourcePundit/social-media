import {React} from "react";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import "./../../base.css";
import "./../../utility.css";
import {useAuth} from "../../context/auth-context";

export function Login(){
   const {loginHandler} = useAuth();

   const navigate = useNavigate();
   const form = useForm();
   const{register,handleSubmit,watch,formState} = form;
   const {errors} = formState;

   const onSubmitHandler = ({username, password}) =>{
    loginHandler(username,password);
   } 
   
  

    return(
        <div className="flex flex-column flex-center h-full w-full">
      <h2 className="fw-black txt-xl mb-m gen-btn" onClick={()=>{navigate("/")}}>
        <span className="primary-color">Social</span> Circle
      </h2>
      <div className="white-bg br-m p-xxl pt-xl pb-xl" style={{ width: '30rem' }}>
        <h3 className="txt-center mb-m txt-l">Login</h3>
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <div className="flex flex-column">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-xs txt-s black-color br-s mb-s"
            style={{ border: '1px solid grey' }}
            placeholder="tanay-neog" 
            {...register("username"
            // ,{pattern: {
            //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //   message: "invalid email address"
            // }}
            )}
          />
          <p className="error-msg">{errors.email?.message}</p>
        </div>
        <div className="flex flex-column">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-xs txt-s black-color br-s flex items-center"
            style={{ border: '1px solid grey' }}
            placeholder="************"  {...register("password")}
          />
          <p className="error-msg">{errors.password?.message}</p>
        </div>
        <div className="flex flex-align-center flex-space-between mt-m mb-m">
          <div className="txt-s flex flex-align-center">
            
          </div>
          {/* <p href="#" className="action-color">
            Forgot your password?
          </p> */}
        </div>
        <button type="submit" className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s">
          Login
        </button>
      </form>
        <p href="#" className="txt-center w-full mt-m" style={{ display: 'block',cursor:"pointer" }}onClick={()=>navigate("/signup")}>
          Create New Account &gt;
        </p>

        <button className="pl-xs primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s " onClick={()=>loginHandler("adarshbalika","1")}>
              Login As Test User
            </button>
      </div>
    </div>
    )
}