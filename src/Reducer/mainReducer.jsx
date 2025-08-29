 export const mainReducer = (state,{type,payload}) =>{

    switch(type){
            
            case "get_all_posts":             
            return{
                ...state,allPosts:[...payload]
            };
            case "get_all_users":
                
            return{
                ...state,allUsers:[...payload]
            };
            case "get_all_bookmarks": 
            return{
                ...state,bookmarks:[...payload],
            };
            case "add_new_user":                
            return{
                ...state,allUsers:[...state.allUsers,payload]
            };
            case "update follow user":

                let tempusers = [...state.allUsers];
                tempusers = tempusers.filter((temp)=>temp.username!==payload.user.username && temp.username!==payload.followUser.username)
            return{...state,allUsers:[...tempusers,payload.user,payload.followUser]};

            case "editUser":

                let tempusers1 = [...state.allUsers];
                tempusers1 = tempusers1.filter((temp)=>temp.username!==payload.username)
            return{...state,allUsers:[...tempusers1,payload]}

            case "peoplesearch":
                return{...state,peopleSearch: payload}

            case "postsearch":
                return{...state,postSearch: payload}
            
            
            
            
            
            case "showstate":
                console.log("statereducer 27",state);
                return state;

        default: 
            return state;
 }

}