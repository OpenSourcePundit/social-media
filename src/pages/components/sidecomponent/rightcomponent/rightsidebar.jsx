
import "./rightsidebar.css"
import { Link } from "react-router-dom"
import { useData } from "../../../../context/data-context"
import { useAuth } from "../../../../context/auth-context"

import { FollowBox } from "./singlefollowbox"

export const RightSideBar = () =>{
  const {allUsers} = useData();
  const {currUser} = useAuth();

    return(
        <div className=" sidebar sidebar2 mt-xl mr-xxl">
          {console.log("follow div rerendering happened")}      
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap searchbox">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything" />
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color " type="button" data-toggle="modal" data-target="#showmore">Show More</div>
          </div>
          {allUsers.filter((user)=>user.username!==currUser.username)?.
          filter((user)=>!allUsers.find((curr)=>curr.username===currUser.username).following.map((usr)=>usr.username).includes(user.username)).
          slice(0,5).
          map((user)=><FollowBox user1={user} key={user.username}/>)}          
        </div>
      
      {/* show who to follow modal */}
        <div class="modal" id="showmore">
    <div class="modal-dialog modal-dialog-scrollable modal-sm">
      <div class="modal-content">
      
        {/* Modal Header */}
        <div class="modal-header">
          <h3 class="modal-title">Who to Follow?</h3>
        </div>
        
         {/* Modal body */}
        <div class="modal-body">
        {allUsers.filter((user)=>user.username!==currUser.username)?.
          filter((user)=>!allUsers.find((curr)=>curr.username===currUser.username).following.map((usr)=>usr.username).includes(user.username)).
          map((user)=><FollowBox user1={user} key={user.username}/>)}  
        </div>
        
        {/* Modal footer */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>


      </div>
    )
}

