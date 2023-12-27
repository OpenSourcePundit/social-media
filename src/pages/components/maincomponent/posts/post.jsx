import "./post.css";
import { React, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../../context/data-context";
import { useAuth } from "../../../../context/auth-context";
import {
  RemovePostFromBookmark,
  BookmarkPost,
  LikePost,
  DislikePost,
  DeletePost,EditPost
} from "../../../../services/services";
import { ToastHandler } from "../../../../utils/utils";
import { ToastType } from "../../../../utils/constants";
// import { Modals } from "../../../../allmodals";

export const Post = ({ post }) => {
  const navigate = useNavigate();

  // const [editpostInput, setEditPostInput] = useState({
  //   content: "",
  //   pic: "",
  // });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpload1 = async (event) => {
    const file = event.target.files[0];
   
    const base641 = await convertBase64(file);
    setEditPostInput((prev) => ({ ...prev, pic: base641 }));
   
  };

  const { token, currUser } = useAuth();
  const { allUsers, bookmarks, dispatch, setEditPostId, allPosts, editPostId,editpostInput, setEditPostInput } =
    useData();
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

  const editPostHandler = async(editpostInput,id) =>{
    try {
      const {
        data: { posts },
        status,
      } = await EditPost({ encodedToken: token,postData:{...editpostInput} ,postId: id });
      if (status === 201) {
        ToastHandler(ToastType.Success, " Post Updated !");
        dispatch({
          type: "get_all_posts",
          payload: posts,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.message}`);
    }

  }



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
    <div className="white-bg m-auto rounded p-xs mt-s post-box">
      <div className="flex flex-row nowrap p-xs">
        

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
                    onClick={() =>
                      setEditPostInput({
                        content: `${post.content}`,
                        pic: `${post.pic}`,
                      })
                    }
                    type="button"
                    data-toggle="modal"
                    data-target={`#EditPostModal${post._id}`}
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
          {post.pic && post.pic !== "" && (
            <div className="post-image-section">
              <img src={`${post?.pic}`} alt="" />
            </div>
          )}
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

      <>
        {/* edit post modal */}
        <div
          className="modal fade"
          id={`EditPostModal${post._id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div>
                <div className="white-bg  p-xs mt-s">
                  <div className="flex flex-row nowrap p-xs">
                    {allUsers.find(
                      (user) => user?.username === currUser?.username
                    )?.profile_pic === undefined ? (
                      <div
                        className="grey-bg br-full width-xs height-xs p-xs mr-xs currUser-box-left gen-btn"
                        style={{ aspectRatio: 1 }}
                      ></div>
                    ) : (
                      <img
                        src={`${
                          allUsers.find(
                            (user) => user?.username === currUser?.username
                          )?.profile_pic
                        }`}
                        className=" br-full  currUser-box-left gen-btn"
                        style={{ aspectRatio: 1 }}
                      />
                    )}
                    <div className="w-full">
                      <textarea
                        type="text"
                        name="editpost"
                        cols="70"
                        rows="6"
                        className="w-full lynx-white-bg p-s outline-transparent border-none"
                        style={{ resize: "none" }}
                        placeholder="Write something interesting..."
                        onChange={(e) =>
                          setEditPostInput((prev) => ({
                            ...prev,
                            content: e.target.value,
                          }))
                        }
                        value={editpostInput?.content}
                      >
                        {" "}
                      </textarea>
                    </div>
                  </div>

                  <div className="select-Image-container">
                    <label
                      className="image-btn flex"
                      htmlFor="upload1"
                      style={{ justifyContent: "left" }}
                    >
                      <i class="bi bi-image-fill"></i>
                      <input
                        type="file"
                        id="upload1"
                        style={{ display: "none" }}
                        onChange={(event) => { 
                          handleUpload1(event);
                        }}
                        accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                      />

                      {editpostInput.pic !=='' && (
                        <div className="modal-image-container">
                          <img
                            className="modal-image"
                            style={{ width: "130px", height: "90px" }}
                            src={editpostInput.pic}
                            alt="Post image"
                          />
                          <span className="modal-image-cancel">
                            {
                              <i
                                class="bi bi-x-circle"
                                onClick={() =>
                                  setEditPostInput((prev) => ({
                                    ...prev,
                                    pic: "",
                                  }))
                                }
                              ></i>
                            }
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
               
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary primary primary-bg"
                    data-toggle="modal"
                    data-target={`#EditPostModal${post._id}`}
                    onClick={()=>editPostHandler(editpostInput,post._id)}
                  >
                    Save Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
