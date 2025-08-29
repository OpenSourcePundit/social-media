
import { useData } from "./context/data-context";
import { useAuth } from "./context/auth-context";
import { CreatePost } from "./services/services";
import { ToastHandler } from "./utils/utils";
import { ToastType } from "./utils/constants";


export const Modals = () =>{
    const {token,currUser} = useAuth();
    const {dispatch,allUsers,postInput, setPostInput} = useData();
    // const [postInput, setPostInput] = useState({
    //   content:"",
    //   pic:"",
    // });


    const reset = ()=>{
      setPostInput((prev)=>({
        content:"",
        pic:"",
      }))
    }

    

      const convertBase64 = (file)=>{

        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () =>{
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) =>{
            reject(error)
          };
        })
      }

      const handleUpload =async(event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setPostInput((prev)=>({...prev, pic:base64}))
        
      }

    const createPostHandler  = async(data) => {
try{
      const {data:{posts},status} = await CreatePost({encodedToken:token,content:data});
      if(status===201){
        ToastHandler(ToastType.Success, "Post created !");
          dispatch({
              type:"get_all_posts",
              payload: posts,
          })

      }

    }
  catch(err){console.log("Error",err); ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);}
  
    }

  
    // "grey-bg br-full width-xs  p-xs mr-xs currUser-box-left gen-btn"

    return(
        
        <> {/*create post modal */}
        <div className="modal fade" id="CreateNewPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
   
    <div className="white-bg  p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
          { allUsers?.find((user)=>user?.username===currUser?.username)?.profile_pic ===undefined ? <div
              className= "grey-bg br-full width-s height-s p-xs mr-xs post-box-left"
              style={{ aspectRatio: 1 }}
            ></div>
            :
            <img alt="profilepic" src={`${allUsers.find((user)=>user?.username===currUser?.username)?.profile_pic}`} className=" br-full  currUser-box-left gen-btn"
              style={{ aspectRatio: 1 }}  />
           }
            <div className="w-full">
              <textarea type="text" name= "createpost" 
                cols="70"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
                onChange={(e)=> setPostInput((prev)=>({
                  ...prev, content: e.target.value}))
                }
                value={postInput?.content}
              ></textarea>
             
            </div>
          </div>


          <div className='select-Image-container'>
          <label className='image-btn flex' htmlFor="upload" style={{justifyContent:"left"}}>
            <i class="bi bi-image-fill"></i>
          <input type="file" id='upload' style={{display:"none"}}  onChange={(event)=> {handleUpload(event)}}
          accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
          />

           {postInput.pic &&  <div className="modal-image-container">
            <img className='modal-image' style={{width:"130px", height:"90px"}} src={postInput.pic} alt="Post" />
            <span className='modal-image-cancel'>{<i class="bi bi-x-circle" onClick={()=> setPostInput((prev)=> ({...prev, pic:""}))}></i>}</span>
          </div>}



          </label>
          </div>




        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{reset()}}>Close</button>
        <button type="submit" className="btn btn-primary primary primary-bg" data-toggle="modal"
          data-target="#CreateNewPostModal" onClick={()=>{createPostHandler(postInput);reset()}} >Post</button>
      </div>

    </div>
  </div>
</div>
        </>

    )
}