import "./leftsidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/auth-context";
import { useData } from "../../../../context/data-context";

export const LeftSideBar = () => {
  const { currUser, logoutHandler } = useAuth();
  const {allUsers} = useData();

  const navigate = useNavigate();

  return (
    <div className="  pl-l flex flex-column  sidebar sidebar1">
      <div className="flex flex-column flex-space-between nav-wrapper bg-white rounded">
        <div className="pt-s black-color fw-semibold link-wrap">
          <Link className="link" to="../home">
            <span className="fw-semibold">
              <i className="bi bi-house"></i> <span className="sidebar-name">Home</span>
            </span>
          </Link>
        </div>
        <div className="pt-s black-color fw-semibold link-wrap">
          <div className="link gen-btn" onClick={() => navigate(`/explore`)}>
            <span>
              <i className="bi bi-house"></i><span className="sidebar-name">Explore</span> 
            </span>
          </div>
        </div>
        <div className="pt-s black-color fw-semibold link-wrap">
          <Link className="link" to="../bookmarks">
            <span>
              <i className="bi bi-bookmark"></i><span className="sidebar-name">Bookmark</span> 
            </span>
          </Link>
        </div>
        <div className="pt-s black-color fw-semibold link-wrap gen-btn">
          <div
            className="link"
            onClick={() => navigate(`/profile/${currUser.username}`)}
          >
            <span>
              <i className="bi bi-person"></i><span className="sidebar-name">Profile</span> 
            </span>
          </div>
        </div>

        <button
          type="button"
          data-toggle="modal"
          data-target="#CreateNewPostModal"
          style={{ borderRadius: "15px" }}
          className="m-s p-s primary-bg  white-color border-none outline-transparent new-post-btn"
          
        >
          Add Post
        </button>
        <button
          type="button"
          data-toggle="modal"
          data-target="#CreateNewPostModal"
          className="m-m fw-bolder p-s w-20 primary-bg br-full  white-color border-none f-xxl outline-transparent new-post-btn-2"
          
        >
          +
        </button>
      </div>
      <div className="flex flex-space-between white-bg  username-box">
      { allUsers.find((user)=>user.username===currUser.username)?.profile_pic ===undefined ? <div
              className="grey-bg br-full width-auto height-xs p-xs mr-xs currUser-box gen-btn"
              style={{ aspectRatio: 1 }} data-dismiss="modal" onClick={()=>navigate(`/profile/${currUser.username}`)}
            ></div>
            :
            <img src={`${allUsers.find((user)=>user.username===currUser.username).profile_pic}`} className=" br-full  currUser-box-left gen-btn"
              style={{ aspectRatio: 1 }} data-dismiss="modal" onClick={()=>navigate(`/profile/${currUser.username}`)} />
           }
        <div className="flex">
          <div className="grey-bg br-full width-xl height-xl"></div>
          <div className="flex flex-column ml-xs">
            <div className="fw-bold">{currUser?.name}</div>
            <div className="fw-light grey-color">@{currUser?.username}</div>
            <div
              style={{ borderRadius: "15px" }}
              className="mt-xs p-xs primary-bg  white-color border-none outline-transparent gen-btn"
              onClick={() => logoutHandler()}
            >
              LogOut
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
