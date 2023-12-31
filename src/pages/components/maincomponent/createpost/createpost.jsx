
import "./createpost.css"

export const CreatePost = () =>{

    return(
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs create-box-left"style={{ aspectRatio: 1 }}>
              </div>
            <div className="w-full">
              <textarea
                name=""
                id=""
                cols="50"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
              ></textarea>
              <div className="flex flex-space-between pt-s">
                <div className="flex" style={{ gap: "1rem" }}>
                  <i className="bi bi-card-image gen-btn"></i>
                  <i className="bi bi-filetype-gif gen-btn"></i>
                  <i className="bi bi-emoji-smile gen-btn"></i>
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}