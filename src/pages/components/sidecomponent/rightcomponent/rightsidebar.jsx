
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
            <div className="primary-color">Show More</div>
          </div>
          {allUsers.filter((user)=>user.username!==currUser.username)?.
          filter((user)=>!allUsers.find((curr)=>curr.username===currUser.username).following.map((usr)=>usr.username).includes(user.username)).
          map((user)=><FollowBox user1={user} key={user.username}/>)}
          
        </div>
      </div>
    )
}

