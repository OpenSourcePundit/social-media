 export const mainReducer = (state,{type,payload}) =>{

    switch(type){
            case "Add_Category":
            //return  {...state, category:{...state.category,  payload}};
            return  {
                ...state, category:[...state.category,  ...payload]
            };      
            case "Add_Product":
            return{
                ...state, products:[...state.products, ...payload]
            };
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
            case "showstate":
                console.log("statereducer 27",state);

        default: 
            return state;
 }

}