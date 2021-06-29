import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Post from '../../Components/Posts/Posts'
import './home.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBlogByAuthorOrCategory, getBlogs } from '../../Actions/action';
import { getCategories } from '../../Actions/action';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const {search} = useLocation()
    const dispatch = useDispatch();
 
    useEffect(() => {
     
        dispatch(getBlogs());
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
     
        dispatch(getBlogByAuthorOrCategory(search))
    }, [search, dispatch])
    return (
        <>
            <Header />
            <div className="home_container  p-0">
                <div className="row">
                    <div className="col-sm-12 col-md-9">
                     <Post />                       
                    </div>
                    <div className="col-sm-12 d-none d-md-block col-md-3 p-0 ">
                <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Home);