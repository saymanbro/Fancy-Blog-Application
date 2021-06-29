import {  combineReducers } from 'redux';

import { Blog , User, Category}  from './reducers';

const  allReducers =combineReducers({ Blog, User , Category});
export default allReducers ;