import {React,useEffect} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./bookmark.css";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";

export function Bookmarks() {
  const {bookmarks,allPosts,getPostsData,getUsersData,fetchBookmarks} = useData();
  const {token} = useAuth();
  useEffect(() =>{getPostsData();getUsersData();fetchBookmarks(token)},[]);
  
    return(
        <div className="container">
        <Navbar />        
        
        <LeftSideBar />
        
        <main className="main">
        <div className="flex flex-space-between m-auto flex-align-center pt-s latest-post-heading">
            <h3 className="">BookMarks</h3>            
        </div>
          { bookmarks?.length !== 0 ?          
          allPosts?.filter((post) => (bookmarks.some((bookmark) => bookmark._id === post?._id)))
          .map((bookmark)=>{return(<Post post={bookmark} key={bookmark._id}/>)}) :
           "there are no BOOKMARKS"
          }
        </main>
         {<RightSideBar/>}
      </div>
    
    )
}