import "./post.css";
import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../../context/data-context";
import { useAuth } from "../../../../context/auth-context";
import {
  RemovePostFromBookmark,
  BookmarkPost,
  LikePost,
  DislikePost,
  DeletePost,
} from "../../../../services/services";
import { ToastHandler } from "../../../../utils/utils";
import { ToastType } from "../../../../utils/constants";
import { Modals } from "../../../../allmodals";

export const Post = ({ post }) => {
  const navigate = useNavigate();
  const { token, currUser } = useAuth();
  const { allUsers, bookmarks, dispatch, setEditPostId } = useData();
  // console.log("state",state,"curruser",currUser)
  const fetchUserName = (username) => {
    return allUsers?.find((user) => user.username === username).name;
  };

  // const fetchUserpic = (username)=>{
  //   // return(allUsers.find((user)=>user.username===username).name)
  // }
  // const editPost = () =>{
  // }

  //Bookmark Functions:
  const addBookmark = async (token, id) => {
    try {
      const {
        data: { bookmarks },
        status,
      } = await BookmarkPost({ encodedToken: token, postId: id });
      if (status === 200) {
        ToastHandler(ToastType.Success, "Added to Bookmarks !");
        dispatch({
          type: "get_all_bookmarks",
          payload: bookmarks,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.message}`);
    }
  };
  const deleteBookmark = async (token, id) => {
    try {
      const {
        data: { bookmarks },
        status,
      } = await RemovePostFromBookmark({ encodedToken: token, postId: id });
      if (status === 200) {
        ToastHandler(ToastType.Success, "Removed from Bookmarks!");
        dispatch({
          type: "get_all_bookmarks",
          payload: bookmarks,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
    }
  };

  const checkBookmark = (postId, bookmarks) => {
    return bookmarks?.some((bkmrk) => bkmrk._id === postId);
  };
  const bookmarkHandler = (postId, bookmarks, token) => {
    checkBookmark(post?._id, bookmarks)
      ? deleteBookmark(token, postId)
      : addBookmark(token, postId);
  };
  //like functions
  const addLike = async (token, id) => {
    try {
      const {
        data: { posts },
        status,
      } = await LikePost({ encodedToken: token, postId: id });
      if (status === 201) {
        ToastHandler(ToastType.Success, "You Liked the Post !");
        dispatch({
          type: "get_all_posts",
          payload: posts,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
    }
  };

  const removeLike = async (token, id) => {
    try {
      const {
        data: { posts },
        status,
      } = await DislikePost({ encodedToken: token, postId: id });
      if (status === 201) {
        ToastHandler(ToastType.Success, "Like Removed !");
        dispatch({
          type: "get_all_posts",
          payload: posts,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
    }
  };
  const checkLikes = (post) => {
    return post.likes.likedBy?.some((like) => like._id === currUser?._id);
  };
  const likeHandler = (post, token) => {
    checkLikes(post) ? removeLike(token, post._id) : addLike(token, post._id);
  };

  const deletePostHandler = async (id, token) => {
    try {
      const {
        data: { posts },
        status,
      } = await DeletePost({ encodedToken: token, postId: id });
      if (status === 201) {
        ToastHandler(ToastType.Success, "Post Deleted !");
        dispatch({
          type: "get_all_posts",
          payload: posts,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
    }
  };

  return (
    <div className="white-bg mr-xxl rounded p-xs mt-s post-box">
      <div className="flex flex-row nowrap p-xs">
        <Modals />

        {/* <img src={`${allUsers.find((user)=>user.username===post.username).profile_pic}`} className=" br-full width-xs height-xs p-xs mr-xs post-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={()=>navigate(`/profile/${post.username}`)} /> */}

        {allUsers.find((user) => user.username === post.username)
          ?.profile_pic === undefined ? (
          <div
            className="grey-bg br-full width-xs height-xs p-xs mr-xs post-box-left gen-btn"
            style={{ aspectRatio: 1 }}
            onClick={() => navigate(`/profile/${post.username}`)}
          ></div>
        ) : (
          <img
            src={`${
              allUsers.find((user) => user.username === post.username)
                .profile_pic
            }`}
            className=" br-full width-s height-s  mr-xs  gen-btn"
            style={{ aspectRatio: 1 }}
            onClick={() => navigate(`/profile/${post.username}`)}
          />
        )}
        <div className="post-box-right">
          <div className="flex flex-row flex-align-center flex-space-between post-top-section">
            <div className="flex flex-row post-user-details">
              <p className="fw-semibold">{fetchUserName(post?.username)}</p>

              <p className="grey-color pl-xs">
                @{post?.username} <span className="pl-xs">•</span>
                <span className="pl-xs ">
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "long",
                    timeStyle: "short",
                  }).format(Date.parse(post?.updatedAt))}
                </span>
              </p>
            </div>

            {post?.username === currUser?.username && (
              <div className="dropdown">
                <button
                  className="gen-btn btn editbtn pt-xxs mt-xxs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical  "></i>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    className="dropdown-item"
                    type="button"
                    data-toggle="modal"
                    data-target="#EditPostModal"
                    onClick={() => setEditPostId(`${post._id}`)}
                  >
                    Edit Post
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => deletePostHandler(post._id, token)}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            )}
          </div>
          {post.pic && post.pic!=='' && <div className="post-image-section">
            <img src={`${post?.pic}`} alt="" />
            
          </div>} 
          <p className="pr-s pt-xs post-main-section">{post?.content}</p>
          <div className="flex flex-row nowrap flex-space-between pb-xs pl-s pt-m pr-s flex-align-center post-onclick-section">
            <i
              className={
                checkLikes(post)
                  ? "bi bi-heart-fill primary-color gen-btn"
                  : "bi bi-heart gen-btn"
              }
              onClick={() => likeHandler(post, token)}
            >
              &nbsp;{" "}
              {post?.likes.likeCount === 0 ? `` : `${post?.likes.likeCount}`}
            </i>
            {/* <i className="bi bi-chat-left gen-btn" onClick={()=>{console.log("p",post);removeLike(token,post._id)}}></i> */}
            {/* <i className="bi bi-share"></i> */}
            {/* {console.log(`some action for ${post.username}:`,allUsers.some((user) => user.username === post.username))} */}

            <i
              className={
                checkBookmark(post?._id, bookmarks)
                  ? "bi bi-bookmark-fill gen-btn "
                  : "bi bi-bookmark gen-btn"
              }
              onClick={() => bookmarkHandler(post?._id, bookmarks, token)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
