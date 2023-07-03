import {React} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./bookmark.css";

import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";

export function Bookmarks() {

  

  const {bookmarks} = useData();
    return(
        <div className="container">
        <Navbar />        
        
        <LeftSideBar />
        
        <main className="main">
        <div className="flex flex-space-between mr-xxl flex-align-center pt-s latest-post-heading">
            <h3 className="">BookMarks</h3>            
        </div>
          { bookmarks?.length !== 0 ?
          bookmarks?.map((bookmark)=>{return(<Post post={bookmark} key={bookmark._id}/>)}) :
           "there are no BOOKMARKS"
          }
        </main>
         {<RightSideBar/>}
      </div>
    
    )
}