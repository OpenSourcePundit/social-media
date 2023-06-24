import "./post.css"

export const Post = () =>{


    return(
        <div className="white-bg mr-xxl rounded p-xs mt-s post-box">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xs height-xs p-xs mr-xs post-box-left"
              style={{ aspectRatio: 1 }}
            ></div>
            <div className="post-box-right">
              <div className="flex flex-row flex-align-center flex-space-between post-top-section">
                <div className="flex flex-row post-user-details">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color pl-xs">
                    @tanaypratap <span className="pl-xs">•</span>
                    <span className="pl-xs ">1 min</span>
                  </p>
                </div>
                <p className="post-edit-section">
                  <i class="bi bi-pencil-square"></i>
                </p>
              </div>
              <p className="pr-s pt-xs post-main-section">
                Non programmers on my timeline. Attention. After placing 100+
                programmers i in top Indian startups, I am thinking of coming up
                with a program for business roles as well. Interested in helping
                me build this course? Join the telegram group (in next tweet)
              </p>
              <div className="flex flex-row nowrap flex-space-between pb-xs pl-s pt-m pr-s flex-align-center post-onclick-section">
                <i className="bi bi-heart gen-btn"></i>
                {/* <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i> */}
                <i className="bi bi-bookmark-fill"></i>
              </div>
            </div>
          </div>
        </div>
    )
}