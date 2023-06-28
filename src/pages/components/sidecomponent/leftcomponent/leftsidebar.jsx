
import "./leftsidebar.css";
import { Link } from "react-router-dom";
export const LeftSideBar = () =>{


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

            <button style={{borderRadius:"15px"}} className="mt-m p-s primary-bg  white-color border-none outline-transparent new-post-btn">
              Create New Post
            </button>
          </div>
      <div className="flex flex-space-between  username-box">
        <div className="grey-bg br-full width-xs height-xs   post-box-left" style={{ aspectRatio: 1 }}></div>
        <div className="flex">
          <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column ml-xs">
              <div className="fw-bold">Tanay Pratap</div>
              <div className="fw-light grey-color">@tanaypratap</div>
              </div>
        </div>
        <div className="grey-color fw-bold">...</div>          
      </div>
      </div>
    )
}