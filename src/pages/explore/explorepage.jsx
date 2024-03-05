import {React,useEffect} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./explorepage.css";
import { useNavigate, Link } from "react-router-dom";
import bootstrap from "bootstrap";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { CreatePost } from "../components/maincomponent/createpost/createpost";
// import { Profile } from "../components/maincomponent/profile/profile";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

export function ExplorePage() {
  const navigate = useNavigate();
  const {allPosts,allUsers,getPostsData,getUsersData,fetchBookmarks,setSortBy,sortPost,sortBy,postSearch,dispatch} = useData();
  const {token} = useAuth();
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
     


        <div className="flex flex-space-between p-s flex-align-center flex-justify-center pt-s latest-post-heading">
          
          <h3 style={{font: "8vw"}} className="">{postSearch ===""?`Explore ${sortBy} Posts`:`Search Results  ${sortBy}`}</h3>
          <div className="white-bg mr-s ml-s border flex flex-row flex-center nowrap searchbox1">
          <i className="bi bi-search p-s"></i>
          <input type="search" name="search-bar" value={postSearch} className="search-bar w-100 border-none outline-transparent p-xs width-19 " placeholder="Search Posts" onChange={(e)=>dispatch({type:"postsearch",payload:e.target.value})} />
        </div>
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
            <a className="dropdown-item" onClick={(e)=>{setSortBy('Trending')}}>
                Sort By Trending
              </a>
              <a className="dropdown-item" onClick={(e)=>{setSortBy('Latest')}}>
                Sort By Date
              </a>
            </div>
          </div>
        </div>
        {allPosts.filter((post)=>{return(post.username.toLowerCase().includes(postSearch.toLowerCase()) || post.username.toLowerCase().includes(postSearch.toLowerCase()))}).length !==0 ?
        
        
        sortPost(allPosts.filter((post)=>{return(post.username.toLowerCase().includes(postSearch.toLowerCase()) || post.username.toLowerCase().includes(postSearch.toLowerCase()))}),sortBy).
        map((post)=>{return(<Post post={post} key={post._id}/>)}): `No posts to Show`}
       
      </main>
       {<RightSideBar/>}
    </div>
  );
}


