
import "./profile.css"

export const Profile = () =>{


    return(
        <div className="flex flex-column flex-center pr-xl mr-l">
          <div className="lynx-gray-bg width-7 height-7 br-full profile-photo"  style={{ aspectRatio: 1 }}></div>
          <h3 className="pt-s">Tanay Pratap</h3>
          <p className="grey-color txt-s">@tanaypratap</p>
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
            Edit Profile
          </button>
          <p className="m-xs p-xs">
            Senior Software Engineer @Microsoft | Creator of India’s biggest
            programming community | Tweets about JavaScript, ReactJS, Career and
            Startups
          </p>
          <p className="primary-color">tanaypratap.com</p>
          <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly rounded-3">
            <div className="flex flex-column flex-center ml-m mr-m">
              <p className="fw-black m-0">0</p>
              <p className="fw-semibold m-0">Following</p>
            </div>
            <div className="flex flex-column flex-center  ml-m mr-m">
              <p className="fw-black m-0">2K</p>
              <p className="fw-semibold m-0">Posts</p>
            </div>
            <div className="flex flex-column flex-center ml-m mr-m">
              <p className="fw-black m-0">37.3K</p>
              <p className="fw-semibold m-0">Followers</p>
            </div>
          </div>
        </div>
    )
}