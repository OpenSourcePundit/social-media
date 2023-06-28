import {useContext,createContext,useState,useEffect,useReducer} from 'react';
import { ToastType } from '../utils/constants';
import { ToastHandler } from '../utils/utils';

import { GetAllPosts } from '../services/services';
import { userReducer } from '../Reducer/userReducer';
import { postReducer } from '../Reducer/postReducer';

const DataContext = createContext();

const DataProvider = ({children}) =>{

    const [poststate,postDispatch] = useReducer(postReducer,{})
    const [userstate,userDispatch] = useReducer(userReducer,{})




   const getPostsData = async() =>{
    try{
        const {data:{posts},status}= await GetAllPosts();
        if(status===200){
            console.log(posts);
        }

    }
    catch(err){console.log("Error",err);}
   
  }  
    const getUsersData = () =>{
    
   }



useEffect(() =>{getPostsData()},[])
    return(
        <DataContext.Provider
         value = {GetAllPosts}
        >
            {children}
        </DataContext.Provider>
    )
}
const useData =()=> useContext(DataContext);
export { useData, DataProvider };
 

