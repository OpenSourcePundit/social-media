import { useEffect } from "react";
import {useForm} from "react-hook-form"
import { useData } from "./context/data-context";
import { useAuth } from "./context/auth-context";
import { CreatePost } from "./services/services";
import { ToastHandler } from "./utils/utils";
import { ToastType } from "./utils/constants";


export const Modals = () =>{
    const {token} = useAuth();
    const {editPostId,allPosts,dispatch} = useData();
    let {register,handleSubmit,reset,setValue} = useForm(
        {
        defaultValues: {
          editpost: `${allPosts?.find((post)=>post._id===editPostId)?.content} HI HELLO`
        }
      }
      );

    const createPostHandler  = async(data) => {
try{
      const {data:{posts},status} = await CreatePost({encodedToken:token,content:data.createpost});
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

    const editPostHandler  = (data) => {
        // const {data:{},status}
        console.log(data.editpost,editPostId);

        // CreateNewPostModal.hide()
        reset();
    }

    

    return(
        <>
        <> {/*create post modal */}
        <div className="modal fade" id="CreateNewPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <form onSubmit={handleSubmit(createPostHandler)}>
    <div className="white-bg  p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs create-box-left"style={{ aspectRatio: 1 }}>
              </div>
            <div className="w-full">
              <textarea type="text" name= "createpost" {...register('createpost')}
                cols="70"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
              ></textarea>
             
            </div>
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary primary primary-bg" data-toggle="modal"
          data-target="#CreateNewPostModal" >Post</button>
      </div>
    </form>
    </div>
  </div>
</div>
        </>

      <> {/*edit post modal */}
      <div className="modal fade" id="EditPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div>
    <div className="white-bg  p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs create-box-left"style={{ aspectRatio: 1 }}>
              </div>
            <div className="w-full">
              <textarea type="text" name= "editpost" 
                cols="70"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
                defaultValue={allPosts?.find((post)=>post._id===editPostId)?.content}
              > </textarea>
              
            </div>
          </div>
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary primary primary-bg" data-toggle="modal"
          data-target="#EditPostModal" onClick={()=>editPostHandler()}>Save Post</button>
      </div>
    </div>
    </div>
  </div>
</div>
        </>  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}