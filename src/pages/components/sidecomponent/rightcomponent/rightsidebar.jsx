
import "./rightsidebar.css"
import { Link } from "react-router-dom"

export const RightSideBar = () =>{

    return(
        <div className=" sidebar sidebar2 mt-xl mr-xxl">      
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input type="search" name="search-bar" className="search-bar border-none outline-transparent p-s width-16" placeholder="Search Posts, People, Anything" />
        </div>
        <div className="white-bg">
          <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <Link to="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </Link>
            </div>
            <div className="primary-color fw-bold">
              <Link to="../profile/profile2.html">
                Follow<i className="bi bi-plus"></i>
              </Link>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <Link to="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </Link>
            </div>
            <div className="primary-color fw-bold">
              <Link to="../profile/profile2.html">
                Follow<i className="bi bi-plus"></i>
              </Link>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <Link to="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </Link>
            </div>
            <div className="primary-color fw-bold">
              <Link to="../profile/profile2.html">
                Follow<i className="bi bi-plus"></i>
              </Link>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <Link to="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </Link>
            </div>
            <div className="primary-color fw-bold">
              <Link to="../profile/profile2.html">
                Follow<i className="bi bi-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

