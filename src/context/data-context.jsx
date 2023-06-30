import {useContext,createContext,useState,useEffect,useReducer} from 'react';
import { ToastType } from '../utils/constants';
import { ToastHandler } from '../utils/utils';

import { GetAllPosts,GetAllUsers } from '../services/services';
import { useAuth } from './auth-context';
import { mainReducer } from '../Reducer/mainReducer';

const DataContext = createContext();

const DataProvider = ({children}) =>{

    const {currUser} = useAuth;
    
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
            console.log("posts:",posts)
            console.log("state",state)
            dispatch({
                type:"get_all_posts",
                payload: posts
            })
            console.log("datastate:",state);

            dispatch({
                type:"showstate",
            })
            
        }

    }
    catch(err){console.log("Error",err);}
   
  }  
  const getUsersData = async() =>{
    try{
        const {data:{users},status}= await GetAllUsers();
        if(status===200){
            console.log("usershehsa:",users)
            console.log("stateuser",state)

            dispatch({
                type:"get_all_users",
                payload: users
            })
            // console.log("data:",data);
           
        }

    }
    catch(err){console.log("Error",err);}
   
  }



useEffect(() =>{getPostsData();getUsersData()},[]);

    return(
        <DataContext.Provider
         value = {{
            allPosts:state.allPosts,
            bookmarks:state.bookmarks,
            allUsers:state.allUsers,
            followedUsers:state.followeedUsers,
            dispatch:dispatch,
         }}
        >
            {children}
        </DataContext.Provider>
    )
}
const useData =()=> useContext(DataContext);
export { useData, DataProvider };
 

