
import "./leftsidebar.css";
import { Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../../context/auth-context";


export const LeftSideBar = () =>{

  const {currUser,logoutHandler} = useAuth();

  const navigate = useNavigate();

  


    return(
        <div className="p-s  pl-xl flex flex-column  sidebar sidebar1">
          <div className="flex flex-column flex-space-between nav-wrapper">
            <div className="pt-s black-color fw-semibold link-wrap">
              <Link className="link" to="../home">                
                <span className="fw-bold"><i className="bi bi-house"></i>  Home</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap">
              <Link className="link" to="../explore">
                
                <span><i className="bi bi-house"></i>  Explore</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap">
              <Link className="link" to="../bookmarks">
                
                <span><i className="bi bi-bookmark"></i>  Bookmark</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap">
              <Link className="link" to="../profile">                
                <span><i className="bi bi-person"></i>  Profile</span>
              </Link>
            </div>

            <button style={{borderRadius:"15px"}} className="mt-m p-s primary-bg  white-color border-none outline-transparent new-post-btn" onClick={()=>navigate('/home')}>
              Create New Post
            </button>
          </div>
      <div className="flex flex-space-between white-bg  username-box">
        <div className="grey-bg br-full width-xs height-xs   post-box-left" style={{ aspectRatio: 1 }}></div>
        <div className="flex">
          <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column ml-xs">
              <div className="fw-bold">{currUser?.name}</div>
              <div className="fw-light grey-color">@{currUser?.username}</div>
              <div style={{borderRadius:"15px"}}className="mt-xs p-xs primary-bg  white-color border-none outline-transparent gen-btn" onClick={()=>logoutHandler()}>LogOut</div>
              </div>
        </div>
      </div>
      </div>
    )
}