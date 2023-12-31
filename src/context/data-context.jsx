import {useContext,createContext,useState,useReducer} from 'react';
import { ToastType } from '../utils/constants';
import { ToastHandler } from '../utils/utils';

import { GetAllPosts,GetAllUsers,GetBookmarkPosts,FollowUser,UnfollowUser} from '../services/services';
import { useAuth } from './auth-context';
import { mainReducer } from '../Reducer/mainReducer';

const DataContext = createContext();

const DataProvider = ({children}) =>{

    const {currUser,token} = useAuth();
    const [editPostId,setEditPostId] = useState();
    const [sortBy,setSortBy] = useState('');
    const [editpostInput, setEditPostInput] = useState({
        content: "",
        pic: "",
      });
      const [postInput, setPostInput] = useState({
        content:"",
        pic:"",
      });
    
    const initialState = {
        allPosts:[],
        bookmarks:[],
        followedUsers:[],
        allUsers:[],
        postSearch:'',
        peopleSearch:'',
    }

    

    const [state,dispatch] = useReducer(mainReducer,initialState)

    


   const getPostsData = async() =>{
    try{
        const {data:{posts},status}= await GetAllPosts();       
        if(status===200){
            dispatch({

                type:"get_all_posts",
                payload: posts
            })
        }

    }
    catch(err){console.log("Error",err);}
   
  }  
  const getUsersData = async() =>{
    try{
        const {data:{users},status}= await GetAllUsers();
        if(status===200){
            dispatch({
                type:"get_all_users",
                payload: users
            })
            // console.log("data:",data);
           
        }

    }
    catch(err){console.log("Error",err);}
   
  }

  const fetchBookmarks = async(token) =>{
    try{
        const {data:{bookmarks},status}= await GetBookmarkPosts({encodedToken:token});
        if(status===200){
            dispatch({
                type:"get_all_bookmarks",
                payload: bookmarks
            })
            
           
        }

    }
    catch(err){console.log("Error",err);}
   
  }

  const followUserHandler = async(user1,token) =>{
    try{
        const {data:{user,followUser},status}= await FollowUser({encodedToken:token,followUserId:user1._id});
        if(status===200){
          ToastHandler(ToastType.Success, `Followed ${followUser.name} !`);
            dispatch({
                type:"update follow user",
                payload: {user,followUser},
            })
        }
    }
    catch(err){console.log("Error",err); ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);}

}
  const unfollowUserHandler = async(user1,token) =>{
    try{
        const {data:{user,followUser},status}= await UnfollowUser({encodedToken:token,followUserId:user1._id});
        if(status===200){
          ToastHandler(ToastType.Success, `Un-Followed ${followUser.name} !`);
            dispatch({
                type:"update follow user",
                payload: {user,followUser},
            })
        }
    }
    catch(err){console.log("Error",err); ToastHandler(ToastType.Error, `${err?.response?.data?.errors}`);}

}

  const sortByDate = (posts) => {
    return([...posts].sort((a,b)=>Date.parse(b.createdAt) - Date.parse(a.createdAt))
    )
  }
  const sortByTrending = (posts) => {
    return([...posts].sort((a,b)=>Date.parse(b.likes.likeCount) - Date.parse(a.likes.likeCount))
    )
  }

  const sortPost = (posts,sortBy) => {
    switch (sortBy){
        case 'Latest':
            return (sortByDate(posts));
            break;
        case 'Trending':
            return (sortByTrending(posts));
            break;
        default:
            return ( posts);
    }
}

   
    return(
        <DataContext.Provider
         value = {{
            allPosts:state.allPosts,
            bookmarks:state.bookmarks,
            allUsers:state.allUsers,
            followedUsers:state.followeedUsers,
            postSearch:state.postSearch,
            peopleSearch:state.peopleSearch,

            dispatch:dispatch,
            getUsersData,
            followUserHandler,
            unfollowUserHandler,
            getPostsData,
            fetchBookmarks,
            item:"xyz",
            editPostId,
            setEditPostId,
            state:state,
            sortByDate,
            sortByTrending,
            sortBy,
            setSortBy,
            sortPost,
            editpostInput,
            setEditPostInput,
            postInput, 
            setPostInput

         }}
        >
            {children}
        </DataContext.Provider>
    )
}
const useData =()=> useContext(DataContext);
export { useData, DataProvider };
 

