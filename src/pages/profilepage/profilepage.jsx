import {React} from "react";
import "./../../base.css";
import "./../../utility.css";
import "./profilepage.css";
import {useParams} from "react-router-dom";


import { Navbar } from "../components/nav";
import { LeftSideBar } from "../components/sidecomponent/leftcomponent/leftsidebar";
import { Post } from "../components/maincomponent/posts/post";
import { Profile } from "../components/maincomponent/profile/profile";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";


import { useData } from "../../context/data-context";

export const ProfilePage = () =>{
    // const navigate = useNavigate();
    const {allPosts,allUsers} = useData();
    
    const {username} = useParams();

    return (
        <div className="container">
          <Navbar />
          <LeftSideBar />   
          <main className="main">
            <Profile user={allUsers.find((user)=>user.username===username)}/>
            <div className="flex flex-space-between m-auto flex-align-center pt-s latest-post-heading">
              <h3 className="">{allUsers.find((usr)=>usr.username===username).name}'s Posts</h3>
              {/* <div className="dropdown">
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
                <a className="dropdown-item" href="#" onClick={(e)=>{e.preventDefault();sortByTrending(allPosts)}}>
                Sort By Trending
              </a>
              <a className="dropdown-item" href="#" onClick={(e)=>{e.preventDefault();sortByDate(allPosts)}}>
                Sort By Date
              </a>
                </div>
              </div> */}
            </div>
            {allPosts.filter((post)=>post.username===username).map((post)=>{return(<Post post={post} key={post._id}/>)})}
          </main>
           {<RightSideBar/>}
        </div>
      );
}