import {React,useEffect} from "react";
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
import { Modals } from "../../allmodals";

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

export function HomePage() {
  const navigate = useNavigate();
  const {allPosts,allUsers,getPostsData,getUsersData,fetchBookmarks,state,sortByTrending,sortBy,setSortBy,sortPost} = useData();
  const {token,currUser} = useAuth();
//   if(currUser){
//     if(allUsers.some((usr)=>usr.username===currUser.username)){}
//     else{
//      dispatch({
//          type:"add_new_user",
//          payload: currUser,
//      })
//     }
// }
useEffect(() =>{getPostsData();getUsersData();fetchBookmarks(token)},[]);
  return (
    <div className="container">
      <Navbar />
      <LeftSideBar />   
      <main className="main">
        {/* <Profile/> */}
        {/* <CreatePost/> */}
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s latest-post-heading">
          <h3 className="">{`${sortBy}`} Posts</h3>
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
              <a className="dropdown-item" href="#" onClick={(e)=>{setSortBy('Trending')}}>
                Sort By Trending
              </a>
              <a className="dropdown-item" href="#" onClick={(e)=>{setSortBy('Latest')}}>
                Sort By Date
              </a>
              
            </div>
          </div>
        </div>
        {/* {console.log("state@home",state)} */}
        {sortPost( allPosts?.filter((post)=>allUsers?.find((user)=>user?.username===currUser?.username)?.following?.some((following)=>following?.username===post?.username)),sortBy)?.map((post)=>{return(<Post post={post} key={post?._id}/>)})}
      </main>
       {<RightSideBar/>}
    </div>
  );
}



