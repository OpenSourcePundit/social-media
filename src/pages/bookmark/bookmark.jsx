import React from "react";
import "./../../base.css";
import "./../../utility.css";
import "./bookmark.css";
import { useNavigate, Link } from "react-router-dom";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";
export const Bookmarks = () =>{

    return(
        <div className="container">
        <Navbar />
        <LeftSideBar />
        <main className="main">
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s latest-post-heading">
            <h3 className="">BookMarks</h3>            
          </div>
          {<Post/>}
          {<Post/>}
          {<Post/>}
        </main>
         {<RightSideBar/>}
      </div>
    
    )
}