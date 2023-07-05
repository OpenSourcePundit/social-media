
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
                <span className="fw-semibold"><i className="bi bi-house"></i>  Home</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap">
              <div className="link gen-btn" onClick={()=>navigate(`/explore`)}>
                <span><i className="bi bi-house"></i>  Explore</span>
              </div>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap">
              <Link className="link" to="../bookmarks">
                
                <span><i className="bi bi-bookmark"></i>  Bookmark</span>
              </Link>
            </div>
            <div className="pt-s black-color fw-semibold link-wrap gen-btn">
              <div className="link" onClick={()=>navigate(`/profile/${currUser.username}`)}>                
                <span><i className="bi bi-person"></i>  Profile</span>
              </div>
            </div>

            <button style={{borderRadius:"15px"}} className="mt-m p-s primary-bg  white-color border-none outline-transparent new-post-btn" onClick={()=>navigate('/home')}>
              Create New Post
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

 {/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div className="white-bg  p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs create-box-left"style={{ aspectRatio: 1 }}>
              </div>
            <div className="w-full">
              <textarea
                name=""
                id=""
                cols="70"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
              ></textarea>
              {/* <div className="flex flex-space-between pt-s">
                <div className="flex" style={{ gap: "1rem" }}>
                  <i className="bi bi-card-image gen-btn"></i>
                  <i className="bi bi-filetype-gif gen-btn"></i>
                  <i className="bi bi-emoji-smile gen-btn"></i>
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">
                  Post
                </button>
              </div> */}
            </div>
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary primary primary-bg">Post</button>
      </div>
    </div>
  </div>
</div>










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