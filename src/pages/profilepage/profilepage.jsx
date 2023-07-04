import {React,useEffect} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./profilepage.css";
import { useNavigate, Link,useParams} from "react-router-dom";
import bootstrap from "bootstrap";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { Profile } from "../components/maincomponent/profile/profile";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

export const ProfilePage = () =>{
    const navigate = useNavigate();
    const {allPosts,allUsers,getPostsData,getUsersData,fetchBookmarks,state} = useData();
    const {token,currUser} = useAuth();
    const {username} = useParams();
    console.log(username);

    return (
        <div className="container">
          <Navbar />
          {console.log("state",state)}
          <LeftSideBar />   
          <main className="main">
            <Profile user={allUsers.find((user)=>user.username===username)}/>
            <div className="flex flex-space-between mr-xxl flex-align-center pt-s latest-post-heading">
              <h3 className="">{allUsers.find((usr)=>usr.username===username).name}'s Posts</h3>
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
            {allPosts.filter((post)=>post.username===username).map((post)=>{return(<Post post={post} key={post._id}/>)})}
          </main>
           {<RightSideBar/>}
        </div>
      );
}