import { useState } from "react";
import { useData } from "../../../../context/data-context";
import { useAuth } from "../../../../context/auth-context";
import { EditUser } from "../../../../services/services";
import { ToastHandler } from "../../../../utils/utils";
import { ToastType } from "../../../../utils/constants";
import "./profile.css";
import { FollowBox } from "../../sidecomponent/rightcomponent/singlefollowbox";

export const Profile = ({ user }) => {
  const { currUser, token } = useAuth();
  const {
    allPosts,
    allUsers,
    followUserHandler,
    unfollowUserHandler,
    dispatch,
  } = useData();
  const [editUser, setEditUser] = useState({
    username: allUsers?.find((user) => user.username === currUser?.username)
      ?.profile_pic,
    username: allUsers?.find((user) => user.username === currUser?.username)
      ?.username,
    profile_pic: allUsers?.find((user) => user.username === currUser?.username)
      ?.profile_pic,
    name: allUsers?.find((user) => user.username === currUser?.username)?.name,
    bio: allUsers?.find((user) => user.username === currUser?.username)?.bio,
    portfoliourl: allUsers?.find((user) => user.username === currUser?.username)
      ?.portfoliourl,
  });

  const editProfileHandler = async (editUser) => {
    try {
      const {
        data: { user },
        status,
      } = await EditUser({ encodedToken: token, userData: editUser });
      if (status === 201) {
        ToastHandler(ToastType.Success, "Profile Successfully Saved !");
        dispatch({
          type: "editUser",
          payload: user,
        });
      }
    } catch (err) {
      console.log("Error", err);
      ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);
    }
  };

  return (
    <div className="flex flex-column flex-center pr-xl mr-l">
      {allUsers.find((userp) => userp.username === user.username)
        ?.profile_pic === undefined ? (
        <div
          className="lynx-gray-bg width-7 height-7 br-full profile-photo"
          style={{ aspectRatio: 1 }}
        ></div>
      ) : (
        <img
          src={`${
            allUsers.find((userp) => userp.username === user.username)
              .profile_pic
          }`}
          className=" width-10 height-10 br-full profile-pic"
          style={{ aspectRatio: 1 }}
        />
      )}

      
      <h3 className="pt-s">{user.name}</h3>
      <p className="grey-color txt-s">@{user.username}</p>

      {user.username === currUser.username ? (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          type="button"
          data-toggle="modal"
          data-target="#editProfileModal"
        >
          Edit Profile
        </button>
      ) : allUsers
          .find((user) => user.username === currUser.username)
          .following.some(
            (selffollowing) => selffollowing.username === user.username
          ) ? (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          onClick={() => unfollowUserHandler(user, token)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          onClick={() => followUserHandler(user, token)}
        >
          Follow
        </button>
      )}

      <p className="m-xs p-xs">{user.bio}</p>
      <p className="primary-color">{user.portfoliourl}</p>
      <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly rounded-3">
        <div
          className="flex flex-column flex-center ml-m mr-m"
          type="button"
          data-toggle="modal"
          data-target="#showfollowing"
        >
          <p className="fw-black m-0">{user.following.length}</p>
          <p className="fw-semibold m-0">Following</p>
        </div>
        <div className="flex flex-column flex-center  ml-m mr-m">
          <p className="fw-black m-0">
            {allPosts.filter((post) => post.username === user.username).length}
          </p>
          <p className="fw-semibold m-0">Posts</p>
        </div>
        <div
          className="flex flex-column flex-center ml-m mr-m"
          type="button"
          data-toggle="modal"
          data-target="#showfollowers"
        >
          <p className="fw-black m-0">{user.followers.length}</p>
          <p className="fw-semibold m-0">Followers</p>
        </div>
      </div>

      {/* modals: following users */}
      <div className="modal" id="showfollowing">
        <div className="modal-dialog modal-dialog-scrollable modal-sm">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h3 className="modal-title">Following :</h3>
            </div>

            {/* Modal body */}
            <div className="modal-body">
              {allUsers
                .find((userin) => user.username === userin.username)
                .following?.map((user) => (
                  <FollowBox user1={user} key={user.username} />
                ))}
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals: followers users */}

      <div className="modal" id="showfollowers">
        <div className="modal-dialog modal-dialog-scrollable modal-sm">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h3 className="modal-title">Followers:</h3>
            </div>
            {/* {allUsers.filter((user)=>user.username!==currUser.username)?.
          filter((user)=>!allUsers.find((curr)=>curr.username===currUser.username).following.map((usr)=>usr.username).includes(user.username)).
          map((user)=><FollowBox user1={user} key={user.username}/>)}  */}
            {/* Modal body */}
            <div className="modal-body">
              {allUsers
                .find((userin) => userin.username === user.username)
                .followers?.map((user) => (
                  <FollowBox user1={user} key={user.username} />
                ))}
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals: Edit Profile */}

      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div>
              <div className="white-bg  p-xs mt-s">

                <div className="profile-pic-div">
                {editUser?.profile_pic === undefined ? (
                  <div
                    className="lynx-gray-bg width-7 height-7 br-full profile-photo"
                    style={{ aspectRatio: 1 }}
                  ></div>
                ) : (
                  <img
                    src={`${editUser?.profile_pic}`}
                    className=" width-10 height-10 br-full profile-pic"
                    style={{ aspectRatio: 1 }}
                  />
                )}
                <div className="avatar">
                <img src={`https://i.ibb.co/qBTXTm6/7309670.jpg`} value="https://i.ibb.co/qBTXTm6/7309670.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
              <img src={`https://i.ibb.co/HNnywVG/7294794.jpg`} value="https://i.ibb.co/HNnywVG/7294794.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
              <img src={`https://i.ibb.co/K7SbmTX/7309667.jpg`} value="https://i.ibb.co/K7SbmTX/7309667.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
              <img src={`https://i.ibb.co/1vGzhyY/7309683.jpg`} value="https://i.ibb.co/1vGzhyY/7309683.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
              <img src={`https://i.ibb.co/GCnpvDB/7342052.jpg`} value="https://i.ibb.co/GCnpvDB/7342052.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
              <img src={`https://i.ibb.co/HgQ8PSx/4300-3-11.jpg`} value="https://i.ibb.co/HgQ8PSx/4300-3-11.jpg" className=" br-full  user1-box-left gen-btn"
              style={{ aspectRatio: 1 }} onClick={(e) => {setEditUser({ ...editUser, profile_pic: e.target.src });}}/>
                </div>

                </div>
                

                <label htmlFor="textarea">Name:</label>
                <textarea
                  className=" lynx-white-bg  outline-transparent w-full"
                  cols="70"
                  rows="1"
                  value={editUser?.name}
                  onChange={(e) => {
                    setEditUser({ ...editUser, name: e.target.value });
                  }}
                ></textarea>
                <p className="grey-color txt-s">@{user.username}</p>

                <label htmlFor="textarea">Bio:</label>
                <textarea
                  cols="70"
                  rows="3"
                  className="w-full lynx-white-bg p-s outline-transparent"
                  style={{ resize: "none" }}
                  value={editUser?.bio}
                  onChange={(e) => {
                    setEditUser({ ...editUser, bio: e.target.value });
                  }}
                ></textarea>
                <label htmlFor="portfoliourl">Portfolio URL:</label>
                <textarea
                  className=" w-full primary-color portfoliourl lynx-white-bg outline-transparent"
                  cols="70"
                  rows="1"
                  value={editUser?.portfoliourl}
                  onChange={(e) => {
                    setEditUser({ ...editUser, portfoliourl: e.target.value });
                  }}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary primary primary-bg"
                  data-toggle="modal"
                  data-target="#editProfileModal"
                  onClick={() => editProfileHandler(editUser)}
                >
                  Save{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
