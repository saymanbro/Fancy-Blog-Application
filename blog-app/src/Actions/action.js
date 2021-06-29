import * as api from '../Api/api';



export const createBlog = (blog) => async (dispatch) => {
        try{    
                 const { data } = await api.createBlog(blog);
                 console.log(data)
                 
                }catch(err){
                console.log(err)
        }
}
export const getBlogs = () => async (dispatch) =>  {
        try{
                const { data } = await api.getBlogs();
                dispatch({ type:'FETCH_ALL_BLOG', payload: data});
               
        }catch(e){
            console.log(e);
        }
}
export const getBlogByAuthorOrCategory = (searchQuery) => async (dispatch) =>  {
        try{
                const { data } = await api.getBlogByQuery(searchQuery);
              
                dispatch({ type:'FETCH_BLOG_USER_OR_CATEGORY', payload: data})
        }catch(e){
            console.log(e);
        }
}

export const deleteBlog = (id) => async (dispatch) =>  {
        try{
               await api.deleteBlog(id);
              
                dispatch({ type:'DELETE_BLOG', payload: id})
        }catch(e){
            console.log(e);
        }
}

export const updatedBlog = (id, blog) => async (dispatch) =>  {
        try{
             const { data} =  await api.updatedBlog(id,blog);
               
                dispatch({ type:'UPDATE_BLOG', payload: data})
        }catch(e){
            console.log(e);
        }
}











                         //------------ Action For categories ----------------//
export const getCategories = () => async (dispatch) =>  {
        try{
                const { data } = await api.getCategory();
                dispatch({ type:'GET_ALL_CATEGORY', payload: data})
        }catch(e){
            console.log(e);
        }
}

