
import axios from 'axios';

const API = axios.create({
    baseURL :' https://fancy-blog-app.herokuapp.com'
})

//--------------------- api for blog ----------------------//

export const  getBlogs = () => API.get('/blog');
export const  createBlog = (blog) => API.post('/blog', blog);
export const  getBlogByQuery = (searchQuery) => API.get(`/blog`+searchQuery);
export const  deleteBlog = (id) => API.delete(`/blog/${id}`);
export const  updatedBlog = (id,blog) => API.put(`/blog/${id}`, blog);



        //--------------API FOR CATEGORY  //// 
        export const  getCategory = () => API.get('/category');

//=============API for Registeration =====================//

export const userRegistration = (info) => API.post('/auth/register', info);
export const loginUser = (logInfo) => API.post('/auth/login', logInfo);
export const updatedUser = (id, updatedProfile) => API.put(`/user/${id}`, updatedProfile);
export const deleteUser = (id) => API.delete(`/user/${id}`);
