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
import { Profile } from "../components/maincomponent/profile/profile";
import { RightSideBar } from "../components/sidecomponent/rightcomponent/rightsidebar";

import { useData } from "../../context/data-context";

export function HomePage() {
  const navigate = useNavigate();
  const {allPosts} = useData();
  return (
    //     <div className="flex flex-column ">

    //   <nav className="white-bg" style={{border:"3px solid black"}}>
    //     <div className="p-s pl-xxl txt-m ml-m">
    //       <a href="../../index.html">
    //         <span className="primary-color">My</span>Website
    //       </a>
    //     </div>
    //   </nav>
    //   <div className="flex">
    //   <aside1 className="p-s pt-xl pl-xxl ml-m sidebar1" style={{border:"3px solid yellow"}}>
    //     <div className="flex flex-column flex-space-between sidebar">
    //       <div>
    //         <div className="pt-s black-color fw-semibold">
    //           <a href="">
    //             <i className="bi bi-house"></i> &nbsp;
    //             <span className="fw-bold">Home</span>
    //           </a>
    //         </div>
    //         <div className="pt-s black-color fw-semibold">
    //           <a href="../explore/explore.html">
    //             <i className="bi bi-rocket"></i> &nbsp;
    //             <span>Explore</span>
    //           </a>
    //         </div>
    //         <div className="pt-s black-color fw-semibold">
    //           <a href="../bookmarks/bookmark.html">
    //             <i className="bi bi-bookmark"></i> &nbsp;
    //             <span>Bookmark</span>
    //           </a>
    //         </div>
    //         <div className="pt-s black-color fw-semibold">
    //           <a href="../profile/profile.html">
    //             <i className="bi bi-person"></i> &nbsp;
    //             <span>Profile</span>
    //           </a>
    //         </div>
    //         <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
    //           Create New Post
    //         </button>
    //       </div>
    //       <div className="flex flex-space-between flex-align-center">
    //         <div className="flex">
    //           <div className="grey-bg br-full width-xl height-xl"></div>
    //           <div className="flex flex-column ml-xs">
    //             <div className="fw-bold">Tanay Pratap</div>
    //             <div className="fw-light grey-color">@tanaypratap</div>
    //           </div>
    //         </div>
    //         <div className="grey-color fw-bold">...</div>
    //       </div>
    //     </div>
    //   </aside1>
    //   <main className="mt-xl" style={{border:"3px solid green"}}>
    //     <div className="white-bg mr-xxl p-xs mt-s">
    //       <div className="flex flex-row nowrap p-xs">
    //         <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{ aspectRatio: 1 }}></div>
    //         <div className="w-full">
    //           <textarea
    //             name=""
    //             id=""
    //             cols="50"
    //             rows="6"
    //             className="w-full lynx-white-bg p-s outline-transparent border-none"
    //             style={{ resize: 'none' }}
    //             placeholder="Write something interesting..."
    //           ></textarea>
    //           <div className="flex flex-space-between pt-s">
    //             <div className="flex" style={{ gap: '1rem' }}>
    //               <i className="bi bi-card-image"></i>
    //               <i className="bi bi-filetype-gif"></i>
    //               <i className="bi bi-emoji-smile"></i>
    //             </div>
    //             <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">Post</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
    //       <h3 className="">Latest Posts</h3>
    //       <i className="bi bi-sliders2-vertical"></i>
    //     </div>
    //     <div className="white-bg mr-xxl p-xs mt-s">
    //       <div className="flex flex-row nowrap p-xs">
    //         <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{ aspectRatio: 1 }}></div>
    //         <div>
    //           <div className="flex flex-row flex-align-center flex-space-between">
    //             <div className="flex flex-row">
    //               <p className="fw-semibold">Tanay Pratap</p>
    //               <p className="grey-color pl-xs">
    //                 @tanaypratap <span className="pl-xs">•</span>
    //                 <span className="pl-xs">1 min</span>
    //               </p>
    //             </div>
    //             <p className="">∙∙∙</p>
    //           </div>
    //           <p className="pr-s pt-xs">
    //             Non programmers on my timeline. Attention. <br />
    //             <br />
    //             After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.
    //             <br />
    //             <br />
    //             Interested in helping me build this course? Join the telegram group (in next tweet)
    //           </p>
    //           <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
    //             <i className="bi bi-heart"></i>
    //             <i className="bi bi-chat-left"></i>
    //             <i className="bi bi-share"></i>
    //             <i className="bi bi-bookmark-fill"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="white-bg mr-xxl p-xs mt-s">
    //       <div className="flex flex-row nowrap p-xs">
    //         <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{ aspectRatio: 1 }}></div>
    //         <div>
    //           <div className="flex flex-row flex-align-center flex-space-between">
    //             <div className="flex flex-row">
    //               <p className="fw-semibold">Tanay Pratap</p>
    //               <p className="grey-color pl-xs">
    //                 @tanaypratap <span className="pl-xs">•</span>
    //                 <span className="pl-xs">1 min</span>
    //               </p>
    //             </div>
    //             <p className="">∙∙∙</p>
    //           </div>
    //           <p className="pr-s pt-xs">
    //             Non programmers on my timeline. Attention. <br />
    //             <br />
    //             After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well.
    //             <br />
    //             <br />
    //             Interested in helping me build this course? Join the telegram group (in next tweet)
    //           </p>
    //           <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
    //             <i className="bi bi-heart"></i>
    //             <i className="bi bi-chat-left"></i>
    //             <i className="bi bi-share"></i>
    //             <i className="bi bi-bookmark-fill"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
      
    //   </div>
    // </div>

    <div className="container">
      <Navbar />
      <LeftSideBar />
      <main className="main">
        <Profile/>
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
        {allPosts?.map((post)=>{return(<Post post={post}/>)})}
        {/* {<Post/>}
        {<Post/>} */}
      </main>
       {<RightSideBar/>}
    </div>
  );
}
