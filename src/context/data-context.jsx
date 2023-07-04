import {useContext,createContext,useState,useEffect,useReducer} from 'react';
import { ToastType } from '../utils/constants';
import { ToastHandler } from '../utils/utils';

import { GetAllPosts,GetAllUsers,GetBookmarkPosts } from '../services/services';
import { useAuth } from './auth-context';
import { mainReducer } from '../Reducer/mainReducer';

const DataContext = createContext();

const DataProvider = ({children}) =>{

    const {currUser,token} = useAuth();
    
    const initialState = {
        allPosts:[],
        bookmarks:[],
        followedUsers:[],
        allUsers:[],
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
    return(
        <DataContext.Provider
         value = {{
            allPosts:state.allPosts,
            bookmarks:state.bookmarks,
            allUsers:state.allUsers,
            followedUsers:state.followeedUsers,
            dispatch:dispatch,
            getUsersData,
            getPostsData,
            fetchBookmarks,
            item:"xyz",
            state:state,
         }}
        >
            {children}
        </DataContext.Provider>
    )
}
const useData =()=> useContext(DataContext);
export { useData, DataProvider };
 

