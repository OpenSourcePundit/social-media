import { useData } from "../../../../context/data-context"
import { useAuth } from "../../../../context/auth-context";
import "./profile.css"

export const Profile = ({user}) =>{

  const {currUser} = useAuth();
  const {allPosts,allUsers} = useData();

    return(
        <div className="flex flex-column flex-center pr-xl mr-l">
          <div className="lynx-gray-bg width-7 height-7 br-full profile-photo"  style={{ aspectRatio: 1 }}></div>
          <h3 className="pt-s">{user.name}</h3>
          <p className="grey-color txt-s">@{user.username}</p>

          {user.username===currUser.username?(
            <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
            Edit Profile
          </button>
          ):
          (allUsers.find((user)=>user.username===currUser.username).following.some((selffollowing)=>selffollowing.username===user.username)?
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
            Unfollow
          </button>
          :
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
            Follow
          </button>
          )}
          













          <p className="m-xs p-xs">
            {user.bio}
          </p>
          <p className="primary-color">{user.portfoliourl}</p>
          <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly rounded-3">
            <div className="flex flex-column flex-center ml-m mr-m">
              <p className="fw-black m-0">{user.following.length}</p>
              <p className="fw-semibold m-0">Following</p>
            </div>
            <div className="flex flex-column flex-center  ml-m mr-m">
              <p className="fw-black m-0">{allPosts.filter((post)=>post.username===user.username).length}</p>
              <p className="fw-semibold m-0">Posts</p>
            </div>
            <div className="flex flex-column flex-center ml-m mr-m">
              <p className="fw-black m-0">{user.followers.length}</p>
              <p className="fw-semibold m-0">Followers</p>
            </div>
          </div>
        </div>
    )
}