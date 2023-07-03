import "./post.css"
import {React} from "react";
import { useData } from "../../../../context/data-context"
import { useAuth } from "../../../../context/auth-context";
import { RemovePostFromBookmark,BookmarkPost } from "../../../../services/services";
import { ToastHandler } from "../../../../utils/utils";
import { ToastType } from "../../../../utils/constants";

export const Post = ({post}) =>{
  
  const {token,currUser} = useAuth();
  const {allUsers,bookmarks,dispatch} = useData();
  // console.log("state",state,"curruser",currUser)
  const fetchUserName = (username)=>{
    return(allUsers?.find((user)=>user.username===username).name)
  }

  // const fetchUserpic = (username)=>{
  //   // return(allUsers.find((user)=>user.username===username).name)
  // }
  // const editPost = () =>{
  // }

  //Bookmark Functions:
  const addBookmark = async(token,id)=>{
    try{
      const {data:{bookmarks},status}= await BookmarkPost({encodedToken:token,postId:id});
      if(status===200){
        ToastHandler(ToastType.Success, "Added to Bookmarks !");
          dispatch({
              type:"get_all_bookmarks",
              payload: bookmarks
          })

          
         
      }
  }
  catch(err){console.log("Error",err); ToastHandler(ToastType.Error, `${err?.response?.data?.message}`);}

  }
  const deleteBookmark = async(token,id)=>{
    try{
      const {data:{bookmarks},status}= await RemovePostFromBookmark({encodedToken:token,postId:id});
      if(status===200){
        ToastHandler(ToastType.Success, "Removed from Bookmarks!");
        
          dispatch({
              type:"get_all_bookmarks",
              payload: bookmarks
          })
          
         
      }
     

  }
  catch(err){console.log("Error",err); ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);}
  }
  const checkBookmark = (postId,bookmarks) =>{
    return(bookmarks?.some((bkmrk)=>bkmrk._id===postId))
  }
  const bookmarkHandler = (postId,bookmarks,token) =>{
    checkBookmark(post?._id,bookmarks)?deleteBookmark(token,postId):addBookmark(token,postId)
  }


    return(
        <div  className="white-bg mr-xxl rounded p-xs mt-s post-box">
          <div className="flex flex-row nowrap p-xs">
          
            <div
              className="grey-bg br-full width-xs height-xs p-xs mr-xs post-box-left"
              style={{ aspectRatio: 1 }}
            ></div>
            <div className="post-box-right">
              <div className="flex flex-row flex-align-center flex-space-between post-top-section">
                <div className="flex flex-row post-user-details">
                  <p className="fw-semibold">{fetchUserName(post?.username)}</p>
                  
                  <p className="grey-color pl-xs">
                    @{post?.username} <span className="pl-xs">•</span>
                    <span className="pl-xs ">{post?.updatedAt}</span>
                  </p>
                </div>
                <p className="post-edit-section">
                  <i className={post?.username===currUser?.username?"bi bi-pencil-square gen-btn":"none"}></i>
                </p>
              </div>
              <p className="pr-s pt-xs post-main-section">
                {post?.content}
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pl-s pt-m pr-s flex-align-center post-onclick-section">
                <i className="bi bi-heart gen-btn">  {post?.likes.likeCount}</i>
                {/* <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i> */}
                {/* {console.log(`some action for ${post.username}:`,allUsers.some((user) => user.username === post.username))} */}
                
                <i className= {checkBookmark(post?._id,bookmarks)?"bi bi-bookmark-fill gen-btn ":"bi bi-bookmark gen-btn"} onClick={()=>bookmarkHandler(post?._id,bookmarks,token)}></i>
              </div>
            </div>
          </div>
        </div>
    )
}