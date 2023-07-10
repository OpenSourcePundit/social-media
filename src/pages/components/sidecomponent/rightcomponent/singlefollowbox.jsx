import "./singlefollowbox.css"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../../../context/auth-context"
import { useData } from "../../../../context/data-context";
export const FollowBox = ({user1}) =>{

    const navigate = useNavigate();

    const {token,currUser} = useAuth();
    const {followUserHandler,allUsers,unfollowUserHandler} = useData();
    return(
    <div className="flex p-s flex-space-between flex-align-center">
    { allUsers.find((user)=>user.username===user1.username)?.profile_pic ===undefined ? <div
              className="grey-bg br-full width-xs height-xs p-xs mr-xs user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} data-dismiss="modal" onClick={()=>navigate(`/profile/${user1.username}`)}
            ></div>
            :
            <img src={`${allUsers.find((user)=>user.username===user1.username).profile_pic}`} className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} data-dismiss="modal" onClick={()=>navigate(`/profile/${user1.username}`)} />
           }
    <div className="flex flex-column">
      <div >
        <div className="fw-bold follow-box-name">{user1?.name}</div>
        <div className="fw-light grey-color">@{user1.username}</div>
      </div>
    </div>
    {allUsers.find((user) => user.username===currUser.username).following.some((usr)=>usr.username===user1.username)?
    <div style={{borderRadius:"10px"}} className="primary-color  br-half  fw-bold follow-btn " onClick={()=>unfollowUserHandler(user1,token)}>
    <div>
      UnFollow
    </div>
  </div>
  :
  
    <div style={{borderRadius:"10px"}} className="primary-color  br-half  fw-bold follow-btn " onClick={()=>followUserHandler(user1,token)}>
      <div>
        Follow
      </div>
    </div>
}
  </div>)
}