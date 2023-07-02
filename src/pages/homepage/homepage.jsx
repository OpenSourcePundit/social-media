import {React,useContext} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./homepage.css";
import { useNavigate, Link } from "react-router-dom";
import bootstrap from "bootstrap";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { CreatePost } from "../components/maincomponent/createpost/createpost";
// import { Profile } from "../components/maincomponent/profile/profile";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";

export function HomePage() {
  const navigate = useNavigate();
  const {allPosts,allUsers,getUsersData} = useData();
  return (
    <div className="container">
      <Navbar />
      <LeftSideBar />   
      <main className="main">
        {/* <Profile/> */}
        <CreatePost/>
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s latest-post-heading">
          <h3 className="">Latest Posts</h3>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-funnel p-xs"></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        {allPosts?.map((post)=>{return(<Post post={post} key={post._id}/>)})}
        {/* {<Post/>}
        {<Post/>} */}
      </main>
       {<RightSideBar/>}
    </div>
  );
}
