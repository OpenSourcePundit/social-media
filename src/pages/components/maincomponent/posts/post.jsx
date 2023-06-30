import "./post.css"
import {React} from "react";
import { useData } from "../../../../context/data-context"


export const Post = ({post}) =>{
  const {allUsers} = useData();

  const fetchUserName = (username)=>{
    return(allUsers.find((user)=>user.username===username).name)    
  }
  // const fetchUserpic = (username)=>{
  //   // return(allUsers.find((user)=>user.username===username).name)    
  // }
  // const editPost = () =>{
     
  // }


    return(
        <div className="white-bg mr-xxl rounded p-xs mt-s post-box">
          <div className="flex flex-row nowrap p-xs">
            {console.log("yekaaam ka hai",post)}
            <div
              className="grey-bg br-full width-xs height-xs p-xs mr-xs post-box-left"
              style={{ aspectRatio: 1 }}
            ></div>
            <div className="post-box-right">
              <div className="flex flex-row flex-align-center flex-space-between post-top-section">
                <div className="flex flex-row post-user-details">
                  <p className="fw-semibold">{fetchUserName(post.username)}</p>
                  <p className="grey-color pl-xs">
                    @{post.username} <span className="pl-xs">•</span>
                    <span className="pl-xs ">{post.updatedAt}</span>
                  </p>
                </div>
                <p className="post-edit-section">
                  <i className="bi bi-pencil-square"></i>
                </p>
              </div>
              <p className="pr-s pt-xs post-main-section">
                {post.content}
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pl-s pt-m pr-s flex-align-center post-onclick-section">
                <i className="bi bi-heart gen-btn">  {post.likes.likeCount}</i>
                {/* <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i> */}
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
    )
}