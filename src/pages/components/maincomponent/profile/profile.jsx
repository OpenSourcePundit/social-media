import {useState} from "react";
import { useData } from "../../../../context/data-context"
import { useAuth } from "../../../../context/auth-context";
import "./profile.css"
import { FollowBox } from "../../sidecomponent/rightcomponent/singlefollowbox";

export const Profile = ({user}) =>{

  const {currUser,token} = useAuth();
  const {allPosts,allUsers,followUserHandler,unfollowUserHandler} = useData();
  const [editUser,setEditUser] = useState({
    profile_pic: allUsers?.find((user) => user.username === currUser?.username)?.profile_pic,
    name: allUsers?.find((user) => user.username === currUser?.username)?.name,
    bio: allUsers?.find((user) => user.username === currUser?.username)?.bio,
    portfoliourl: allUsers?.find((user) => user.username === currUser?.username)?.portfoliourl,
  })

    return(
        <div className="flex flex-column flex-center pr-xl mr-l">


         {allUsers.find((userp)=>userp.username===user.username)?.profile_pic === undefined ? (
           <div className="lynx-gray-bg width-7 height-7 br-full profile-photo"  style={{ aspectRatio: 1 }}></div>
         )
        :
        (
          <img
          src={`${
            allUsers.find((userp) => userp.username === user.username).profile_pic}`}
          className=" width-10 height-10 br-full profile-pic"
          style={{ aspectRatio: 1 }}
        />
        )
        }
         
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"></path></svg>





          <h3 className="pt-s">{user.name}</h3>
          <p className="grey-color txt-s">@{user.username}</p>

          {user.username===currUser.username?
          (
            <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8" type="button" data-toggle="modal" data-target="#editProfileModal" >
            Edit Profile
          </button>
          ):
          (allUsers.find((user)=>user.username===currUser.username).following.some((selffollowing)=>selffollowing.username===user.username)?
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8" onClick={()=>unfollowUserHandler(user,token)}>
            Unfollow
          </button>
          :
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8" onClick={()=>followUserHandler(user,token)}>
            Follow
          </button>
          )}




          <p className="m-xs p-xs">
            {user.bio}
          </p>
          <p className="primary-color">{user.portfoliourl}</p>
          <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly rounded-3">
            <div className="flex flex-column flex-center ml-m mr-m"type="button" data-toggle="modal" data-target="#showfollowing">
              <p className="fw-black m-0">{user.following.length}</p>
              <p className="fw-semibold m-0">Following</p>
            </div>
            <div className="flex flex-column flex-center  ml-m mr-m">
              <p className="fw-black m-0">{allPosts.filter((post)=>post.username===user.username).length}</p>
              <p className="fw-semibold m-0">Posts</p>
            </div>
            <div className="flex flex-column flex-center ml-m mr-m" type="button" data-toggle="modal" data-target="#showfollowers">
              <p className="fw-black m-0">{user.followers.length}</p>
              <p className="fw-semibold m-0">Followers</p>
            </div>
          </div>

{/* modals: following users */}
<div className="modal" id="showfollowing">
    <div class="modal-dialog modal-dialog-scrollable modal-sm">
      <div class="modal-content">
      
        {/* Modal Header */}
        <div class="modal-header">
          <h3 class="modal-title">Following :</h3>
        </div>
        
         {/* Modal body */}
        <div class="modal-body">
         
        {allUsers.find((userin)=>user.username===userin.username).following?.
          map((user)=><FollowBox user1={user} key={user.username}/>)}  
        </div>
        
        {/* Modal footer */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

  {/* Modals: followers users */}

  <div className="modal" id="showfollowers">
    <div class="modal-dialog modal-dialog-scrollable modal-sm">
      <div class="modal-content">
      
        {/* Modal Header */}
        <div class="modal-header">
          <h3 class="modal-title">Followers:</h3>
        </div>
        {/* {allUsers.filter((user)=>user.username!==currUser.username)?.
          filter((user)=>!allUsers.find((curr)=>curr.username===currUser.username).following.map((usr)=>usr.username).includes(user.username)).
          map((user)=><FollowBox user1={user} key={user.username}/>)}  */}
         {/* Modal body */}
        <div class="modal-body">
        {allUsers.find((userin)=>userin.username===user.username).followers?.
          map((user)=><FollowBox user1={user} key={user.username}/>)}  
        </div>
        
        {/* Modal footer */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

  {/* Modals: Edit Profile */}

  <div className="modal fade" id="editProfileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div>
    <div className="white-bg  p-xs mt-s">
    {allUsers.find((userp)=>userp.username===user.username)?.profile_pic === undefined ? (
           <div className="lynx-gray-bg width-7 height-7 br-full profile-photo"  style={{ aspectRatio: 1 }}></div>
         )
        :
        (
          <img
          src={`${
            allUsers.find((userp) => userp.username === user.username).profile_pic}`}
          className=" width-10 height-10 br-full profile-pic"
          style={{ aspectRatio: 1 }}
        />
        )
        }
         
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"></path></svg>





          <textarea className="pt-s">{user.name}</textarea>
          <p className="grey-color txt-s">@{user.username}</p>

         <label htmlFor="textarea">Bio:</label>
          <textarea  cols="70"
                rows="3"
                className="w-full lynx-white-bg p-s outline-transparent"
                style={{ resize: "none" }}>
            {user.bio}
          </textarea>
          <label htmlFor="portfoliourl">Portfolio URL:</label>
          <textarea className=" w-full primary-color portfoliourl lynx-white-bg outline-transparent" cols="70"
                rows="1">{user.portfoliourl}</textarea>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary primary primary-bg" data-toggle="modal"
          data-target="#editProfileModal" >Save </button>
      </div>
    </div>
    </div>
  </div>
</div>




        </div>
    )
}