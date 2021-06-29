
        // ------------Blog REDUCERS -------------------------- //

export const Blog = (blog=[], action) => {

      switch(action.type) {

        case "FETCH_ALL_BLOG" : return action.payload;
        case "FETCH_BLOG_USER_OR_CATEGORY" : return  action.payload;
        case "DELETE" : return blog.filter(b=> b._id !== action.payload);
        case 'UPDATE_BLOG': return[...blog, action.payload]
        
        default : return blog;
      }
}


        // ------------------USER REDUCERS --------------------- //

        export const User = (user=[], action) => {
            switch(action.type) {
      
              case "FETCH_USER" : return action.payload;
      
              default : return user;
            }
      }        
      
      ///---------------------------CATEGORY REDUCER ----------------//
          
      export const Category = (category=[], action) => {
          switch(action.type) {
    
            case "GET_ALL_CATEGORY" : return action.payload;
    
            default : return category;
          }
    }        
      ///---------------------------CATEGORY REDUCER ----------------//
          
      export const Auth = (auth={authData: null}, action) => {
          switch(action.type) {
    
           
            case 'LOGIN' : localStorage.setItem('profile', JSON.stringify({...action?.payload}));
            return  {...auth, authData: action?.payload};
            case 'LOGOUT':localStorage.clear() 
              return  {...auth, authData:null} ;
            default : return auth;
          }
    }        