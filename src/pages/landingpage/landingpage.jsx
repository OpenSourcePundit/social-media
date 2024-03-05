import React from "react";
import "./../../base.css";
import "./../../utility.css";
import "./landingpage.css"
import {useNavigate} from 'react-router-dom'



export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-center h-full w-full" style={{ gap: '10rem' }}>
      <div className="flex flex-column flex-space-between social-circle-landing-text" style={{ height: '70vh', width: '25rem' }}>
        <h2 className="fw-black txt-xl"><span className="primary-color">Social</span> Circle</h2>
        <div className="flex flex-column" style={{ gap: '1.2rem' }}>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">FOLLOW</span> PEOPLE AROUND THE GLOBE
          </h2>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">CONNECT</span> WITH YOUR FRIENDS
          </h2>
          <h2 className="txt-xs">
            <span className="txt-l grey-color">SHARE</span> WHAT YOU THINKING
          </h2>
        </div>
        <div>
          <button className="primary-bg w-100 p-s secondary-color border-none outline-none txt-s" onClick={()=>navigate("/signup")}>Join Now</button>
          <p className="primary-color txt-s txt-center mt-xs" style={{cursor:"pointer"}} onClick={()=>navigate("/login")}>Already have an account?</p>
        </div>
      </div>
      <div className="grey-bg social-circle-landing-image" style={{ height: '70vh', width: '30rem' }}>
      </div>
    </div>
  );
}
