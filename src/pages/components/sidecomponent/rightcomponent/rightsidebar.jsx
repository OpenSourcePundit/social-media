
import "./rightsidebar.css"
import { Link } from "react-router-dom"
import { useData } from "../../../../context/data-context"
import { useAuth } from "../../../../context/auth-context"

import { FollowBox } from "./singlefollowbox"

export const RightSideBar = () =>{
  const {allUsers,peopleSearch,dispatch} = useData();
  const {currUser} = useAuth();

    return(
        <div className=" sidebar sidebar2 mt-xl mr-xxl">
        <div className="white-bg mb-xs pl-s border flex flex-row flex-center nowrap searchbox">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" value={peopleSearch} className="search-bar border-none outline-transparent p-s width-16" placeholder="Search People" onChange={(e)=>dispatch({type:"peoplesearch",payload:e.target.value})}/>
        </div>


        {peopleSearch ===""?
        <div className="white-bg">
        <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
          <div>Who to Follow?</div>
          <div className="primary-color " type="button" data-toggle="modal" data-target="#showmore">Show More</div>
        </div>
        {allUsers.filter((user)=>user.username!==currUser.username)?.
        filter((user)=>!allUsers?.find((curr)=>curr?.username===currUser?.username)?.following?.map((usr)=>usr.username)?.includes(user?.username)).
        slice(0,5).
        map((user)=><FollowBox user1={user} key={user.username}/>)}          
      </div>
      :
      <div className="white-bg">
        <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
          <div>Search Results</div>
        </div>
        {allUsers.filter((user)=>{return(user.name.toLowerCase().includes(peopleSearch.toLowerCase()) || user.username.toLowerCase().includes(peopleSearch.toLowerCase()) )}).length!==0 ?
        allUsers.filter((user)=>{return(user.name.toLowerCase().includes(peopleSearch.toLowerCase()) || user.username.toLowerCase().includes(peopleSearch.toLowerCase()) )}).
        map((user)=><FollowBox user1={user} key={user.username}/>):`No Results to Show`}          
      </div>
      }
        
      
      {/* show who to follow modal */}
        <div className="modal" id="showmore">
    <div className="modal-dialog modal-dialog-scrollable modal-sm">
      <div className="modal-content">
      
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="modal-title">Who to Follow?</h3>
        </div>
        
         {/* Modal body */}
        <div className="modal-body">
        {allUsers.filter((user)=>user.username!==currUser?.username)?.
          filter((user)=>!allUsers?.find((curr)=>curr?.username===currUser?.username)?.following?.map((usr)=>usr?.username)?.includes(user?.username))?.  
                  map((user)=><FollowBox user1={user} key={user?.username}/>)}  
        </div>
        
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>


      </div>
    )
}

